/* C&D Plumbing Plus — interactions
   Mobile nav (keyboard-accessible), scroll-perf header shadow, FB facade,
   footer year, form validation, sticky-bar offset for in-page anchor clicks.
*/
(function () {
  'use strict';

  /* ---------- Mobile nav ---------- */
  var toggle = document.getElementById('nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      // Move focus into nav when opened so screen reader users get there
      if (open) {
        var firstLink = nav.querySelector('a');
        if (firstLink) firstLink.focus({ preventScroll: true });
      }
    };
    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'));
    });
    // Close on link click
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
    // Close on Esc
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
    // Close on click outside
    document.addEventListener('click', function (e) {
      if (!nav.classList.contains('is-open')) return;
      if (nav.contains(e.target) || toggle.contains(e.target)) return;
      setOpen(false);
    });
  }

  /* ---------- Footer year (dynamic, no hardcoded date staleness) ---------- */
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());

  /* ---------- Contact form ---------- */
  var form = document.getElementById('contact-form');
  if (form) {
    var status = document.getElementById('form-status');
    var defaultStatus = status ? status.textContent : '';

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Simple validation
      var name = form.elements['name'];
      var phone = form.elements['phone'];
      var valid = true;
      [name, phone].forEach(function (el) {
        var ok = el.value && el.value.trim().length > 0;
        el.setAttribute('aria-invalid', ok ? 'false' : 'true');
        if (!ok) valid = false;
      });
      if (!valid) {
        if (status) {
          status.textContent = 'Please add your name and phone so we can get back to you.';
          status.className = 'contact__legal is-error';
        }
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      var orig = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      // TODO: wire to real endpoint (Formspree, Netlify Forms, or backend)
      setTimeout(function () {
        btn.textContent = 'Got it — Chris will call you shortly ✓';
        if (status) {
          status.textContent = "Thanks — we'll be in touch within an hour during business hours.";
          status.className = 'contact__legal is-success';
        }
        form.reset();
        setTimeout(function () {
          btn.textContent = orig;
          btn.disabled = false;
          if (status) {
            status.textContent = defaultStatus;
            status.className = 'contact__legal';
          }
        }, 6000);
      }, 700);
    });
  }

  /* ---------- Sticky header shadow via class toggle (rAF-throttled, no inline-style thrash) ---------- */
  var header = document.getElementById('site-header');
  if (header) {
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        header.classList.toggle('is-scrolled', window.scrollY > 8);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Facebook facade — load the iframe only when user clicks ---------- */
  var fbLoad = document.getElementById('fb-load');
  var fbEmbed = document.getElementById('fb-embed');
  if (fbLoad && fbEmbed) {
    fbLoad.addEventListener('click', function () {
      var frame = document.createElement('div');
      frame.className = 'fb-embed__frame';
      frame.innerHTML =
        '<iframe ' +
          'src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCDPLUMBINGPLUS%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true" ' +
          'width="500" height="500" ' +
          'style="border:none;overflow:hidden" ' +
          'scrolling="no" frameborder="0" allowfullscreen="true" ' +
          'allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ' +
          'title="C&amp;D Plumbing Plus on Facebook"></iframe>';
      fbEmbed.appendChild(frame);
      fbEmbed.classList.add('is-loaded');
    });
  }
})();
