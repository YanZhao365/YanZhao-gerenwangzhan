const lighthouse = (() => {
  let seed = 1977;
  function random() {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  }

  const tower = [];
  const tau = 2 * Math.PI;
  const frame = '#7494aa';
  const plaster = '#d7e6ee';

  function surface(count, sample) {
    for (let i = 0; i < count; i++) {
      const point = sample(random() * tau, random());
      tower.push({...point, size: .48 + random() * .49, alpha: .42 + random() * .51});
    }
  }

  surface(8500, (angle, u) => {
    const y = u * .76;
    const facing = Math.cos(angle);
    let radius = .052 + .042 * Math.pow(1 - u, 1.3) + .014 * Math.exp(-u * 40);
    const side = Math.sin(angle);
    const door = facing > 0 && Math.abs(side + .16) < .22 &&
      y < .077 + .035 * Math.sqrt(Math.max(0, 1 - ((side + .16) / .22) ** 2));
    const window = facing > 0 && (
      (Math.abs(side - .48) < .105 && Math.abs(y - .34) < .035) ||
      (Math.abs(side + .35) < .105 && Math.abs(y - .56) < .035)
    );
    if (door || window) radius -= .012;
    return {x: side * radius, z: facing * radius, y, color: door || window ? '#405b70' : plaster};
  });

  surface(2200, (angle, u) => {
    const y = .735 + u * .065;
    const radius = .054 + .046 * Math.sin(u * Math.PI / 2) ** 1.5;
    return {x: Math.sin(angle) * radius, z: Math.cos(angle) * radius, y, color: plaster};
  });

  surface(2400, (angle, u) => {
    const rail = u < .36;
    const postCount = rail ? 18 : 8;
    const post = Math.abs(Math.sin(angle * postCount / 2)) < .19;
    const radius = rail ? .096 : .056;
    const y = rail ? .8 + u * .12 : .798 + (u - .36) * .19;
    const horizontal = rail ? y > .835 || y < .806 : y < .81 || y > .907;
    return {
      x: Math.sin(angle) * radius, z: Math.cos(angle) * radius, y,
      color: post || horizontal ? frame : rail ? null : '#385d77'
    };
  });

  surface(1350, (angle, u) => {
    const radius = .076 * (1 - u) ** 1.45;
    return {x: Math.sin(angle) * radius, z: Math.cos(angle) * radius, y: .914 + u * .086, color: plaster};
  });

  tower.sort((a, b) => a.z - b.z);
  const fog = Array.from({length: 9400}, () => ({
    depth: random(), angle: random() * tau, radius: Math.sqrt(random()), opacity: random()
  }));

  return {
    pose(W, H, f, horizon, t, swell) {
      const base = H * .72;
      const depth = 3 * f / (base - horizon);
      const y = base + swell(0, depth, t) * f / depth;
      const pitch = (swell(.5, depth, t) - swell(-.5, depth, t)) * .24;
      const scale = Math.min(H * (2 / 3), y - H * .035, W * 1.48);
      const x = W / 2;
      const phase = Math.sin(t * tau / 12);
      return {
        x, y, pitch, scale,
        lampX: x + Math.sin(pitch) * scale * .87,
        lampY: y - Math.cos(pitch) * scale * .87,
        spotX: x + Math.min(W * (W <= 650 ? .30 : .37), 365) * phase,
        spotY: H * (W <= 650 ? .948 - .012 * phase ** 2 : .92 - .025 * phase ** 2),
        radius: Math.min(W * .075, H * (W <= 650 ? .032 : .052))
      };
    },

    draw(pose, dot) {
      const {x, y, pitch, scale, lampX, lampY, spotX, spotY, radius} = pose;
      const sin = Math.sin(pitch);
      const cos = Math.cos(pitch);
      for (const p of tower) {
        if (!p.color) continue;
        const px = p.x * cos + p.y * sin;
        const py = p.y * cos - p.x * sin;
        const shade = p.z >= 0 ? .58 + .37 * Math.max(0, 1 - Math.abs(p.x / .12 + .2)) : .18;
        dot(x + px * scale, y - (py - p.z * .14) * scale, p.size, p.color, p.alpha * shade);
      }
      for (const p of fog) {
        const spread = p.depth * radius * p.radius;
        const px = lampX + (spotX - lampX) * p.depth + Math.cos(p.angle) * spread;
        const py = lampY + (spotY - lampY) * p.depth + Math.sin(p.angle) * spread;
        const alpha = .28 * (1 - p.radius ** 2) * (.4 + p.opacity) * (1 - .55 * p.depth);
        dot(px, py, .76, p.radius < .56 ? '#f4fbff' : '#c5e6f5', alpha);
      }
      dot(lampX, lampY, 7, '#f4c788', .13);
      dot(lampX, lampY, 3.3, '#fff0ca', .9);
      dot(lampX, lampY, 1.6, '#fff9e9', 1);
    }
  };
})();
