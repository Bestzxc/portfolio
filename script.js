/* ── CUSTOM CURSOR ── */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});


document.querySelectorAll('a, button, .project-card, .stat-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width  = '16px';
    cursor.style.height = '16px';
    ring.style.width    = '56px';
    ring.style.height   = '56px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width  = '15px';
    cursor.style.height = '15px';
    ring.style.width    = '36px';
    ring.style.height   = '36px';
  });
});

/* ── ACTIVITIES CAROUSEL ── */
(function() {
  const track = document.querySelector('.activities-track');
  const prev = document.querySelector('.activity-nav.prev');
  const next = document.querySelector('.activity-nav.next');

  if (!track || !prev || !next) return;

  const cards = Array.from(track.querySelectorAll('.activity-card'));
  if (cards.length === 0) return;

  const cardGap = parseInt(getComputedStyle(track).gap, 10) || 0;

  const clonesHead = cards.map(card => card.cloneNode(true));
  const clonesTail = cards.map(card => card.cloneNode(true));

  clonesHead.forEach(clone => track.appendChild(clone));
  clonesTail.reverse().forEach(clone => track.insertBefore(clone, track.firstChild));

  const totalCards = track.querySelectorAll('.activity-card').length;
  const baseCount = cards.length;

  const cardWidth = () => cards[0].offsetWidth + cardGap;
  const initialOffset = cardWidth() * baseCount;

  track.scrollLeft = initialOffset;

  const normalizeScroll = () => {
    if (track.scrollLeft <= cardWidth() * 0.5) {
      track.scrollLeft += cardWidth() * baseCount;
    } else if (track.scrollLeft >= track.scrollWidth - track.clientWidth - cardWidth() * 0.5) {
      track.scrollLeft -= cardWidth() * baseCount;
    }
  };

  let isThrottled = false;

  const slide = direction => {
    if (isThrottled) return;
    isThrottled = true;
    const target = track.scrollLeft + direction * cardWidth();
    track.scrollTo({ left: target, behavior: 'smooth' });
    setTimeout(() => {
      normalizeScroll();
      isThrottled = false;
    }, 300);
  };

  prev.addEventListener('click', () => slide(-1));
  next.addEventListener('click', () => slide(1));

  let pointer = { x: 0, down: false, startScroll: 0 };

  track.addEventListener('mousedown', e => {
    pointer.down = true;
    pointer.x = e.pageX;
    pointer.startScroll = track.scrollLeft;
    track.classList.add('dragging');
  });

  track.addEventListener('touchstart', e => {
    pointer.down = true;
    pointer.x = e.touches[0].pageX;
    pointer.startScroll = track.scrollLeft;
  }, { passive: true });

  const pointerMove = e => {
    if (!pointer.down) return;
    const currentX = e.pageX || e.touches[0].pageX;
    const delta = pointer.x - currentX;
    track.scrollLeft = pointer.startScroll + delta;
  };

  window.addEventListener('mousemove', pointerMove);
  window.addEventListener('touchmove', pointerMove, { passive: true });

  const pointerUp = () => {
    if (!pointer.down) return;
    pointer.down = false;
    track.classList.remove('dragging');
    normalizeScroll();
  };

  window.addEventListener('mouseup', pointerUp);
  window.addEventListener('touchend', pointerUp);

  track.addEventListener('scroll', () => {
    if (!pointer.down) normalizeScroll();
  });

  window.addEventListener('resize', () => track.scrollLeft = initialOffset);
})();

/* ── NAVBAR SCROLL ── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => revealObserver.observe(el));

/* ── SKILL BAR ANIMATION ── */
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach((bar, i) => {
        const w = parseFloat(bar.style.getPropertyValue('--w'));
        setTimeout(() => {
          bar.style.transform = `scaleX(${w})`;
        }, i * 150);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-grid').forEach(el => skillObserver.observe(el));