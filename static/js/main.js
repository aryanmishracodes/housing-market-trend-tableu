/* ========================================
   HOUSING VIZ — MAIN JS
   ======================================== */

// ---- LOADER ----
const loaderMessages = ['Analyzing Housing Market Trends...', 'Loading Visualizations...', 'Preparing Data Insights...'];
let msgIndex = 0;
const loaderMsg = document.getElementById('loader-msg');

function typeMessage(msg, cb) {
  let i = 0;
  loaderMsg.textContent = '';
  const iv = setInterval(() => {
    loaderMsg.textContent += msg[i];
    i++;
    if (i >= msg.length) { clearInterval(iv); setTimeout(cb, 500); }
  }, 50);
}

function cycleMessages() {
  if (msgIndex < loaderMessages.length - 1) {
    msgIndex++;
    typeMessage(loaderMessages[msgIndex], cycleMessages);
  }
}

if (loaderMsg) {
  typeMessage(loaderMessages[0], cycleMessages);

  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.style.opacity = '0';
        loader.style.transform = 'scale(1.05)';
        setTimeout(() => { loader.style.display = 'none'; }, 800);
      }
    }, 3000);
  });
}

// ---- NAVBAR SCROLL ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ---- MOBILE MENU ----
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// ---- AOS INIT ----
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 700,
    once: true,
    easing: 'ease-out-cubic',
    offset: 60
  });
}

// ---- GSAP REGISTER ----
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ---- PARTICLES CONFIG ----
function initParticles(containerId) {
  if (typeof particlesJS === 'undefined') return;
  if (!document.getElementById(containerId)) return;
  particlesJS(containerId, {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 900 } },
      color: { value: ['#2A6F97', '#00F5D4', '#1B263B'] },
      shape: { type: 'circle' },
      opacity: { value: 0.35, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.05 } },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 140, color: '#2A6F97', opacity: 0.15, width: 1 },
      move: { enable: true, speed: 1.2, direction: 'none', random: true, out_mode: 'out' }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: false } },
      modes: { grab: { distance: 160, line_linked: { opacity: 0.4 } } }
    },
    retina_detect: true
  });
}

// ---- COUNTER ANIMATION ----
function animateCounters() {
  const counters = document.querySelectorAll('.counter-num[data-target]');
  counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const prefix = counter.getAttribute('data-prefix') || '';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = target < 10 ? (target * ease).toFixed(1) : Math.floor(target * ease);
      counter.textContent = prefix + val + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

// Counter trigger on scroll
if (typeof IntersectionObserver !== 'undefined') {
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { animateCounters(); io.disconnect(); } });
    }, { threshold: 0.4 });
    io.observe(statsSection);
  }
}

// ---- GSAP HERO ANIMATION (runs per page if hero elements present) ----
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined') return;

  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroBtns = document.querySelector('.hero-btns');
  const heroVisual = document.querySelector('.hero-visual');

  if (heroTitle) {
    gsap.from(heroTitle, { y: 60, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
  }
  if (heroSubtitle) {
    gsap.from(heroSubtitle, { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.45 });
  }
  if (heroBtns) {
    gsap.from(heroBtns, { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.7 });
  }
  if (heroVisual) {
    gsap.from(heroVisual, { x: 60, opacity: 0, duration: 1.1, ease: 'power3.out', delay: 0.5 });
  }

  // Floating house icons
  gsap.utils.toArray('.float-house').forEach((el, i) => {
    gsap.to(el, {
      y: -18,
      duration: 2 + i * 0.4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: i * 0.3
    });
  });
});

// ---- TILT EFFECT for team cards ----
document.querySelectorAll('.team-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 10}deg) translateY(-8px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ---- PAGE TRANSITION ----
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof gsap !== 'undefined') {
      gsap.to('main', { opacity: 0, y: -20, duration: 0.35, ease: 'power2.in', onComplete: () => {
        window.location.href = href;
      }});
    } else {
      window.location.href = href;
    }
  });
});

window.addEventListener('pageshow', () => {
  if (typeof gsap !== 'undefined') {
    gsap.from('main', { opacity: 0, y: 20, duration: 0.6, ease: 'power2.out' });
  }
});
