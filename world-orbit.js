// Text navigation adapted from React Bits Orbit Images by Dominik Koch:
// https://reactbits.dev/animations/orbit-images
function setupWorldOrbit(group) {
  const items = [...group.querySelectorAll('a')];
  const labelPainters = [];
  let pointer = null;
  group.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch' || reduce.matches) return;
    pointer = {x:event.clientX,y:event.clientY};
    repaintLabels();
  });
  group.addEventListener('pointerleave', clearPointer);
  reduce.addEventListener('change', clearPointer);
  function clearPointer() {
    pointer = null;
    repaintLabels();
  }
  function repaintLabels() {
    labelPainters.forEach(paintLabel => paintLabel(pointer));
  }
  const labels = items.map(item => {
    const canvas = document.createElement('canvas');
    canvas.className = 'orbit-label-particles';
    canvas.setAttribute('aria-hidden', 'true');
    item.append(canvas);
    return canvas;
  });
  const track = group.querySelector('ellipse');
  const particles = Array.from({length: 42}, (_, index) => {
    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.classList.add('orbit-particle');
    dot.setAttribute('r', index % 7 === 0 ? '1.65' : '0.85');
    track.after(dot);
    return dot;
  });
  const narrow = matchMedia("(max-width: 650px)");
  let length = 0;
  let phase = 0.04;
  let last = 0;
  let frame = 0;
  let visible = false;

  function paint() {
    particles.forEach((dot, index) => {
      const hidden = narrow.matches && index % 3 !== 0;
      if (hidden) return;
      const progress = (phase * 2 + index / particles.length) % 1;
      const point = track.getPointAtLength(progress * length);
      const depth = (point.y / track.ry.baseVal.value + 1) / 2;
      dot.setAttribute('cx', point.x);
      dot.setAttribute('cy', point.y);
      dot.setAttribute('opacity', (0.32 + depth * 0.48 + (index % 7 === 0 ? 0.2 : 0)).toFixed(2));
    });
    items.forEach((item, index) => {
      const position = (phase + index / items.length) % 1;
      // Pass more quickly across the lighthouse at the front of the orbit.
      const progress = (position + .045 * Math.sin(2 * Math.PI * (position - .25)) + 1) % 1;
      const angle = progress * 2 * Math.PI;
      const point = narrow.matches
        ? {x: Math.cos(angle) * track.rx.baseVal.value, y: Math.sin(angle) * track.ry.baseVal.value}
        : track.getPointAtLength(progress * length);
      const depth = (point.y / track.ry.baseVal.value + 1) / 2;
      item.style.left = `calc(50% + ${point.x}px)`;
      item.style.top = `calc(50% + ${point.y}px)`;
      item.style.setProperty('--orbit-scale', (0.85 + depth * 0.28).toFixed(3));
      item.style.setProperty('--orbit-opacity', (0.7 + depth * 0.3).toFixed(3));
      item.style.zIndex = String(Math.round(depth * 100));
    });
    if (pointer) repaintLabels();
  }

  function tick(now) {
    frame = 0;
    if (!visible || document.hidden || reduce.matches ||
        group.querySelector('a:focus-visible') || group.classList.contains('is-travelling')) {
      last = 0;
      return;
    }
    if (last) phase = (phase + Math.min(now - last, 50) / 18000) % 1;
    last = now;
    paint();
    wake();
  }

  function wake() {
    if (!frame) frame = requestAnimationFrame(tick);
  }

  function layout() {
    const {clientWidth: width, clientHeight: height} = group;
    if (!width || !height) return;
    items.forEach((item, index) => {
      const canvas = labels[index];
      const style = getComputedStyle(item);
      const dpr = Math.min(devicePixelRatio || 1, 2);
      const width = item.offsetWidth;
      const height = item.offsetHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = style.font;
      ctx.letterSpacing = style.letterSpacing;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(item.getAttribute('aria-label'), width / 2, height / 2);
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      const points = [];
      const step = Math.max(1, Math.round(2 * dpr));
      for (let y = 0; y < canvas.height; y += step) {
        for (let x = 0; x < canvas.width; x += step) {
          if (pixels[(y * canvas.width + x) * 4 + 3] < 85) continue;
          points.push([x / dpr, y / dpr]);
        }
      }
      let disturbed = true;
      labelPainters[index] = cursor => {
        const bounds = cursor && canvas.getBoundingClientRect();
        const nearby = bounds && bounds.width && cursor.x >= bounds.left - 20 &&
          cursor.x <= bounds.right + 20 && cursor.y >= bounds.top - 20 &&
          cursor.y <= bounds.bottom + 20;
        if (!nearby && !disturbed) return;
        disturbed = Boolean(nearby);
        const x = nearby ? (cursor.x - bounds.left) * width / bounds.width : Infinity;
        const y = nearby ? (cursor.y - bounds.top) * height / bounds.height : Infinity;
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = '#dcf5ff';
        for (const [px, py] of points) {
          const dx = px - x, dy = py - y;
          const distance = Math.hypot(dx, dy);
          const push = distance > 0 && distance < 20 ? (1 - distance / 20) * 3 / distance : 0;
          ctx.fillRect(px + (push ? dx * push : 0), py + (push ? dy * push : 0), 1.25, 1.25);
        }
      };
      labelPainters[index](pointer);
      item.classList.add('has-particle-label');
    });
    group.querySelector('svg').setAttribute('viewBox', `${-width / 2} ${-height / 2} ${width} ${height}`);
    const labelPadding = Math.max(...items.map(item => item.offsetWidth)) * 0.57;
    track.setAttribute('rx', Math.max(1, width / 2 - labelPadding - (narrow.matches ? 8 : 0)));
    track.setAttribute('ry', Math.max(1, height / 2 - 30));
    length = track.getTotalLength();
    particles.forEach((dot, index) => { dot.style.display = narrow.matches && index % 3 !== 0 ? 'none' : ''; });
    paint();
  }

  new ResizeObserver(layout).observe(group);
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    wake();
  }).observe(group);
  narrow.addEventListener('change', () => { layout(); wake(); });
  group.addEventListener('focusout', wake);
  new MutationObserver(wake).observe(group, {attributes: true, attributeFilter: ['class']});
  document.addEventListener('visibilitychange', wake);
  reduce.addEventListener('change', wake);
  layout();
}
