/* ============ main.js — Tegar Dimas Portfolio ============ */

/* Sticky nav shadow */
const navWrap = document.getElementById('navWrap');
const onScroll = () => navWrap.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* Mobile menu */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  mobileMenu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    })
  );
}

/* Footer year */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ===== Typewriter hero (respects reduced motion) ===== */
const typeEl = document.getElementById('typewriter');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (typeEl && !reduceMotion) {
  const phrases = [
    { label: 'role', value: 'Backend Developer' },
    { label: 'stack', value: 'Node.js · Express · SQL' },
    { label: 'passion', value: 'Clean, Scalable APIs' },
  ];
  const render = (p) => {
    typeEl.innerHTML = `<span class="accent">const</span> ${p.label} = <span class="str">"${p.value}"</span>;`;
  };
  let i = 0;
  render(phrases[0]);
  setInterval(() => {
    i = (i + 1) % phrases.length;
    render(phrases[i]);
  }, 3200);
}

/* ===== Reveal on scroll ===== */
const revealEls = document.querySelectorAll('.reveal');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => io.observe(el));
}

/* ===== Project gallery (lightbox) ===== */
const projects = [
  { id: 'up', title: 'Marriage Card', files: ['up1.png', 'up2.png', 'up3.png'] },
  { id: 'flash', title: 'Flashcard Jepang', files: ['flash1.png', 'flash2.png', 'flash3.png', 'flash4.png'] },
  { id: 'fos', title: 'FOS Tattoo', files: ['fos1.png', 'fos2.png', 'fos3.png', 'fos4.png'] },
];

const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');
const lbClose = document.getElementById('lbClose');
const lbPrev = document.getElementById('lbPrev');
const lbNext = document.getElementById('lbNext');

let activeGallery = null;
let activeIndex = 0;

function openGallery(id) {
  const g = projects.find((p) => p.id === id);
  if (!g) return;
  activeGallery = g;
  activeIndex = 0;
  showImage();
  lightbox.hidden = false;
  requestAnimationFrame(() => lightbox.classList.add('show'));
  document.body.style.overflow = 'hidden';
}

function showImage() {
  const g = activeGallery;
  const file = g.files[activeIndex];
  lbImg.src = `assets/images/projects/${file}`;
  lbImg.alt = `${g.title} — screenshot ${activeIndex + 1}`;
  lbCaption.innerHTML = `<strong>${g.title}</strong>${activeIndex + 1} / ${g.files.length}`;
}

function closeLightbox() {
  lightbox.classList.remove('show');
  document.body.style.overflow = '';
  setTimeout(() => { lightbox.hidden = true; }, 220);
}

function step(delta) {
  if (!activeGallery) return;
  activeIndex = (activeIndex + delta + activeGallery.files.length) % activeGallery.files.length;
  showImage();
}

document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('.project-zoom') || e.target.closest('.project-img')) {
      openGallery(card.dataset.gallery);
    }
  });
});

lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', () => step(-1));
lbNext.addEventListener('click', () => step(1));
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (lightbox.hidden) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') step(-1);
  if (e.key === 'ArrowRight') step(1);
});
