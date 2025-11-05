// ===== Mobile Menu Toggle =====
const header = document.querySelector('.site-header');
const btn = document.querySelector('.hamburger');
if (btn) {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    header.classList.toggle('open');
  });
}
document.querySelectorAll('.nav a').forEach(a =>
  a.addEventListener('click', () => header.classList.remove('open'))
);

// ===== Fade-in Animation on Scroll =====
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.fade-section').forEach(el => observer.observe(el));
