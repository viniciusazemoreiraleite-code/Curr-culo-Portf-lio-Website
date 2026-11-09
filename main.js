const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const siteHeader = document.querySelector('.site-header');

if (siteHeader) {
  const updateHeaderOnScroll = () => {
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 0);
  };

  updateHeaderOnScroll();
  window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    siteNav.classList.toggle('is-open', !isOpen);
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu');
      siteNav.classList.remove('is-open');
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const fullHomeDialog = document.querySelector('.full-home-lightbox');
const fullHomeTrigger = document.querySelector('.full-home-zoom-trigger');
const fullHomeClose = document.querySelector('.full-home-lightbox-close');
const fullHomeHide = document.querySelector('.full-home-hide');

if (fullHomeHide) {
  fullHomeHide.addEventListener('click', () => {
    const disclosure = fullHomeHide.closest('.full-home-disclosure');
    if (!disclosure) return;

    disclosure.open = false;
    disclosure.querySelector('summary')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

if (fullHomeDialog && fullHomeTrigger && fullHomeClose) {
  fullHomeTrigger.addEventListener('click', () => fullHomeDialog.showModal());
  fullHomeClose.addEventListener('click', () => fullHomeDialog.close());
  fullHomeDialog.addEventListener('click', (event) => {
    if (event.target === fullHomeDialog) fullHomeDialog.close();
  });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const animatedSections = document.querySelectorAll('main > section, body > footer.contact');

if (!prefersReducedMotion && animatedSections.length) {
  const [heroSection, ...scrollSections] = animatedSections;
  document.body.classList.add('has-reveal');
  heroSection.classList.add('reveal-hero');

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -6% 0px' });

    scrollSections.forEach((section) => {
      section.classList.add('reveal-section');
      sectionObserver.observe(section);
    });
  } else {
    scrollSections.forEach((section) => section.classList.add('is-visible'));
  }
}

const particleCanvas = document.createElement('canvas');
particleCanvas.className = 'fluid-particles';
particleCanvas.setAttribute('aria-hidden', 'true');
document.body.prepend(particleCanvas);

const particleContext = particleCanvas.getContext('2d');
if (particleContext) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let particles = [];
  let viewportWidth = 0;
  let viewportHeight = 0;
  let pointerX = -1000;
  let pointerY = -1000;
  let pointerEnergy = 0;
  let pointerActive = false;
  let animationFrame = 0;
  let lastFrame = 0;

  const resizeParticleField = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    particleCanvas.width = Math.round(viewportWidth * dpr);
    particleCanvas.height = Math.round(viewportHeight * dpr);
    particleContext.setTransform(dpr, 0, 0, dpr, 0, 0);

    const spacing = Math.max(viewportWidth < 680 ? 58 : 48, Math.sqrt((viewportWidth * viewportHeight) / 680));
    const columns = Math.ceil(viewportWidth / spacing) + 1;
    const rows = Math.ceil(viewportHeight / spacing) + 1;
    particles = [];

    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const offset = row % 2 ? spacing * 0.5 : 0;
        const x = column * spacing + offset - spacing * 0.5;
        const y = row * spacing - spacing * 0.5;
        particles.push({ x, y, baseX: x, baseY: y, vx: 0, vy: 0, phase: Math.random() * Math.PI * 2 });
      }
    }
  };

  const drawParticleField = (timestamp = 0) => {
    if (document.hidden) {
      animationFrame = 0;
      return;
    }
    if (!reducedMotion && timestamp - lastFrame < 30) {
      animationFrame = window.requestAnimationFrame(drawParticleField);
      return;
    }
    lastFrame = timestamp;
    particleContext.clearRect(0, 0, viewportWidth, viewportHeight);

    particles.forEach((particle) => {
      const drift = reducedMotion ? 0 : Math.sin(timestamp * 0.00045 + particle.phase) * 1.6;
      let forceX = (particle.baseX + drift - particle.x) * 0.012;
      let forceY = (particle.baseY + drift - particle.y) * 0.012;
      let influence = 0;

      if (!reducedMotion && pointerActive) {
        const dx = particle.x - pointerX;
        const dy = particle.y - pointerY;
        const distance = Math.max(1, Math.hypot(dx, dy));
        const falloff = Math.max(0, 1 - distance / 190);
        influence = falloff * falloff;
        const outwardPush = influence * (0.34 + pointerEnergy * 0.44);
        const fluidTurn = influence * (0.08 + pointerEnergy * 0.18);
        forceX += (dx / distance) * outwardPush - (dy / distance) * fluidTurn;
        forceY += (dy / distance) * outwardPush + (dx / distance) * fluidTurn;
      }

      particle.vx = (particle.vx + forceX) * 0.9;
      particle.vy = (particle.vy + forceY) * 0.9;
      particle.x += particle.vx;
      particle.y += particle.vy;

      const radius = 1 + influence * 1.15;
      const opacity = 0.16 + influence * 0.26;
      particleContext.beginPath();
      particleContext.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
      particleContext.fillStyle = `rgba(61, 90, 61, ${opacity})`;
      particleContext.fill();
    });

    pointerEnergy *= 0.94;
    if (!reducedMotion) animationFrame = window.requestAnimationFrame(drawParticleField);
  };

  const startParticleField = () => {
    if (!animationFrame) animationFrame = window.requestAnimationFrame(drawParticleField);
  };

  resizeParticleField();
  startParticleField();
  window.addEventListener('resize', resizeParticleField, { passive: true });
  window.addEventListener('pointermove', (event) => {
    const movement = Math.hypot(event.clientX - pointerX, event.clientY - pointerY);
    pointerX = event.clientX;
    pointerY = event.clientY;
    pointerEnergy = Math.min(1, movement / 34);
    pointerActive = true;
    if (reducedMotion) drawParticleField();
  }, { passive: true });
  window.addEventListener('pointerout', (event) => {
    if (!event.relatedTarget) pointerActive = false;
  }, { passive: true });
  document.addEventListener('visibilitychange', startParticleField);
}
