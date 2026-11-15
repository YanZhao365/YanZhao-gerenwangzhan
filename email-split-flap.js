// Single-phrase entrance adapted from React Bits Split Flap Text.
function renderEmailFlap(link) {
  const email = link.textContent;
  link.setAttribute('aria-label', email);
  const board = document.createElement('span');
  board.className = 'split-flap-text';
  board.setAttribute('aria-hidden', 'true');

  function face(className, glyph) {
    const panel = document.createElement('span');
    panel.className = className;
    const text = document.createElement('span');
    text.className = 'split-flap-text__char';
    text.textContent = glyph;
    panel.append(text);
    return panel;
  }

  const tiles = Array.from(email, glyph => {
    const tile = document.createElement('span');
    tile.className = 'split-flap-text__tile';
    tile.append(face('split-flap-text__half split-flap-text__half--top', glyph),
      face('split-flap-text__half split-flap-text__half--bottom', glyph));
    board.append(tile);
    return tile;
  });
  link.replaceChildren(board);

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    observer.disconnect();
    tiles.forEach((tile, index) => {
      const glyph = email[index];
      const front = face('split-flap-text__flap split-flap-text__flap--front', ' ');
      const back = face('split-flap-text__flap split-flap-text__flap--back', glyph);
      const delay = index * 28;
      tile.lastElementChild.firstElementChild.textContent = ' ';
      front.style.animationDelay = back.style.animationDelay = delay + 'ms';
      front.style.backgroundColor = 'var(--split-flap-tile-color)';
      back.addEventListener('animationend', () => {
        tile.children[1].firstElementChild.textContent = glyph;
        front.remove();
        back.remove();
      }, { once: true });
      tile.append(front, back);
    });
  });
  observer.observe(link);
}
