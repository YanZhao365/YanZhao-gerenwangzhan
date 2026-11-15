(() => {
  const canvas = document.getElementById('opening-warp');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const palette = ['#A7D8FF', '#D1EAFF', '#FFFFFF'];
  const swarmDuration = 1050;
  const warpDuration = 3000;
  const turn = Math.PI * 2;
  let frame;

  window.stopOpeningWarp = () => {
    cancelAnimationFrame(frame);
    canvas.hidden = true;
  };

  window.playOpeningWarp = (done, revealWorld) => {
    const cards = Array.from({length: 64}, (_, i) => ({
      angle: Math.random() * turn,
      radius: .2 + Math.random() * .55,
      z: 30 + Math.random() * 1050,
      size: 4 + Math.random() * 5,
      color: palette[i % 10 < 4 ? 0 : i % 10 < 7 ? 1 : 2]
    }));
    const warpCards = cards.slice(0, 40);
    const streaks = Array.from({length: 400}, () => ({
      angle: Math.random() * turn,
      radius: .04 + Math.random() * 1.1,
      z: 30 + Math.random() * 1050,
      length: 35 + Math.random() * 125
    }));
    canvas.hidden = false;
    const start = performance.now();
    let worldRevealed = false;

    function draw(now) {
      const elapsed = now - start;
      if (!worldRevealed && elapsed >= swarmDuration + warpDuration * .86) {
        worldRevealed = true;
        revealWorld();
      }
      if (elapsed >= swarmDuration + warpDuration) {
        done();
        return;
      }
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const ratio = Math.min(devicePixelRatio || 1, 2);
      if (canvas.width !== Math.round(width * ratio) || canvas.height !== Math.round(height * ratio)) {
        canvas.width = Math.round(width * ratio);
        canvas.height = Math.round(height * ratio);
      }
      ctx.setTransform(ratio, 0, 0, ratio, width * ratio / 2, height * ratio / 2);
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#020710';
      ctx.fillRect(-width / 2, -height / 2, width, height);
      const span = Math.max(width, height);

      if (elapsed < swarmDuration) {
        const progress = elapsed / swarmDuration;
        cards.forEach((card, i) => {
          if (i >= 48) return;
          // Spiral inward around the button's center, then hand off to depth motion.
          const radius = span * (.04 + card.radius * (1 - progress) ** 2);
          const angle = card.angle + progress * 3 + Math.sin(progress * 8 + i) * .22;
          ctx.save();
          ctx.translate(Math.cos(angle) * radius, Math.sin(angle) * radius);
          ctx.rotate(angle + progress * 2);
          ctx.globalAlpha = Math.min(1, progress * 6);
          ctx.fillStyle = card.color;
          ctx.fillRect(-card.size / 2, -card.size, card.size, card.size * 2);
          ctx.restore();
        });
      } else {
        const time = (elapsed - swarmDuration) / warpDuration;
        const travel = 1950 * time + 900 * time * time;
        const fadeIn = Math.min(1, time * 12);
        streaks.forEach((streak) => {
          const depth = 25 + ((streak.z - travel) % 1100 + 1100) % 1100;
          const radius = span * streak.radius * 380;
          const x = Math.cos(streak.angle) * radius;
          const y = Math.sin(streak.angle) * radius;
          const far = depth + streak.length;
          ctx.globalAlpha = fadeIn * .48 * Math.exp(-depth / 750);
          ctx.strokeStyle = '#A7D8FF';
          ctx.beginPath();
          ctx.moveTo(x / far, y / far);
          ctx.lineTo(x / depth, y / depth);
          ctx.stroke();
        });
        warpCards.forEach((card) => {
          const depth = 25 + ((card.z - travel) % 1100 + 1100) % 1100;
          const radius = span * card.radius * 300 / depth;
          const size = card.size * 290 / depth;
          ctx.save();
          ctx.translate(Math.cos(card.angle) * radius, Math.sin(card.angle) * radius);
          ctx.rotate(card.angle);
          ctx.globalAlpha = fadeIn * .9 * Math.exp(-depth / 900);
          ctx.fillStyle = card.color;
          ctx.fillRect(-size / 2, -size, size, size * 2);
          ctx.restore();
        });
        canvas.style.opacity = String(Math.min(1, (1 - time) / .14));
      }
      frame = requestAnimationFrame(draw);
    }

    canvas.style.opacity = '1';
    frame = requestAnimationFrame(draw);
  };
})();

