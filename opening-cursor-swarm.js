(() => {
  const entry = document.getElementById('entry');
  const layer = document.getElementById('cursor-swarm');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const cards = Array.from({length: 64}, (_, index) => {
    const element = document.createElement('span');
    element.style.background = ['#A7D8FF', '#D1EAFF', '#FFFFFF'][index % 3];
    layer.append(element);
    return {element, angle: index * 2.39996, radius: 12 + Math.random() * 42, x: 0, y: 0};
  });
  let x, y, frame = 0;

  function stop() {
    cancelAnimationFrame(frame);
    frame = 0;
    layer.hidden = true;
  }

  function draw(now) {
    for (const card of cards) {
      const angle = card.angle + now * .0018;
      const radius = card.radius * (1 + .18 * Math.sin(angle * 3));
      card.x += (x + Math.cos(angle) * radius - card.x) * .12;
      card.y += (y + Math.sin(angle) * radius - card.y) * .12;
      card.element.style.transform = `translate(${card.x}px, ${card.y}px) rotate(${angle}rad)`;
    }
    frame = requestAnimationFrame(draw);
  }

  entry.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse' || reduced.matches || entry.inert) return;
    const bounds = entry.getBoundingClientRect();
    x = event.clientX - bounds.left;
    y = event.clientY - bounds.top;
    if (frame) return;
    for (const card of cards) {
      card.x = x;
      card.y = y;
    }
    layer.hidden = false;
    draw(performance.now());
  });
  entry.addEventListener('pointerleave', stop);
  document.getElementById('enter').addEventListener('click', stop);
  reduced.addEventListener('change', stop);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
  });
})();
