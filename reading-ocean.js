(() => {
  const reading = document.querySelector('#reading');
  const navigation = reading.querySelector('.reading-nav');
  const exhibition = reading.querySelector('#exhibition');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const aurora = getComputedStyle(reading).getPropertyValue('--aurora').trim();
  const laser = createReadingLaser(reading.querySelector('.reading-laser'), aurora);
  reading.toggleAttribute('data-laser-fallback', !laser);

  const raysLayer = reading.querySelector('.reading-side-rays');
  mountReadingSideRays(raysLayer);
  mountWorldGlowCursor(document.querySelector(".world-glow-cursor"));
  const depth = { current: [0, 1] };
  let disposeEffects;
  function syncEffects() {
    if (reading.inert) {
      disposeEffects?.();
      disposeEffects = undefined;
    } else if (!disposeEffects) {
      disposeEffects = mountReadingOceanEffects(
        reading.querySelector('.reading-react-particles'),
        reading.querySelector('.reading-glow-cursor'),
        depth
      );
    }
  }

  const stops = [...navigation.querySelectorAll('a')].map((link, index) => {
    const slot = document.createElement('div');
    slot.className = 'pill-nav__slot';
    link.classList.add('pill-nav__item');
    const face = document.createElement('span');
    face.className = 'pill-nav__face';
    const label = link.textContent;
    link.setAttribute('aria-label', label);
    const fallback = document.createElement('span');
    fallback.className = 'reading-label-text';
    fallback.textContent = label;
    const effect = document.createElement('div');
    effect.className = 'reading-label-stroke';
    effect.setAttribute('aria-hidden', 'true');
    face.append(fallback, effect);
    let unmount = null;
    function removeStroke() {
      unmount?.();
      unmount = null;
    }
    link.replaceChildren(face);
    link.before(slot);
    slot.append(link);
    slot.inert = true;
    slot.addEventListener('animationend', event => {
      if (event.animationName === 'aurora-drain' && !slot.classList.contains('is-lit')) {
        slot.classList.remove('is-draining');
        removeStroke();
      }
    });
    const chapter = index ? reading.querySelector(link.hash) : null;
    if (chapter) link.addEventListener('click', event => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey ||
          event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      if (location.hash !== link.hash) history.pushState(null, '', link.hash);
      chapter.querySelector('h2').focus({ preventScroll: true });
      chapter.scrollIntoView({ behavior: motion.matches ? 'instant' : 'smooth', block: 'start' });
      wake();
    });
    return {
      slot, chapter, y: 0, removeStroke,
      showStroke() {
        if (motion.matches || unmount) return;
        unmount = mountReadingStrokeText(effect, label, parseFloat(getComputedStyle(face).fontSize), aurora, index % 2 === 0);
      }
    };
  });

  let frame = 0;
  let maximumScroll = 1;
  let layoutDirty = true;

  function measure() {
    maximumScroll = Math.max(1, reading.offsetHeight - innerHeight);
    stops.forEach(({ slot, chapter }, index) => {
      const y = innerHeight * (0.08 + index * 0.135);
      stops[index].y = y;
      stops[index].scrollAt = chapter ? Math.min(maximumScroll, Math.round(chapter.getBoundingClientRect().top + window.scrollY)) : 0;
      slot.style.top = y + 'px';
    });
    layoutDirty = false;
  }

  function paint(now) {
    frame = 0;
    if (reading.inert || document.hidden || exhibition?.classList.contains('immersed')) return;
    if (layoutDirty) measure();

    const width = document.documentElement.clientWidth;
    const height = innerHeight;
    const y = window.scrollY;
    const progress = Math.min(1, y / maximumScroll);
    const spread = Math.max(0, (progress - 0.97) / 0.03);
    // Let the light pass each label when its chapter reaches the viewport top.
    let previous = stops[0];
    let reach = height;
    for (const next of [...stops.slice(1), { scrollAt: maximumScroll, y: height }]) {
      if (y < next.scrollAt) {
        const fraction = (y - previous.scrollAt) / (next.scrollAt - previous.scrollAt);
        reach = previous.y + (next.y - previous.y) * fraction;
        break;
      }
      previous = next;
    }
    const time = motion.matches ? 0 : now / 1000;
    const fadeStart = stops.find(stop => stop.chapter?.id === 'work').y / height;
    const fade = Math.min(1, Math.max(0, (reach / height - fadeStart) / 0.085));
    const raysOpacity = 1 - fade * fade * (3 - 2 * fade);
    raysLayer.style.opacity = raysOpacity;
    raysLayer.hidden = raysOpacity === 0;
    const beamX = stops[0].slot.offsetLeft;

    stops.forEach(({ slot, y: stopY, chapter, showStroke, removeStroke }) => {
      const lit = reach >= stopY - 0.5;
      if (slot.classList.contains('is-lit') && !lit) slot.classList.add('is-draining');
      if (lit) {
        slot.classList.remove('is-draining');
        showStroke();
      }
      if (motion.matches) {
        slot.classList.remove('is-draining');
        removeStroke();
      }
      slot.classList.toggle('is-lit', lit);
      slot.inert = !lit;
      slot.toggleAttribute('data-on', chapter && location.hash === '#' + chapter.id);
    });

    if (laser) laser(width, height, beamX, reach, height - 2, spread, time);
    else {
      reading.style.setProperty('--front', reach + 'px');
      reading.style.setProperty('--spill', spread);
    }

    const pageHeight = maximumScroll + height;
    depth.current = [y / pageHeight, height / pageHeight];

    if (!motion.matches) wake();
  }

  function wake() {
    if (!frame && !reading.inert && !document.hidden && !exhibition?.classList.contains('immersed')) {
      frame = requestAnimationFrame(paint);
    }
  }

  new ResizeObserver(() => { layoutDirty = true; wake(); }).observe(reading);
  new MutationObserver(() => {
    syncEffects();
    if (reading.inert) {
      stops.forEach(({ slot, removeStroke }) => { slot.classList.remove('is-lit', 'is-draining'); slot.inert = true; removeStroke(); });
    }
    layoutDirty = true;
    wake();
  }).observe(reading, {
    attributes: true, attributeFilter: ['inert']
  });
  if (exhibition) new MutationObserver(() => {
    if (exhibition.classList.contains('immersed')) return;
    layoutDirty = true;
    wake();
  }).observe(exhibition, { attributes: true, attributeFilter: ['class'] });
  window.addEventListener('scroll', wake, { passive: true });
  window.addEventListener('hashchange', wake);
  window.addEventListener('resize', () => { layoutDirty = true; wake(); });
  document.addEventListener('visibilitychange', wake);
  motion.addEventListener('change', wake);
})();
