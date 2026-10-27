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
