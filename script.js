// Shared by every page. Homepage-only features check that their elements exist.
(function () {
  // ── Year ──
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ── Scrolled nav (homepage only; subpages start with a solid nav) ──
  var nav = document.getElementById('nav');
  if (nav && document.getElementById('hero')) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ── Mobile menu toggle ──
  var navToggle = document.getElementById('navToggle');
  var navLinks  = document.getElementById('navLinks');

  function setMenu(open) {
    navLinks.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      setMenu(!navLinks.classList.contains('open'));
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        setMenu(false);
        navToggle.focus();
      }
    });
  }

  if (!('IntersectionObserver' in window)) return;

  // ── Scroll reveal (CSS shows everything at once under prefers-reduced-motion) ──
  var revealEls = document.querySelectorAll(
    '.section-header, .skill-card, .project-card, .blog-card, .about-grid, .contact-wrapper, .about-stats'
  );

  var revealIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(function (el) {
    el.classList.add('reveal');
    revealIO.observe(el);
  });

  // ── Active nav link on scroll ──
  // A section counts as active while it crosses the middle of the viewport,
  // which also works for sections taller than the screen.
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  var sectionIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      navAnchors.forEach(function (a) {
        var isActive = a.getAttribute('href') === '#' + entry.target.id;
        a.classList.toggle('active', isActive);
        if (isActive) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-50% 0px -50% 0px' });

  if (navAnchors.length) {
    document.querySelectorAll('section[id]').forEach(function (s) { sectionIO.observe(s); });
  }
})();
