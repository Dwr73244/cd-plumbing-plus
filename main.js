/* C&D Plumbing Plus — interactions
   Keep it small: mobile nav, smooth-scroll offset, footer year, form handler stub.
*/
(function () {
  'use strict';

  // Mobile nav toggle
  var toggle = document.getElementById('nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Contact form — stub. Replace with real endpoint or service (Formspree, etc.)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var orig = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      // TODO: wire up to a real endpoint (Formspree, Netlify Forms, or backend)
      setTimeout(function () {
        btn.textContent = 'Got it — Chris will call you shortly ✓';
        btn.style.background = '#0E9488';
        form.reset();
        setTimeout(function () {
          btn.textContent = orig;
          btn.disabled = false;
          btn.style.background = '';
        }, 4000);
      }, 700);
    });
  }

  // Header shadow on scroll
  var header = document.getElementById('site-header');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 8) {
        header.style.boxShadow = '0 4px 20px rgba(14,42,71,.08)';
      } else {
        header.style.boxShadow = 'none';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
