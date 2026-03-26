const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animateCursor() {
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  document.querySelectorAll('a,button,.btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '20px'; cursor.style.height = '20px';
      cursor.style.background = 'var(--accent2)';
      ring.style.width = '52px'; ring.style.height = '52px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '12px'; cursor.style.height = '12px';
      cursor.style.background = 'var(--accent)';
      ring.style.width = '36px'; ring.style.height = '36px';
    });
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));
