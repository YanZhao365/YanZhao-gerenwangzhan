// Adapted from React Bits Branched Menu (JS-CSS).
function renderJourney(section, records) {
  const menu = document.createElement('nav');
  menu.className = 'branched-menu';
  menu.setAttribute('aria-label', '按年份浏览大学足迹');
  const groups = Map.groupBy(records, record => record.date.slice(0, 4));
  let active;
  for (const [year, entries] of groups) {
    const group = document.createElement('div');
    group.className = 'branched-menu__section';
    group.innerHTML = '<div class="branched-menu__heading"><button type="button" class="branched-menu__head"></button></div><div class="branched-menu__body"><div class="branched-menu__fold"><div class="branched-menu__tree"></div></div></div>';
    const head = group.querySelector('button');
    const body = group.querySelector('.branched-menu__body');
    const tree = group.querySelector('.branched-menu__tree');
    head.textContent = year;
    const certificates = window.siteContent.journeyCertificates?.[year];
    if (certificates?.length && window.mountJourneyFolder) {
      const folder = document.createElement('div');
      folder.className = 'journey-folder';
      head.after(folder);
      window.mountJourneyFolder(folder, year, certificates);
    }
    tree.innerHTML = '<svg class="branched-menu__lines" width="40" height="100%" aria-hidden="true"><path class="branched-menu__base"/>' + entries.map(() =>
      '<path class="branched-menu__base"/><path class="branched-menu__reach" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/>'
    ).join('') + '</svg>';
    const lines = tree.querySelectorAll('.branched-menu__reach');
    const bases = tree.querySelectorAll('.branched-menu__base');
    const setOpen = open => {
      group.toggleAttribute('data-open', open);
      head.setAttribute('aria-expanded', String(open));
      body.inert = !open;
    };
    head.onclick = () => setOpen(!group.hasAttribute('data-open'));
    entries.forEach((record, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'branched-menu__item';
      const label = document.createElement('span');
      label.className = 'branched-menu__label';
      label.textContent = record.date.slice(5) + ' · ' + record.title;
      button.append(label);
      button.onclick = () => {
        active?.button.removeAttribute('data-active');
        active?.button.removeAttribute('aria-current');
        active?.line.setAttribute('stroke-dashoffset', '1');
        active = { button, line: lines[index] };
        button.setAttribute('data-active', '');
        button.setAttribute('aria-current', 'true');
        active.line.setAttribute('stroke-dashoffset', '0');
      };
      tree.append(button);
      if (!active) button.click();
    });
    const buttons = tree.querySelectorAll('.branched-menu__item');
    new ResizeObserver(() => {
      buttons.forEach((button, index) => {
        const y = button.offsetTop + button.offsetHeight / 2;
        const curve = ' A 10 10 0 0 0 24 ' + y + ' H 32';
        bases[index + 1].setAttribute('d', 'M 14 ' + (y - 10) + curve);
        lines[index].setAttribute('d', 'M 14 0 V ' + (y - 10) + curve);
        if (index === buttons.length - 1) bases[0].setAttribute('d', 'M 14 0 V ' + (y - 10));
      });
    }).observe(tree);
    setOpen(menu.childElementCount === 0);
    menu.append(group);
  }
  section.append(menu);
}
