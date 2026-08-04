(function () {
  "use strict";

  var data = window.__BRAND__ || {};
  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fineHover = matchMedia("(hover: hover) and (pointer: fine)").matches;

  var $ = function (sel, scope) { return (scope || document).querySelector(sel); };
  var $$ = function (sel, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(sel)); };

  function safe(fn, name) {
    try { fn(); } catch (e) { console.warn("[" + name + "]", e); }
  }

  /* ---------- splash ---------- */
  function initSplash() {
    var splash = $("[data-splash]");
    if (!splash) return;
    var hide = function () { splash.classList.add("is-out"); };
    if (document.readyState === "complete") setTimeout(hide, 500);
    else window.addEventListener("load", function () { setTimeout(hide, 350); });
    setTimeout(hide, 3200);
  }

  /* ---------- nav ---------- */
  function initNav() {
    var nav = $("[data-nav]");
    if (!nav) return;
    var onScroll = function () {
      if (window.scrollY > 40) nav.classList.add("is-scrolled");
      else nav.classList.remove("is-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var toggle = $("[data-nav-toggle]");
    if (!toggle) return;
    var panel = document.createElement("div");
    panel.className = "nav-mobile-panel";
    panel.setAttribute("data-nav-panel", "");
    var links = $$(".nav-links a");
    panel.innerHTML = links.map(function (a) {
      return '<a href="' + a.getAttribute("href") + '">' + a.textContent + "</a>";
    }).join("") + '<a class="btn btn-primary" href="' + ((data.waLinks && data.waLinks.general) || "#") + '" target="_blank" rel="noopener">Escribinos</a>';
    document.body.appendChild(panel);

    var close = function () {
      nav.classList.remove("is-open");
      panel.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", function () {
      var open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      panel.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    $$("a", panel).forEach(function (a) { a.addEventListener("click", close); });
  }

  /* ---------- smooth anchor scroll (native, no Lenis) ---------- */
  function initSmoothScroll() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var navOffset = 76;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - navOffset,
        behavior: reduced ? "auto" : "smooth"
      });
    });
  }

  /* ---------- split text (preserves <br>) ---------- */
  function splitLines(el) {
    if (el.dataset.splitDone) return;
    el.dataset.splitDone = "1";
    var html = el.innerHTML;
    var parts = html.split(/<br\s*\/?>/i);
    el.innerHTML = parts.map(function (part) {
      return '<span class="split-line"><span class="split-line-inner">' + part + "</span></span>";
    }).join("<br>");
  }
  function initSplitText() {
    $$("[data-split='lines']").forEach(splitLines);
  }

  /* ---------- reveal on scroll (IntersectionObserver + safety net) ---------- */
  function initReveals() {
    var targets = $$(".reveal");
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.02, rootMargin: "0px 0px -2% 0px" });

    targets.forEach(function (el) { io.observe(el); });

    setTimeout(function () {
      targets.forEach(function (el) {
        if (!el.classList.contains("is-visible") && el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add("is-visible");
        }
      });
    }, 6000);
  }

  /* ---------- hero video ---------- */
  function initHeroVideo() {
    var video = $("[data-hero-video]");
    if (!video) return;
    var markActive = function () { video.classList.add("is-active"); };
    video.addEventListener("playing", markActive, { once: true });
    var playPromise = video.play();
    if (playPromise && playPromise.catch) playPromise.catch(function () { /* autoplay blocked, poster stays visible */ });
  }

  /* ---------- hero countdown ---------- */
  function initCountdown() {
    var el = $("[data-countdown]");
    var numEl = $("[data-countdown-num]", el);
    var labelEl = $("[data-countdown-label]", el);
    if (!el || !numEl || !labelEl) return;

    var departure = new Date("2027-02-15T00:00:00-03:00");
    var now = new Date();
    var msPerDay = 86400000;
    var days = Math.ceil((departure - now) / msPerDay);

    if (days > 1) {
      numEl.textContent = days;
      labelEl.textContent = " días para la próxima partida";
    } else if (days === 1) {
      numEl.textContent = "";
      labelEl.textContent = "Mañana partimos rumbo a India";
    } else if (days === 0) {
      numEl.textContent = "";
      labelEl.textContent = "Hoy partimos rumbo a India";
    } else {
      el.remove();
      return;
    }
    el.classList.add("is-ready");
  }

  /* ---------- accordion (FAQ) ---------- */
  function initAccordion() {
    var items = $$(".accordion-item");
    items.forEach(function (item) {
      var trigger = $(".accordion-trigger", item);
      var panel = $(".accordion-panel", item);
      if (!trigger || !panel || trigger.dataset.bound) return;
      trigger.dataset.bound = "1";
      trigger.addEventListener("click", function () {
        var open = trigger.getAttribute("aria-expanded") === "true";
        items.forEach(function (other) {
          var t = $(".accordion-trigger", other);
          var p = $(".accordion-panel", other);
          if (!t || !p) return;
          t.setAttribute("aria-expanded", "false");
          p.style.maxHeight = "";
        });
        if (!open) {
          trigger.setAttribute("aria-expanded", "true");
          panel.style.maxHeight = panel.scrollHeight + 24 + "px";
        }
      });
    });
  }

  /* ---------- India -> Maldivas transition scrub ---------- */
  function initTransitionScrub() {
    var section = $("[data-transition]");
    var bg = $("[data-transition-bg]");
    if (!section || !bg || !window.gsap || !window.ScrollTrigger) return;
    gsap.to(bg, {
      backgroundPosition: "100% 50%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.6
      }
    });
  }

  /* ---------- custom cursor (subtle, desktop only) ---------- */
  function initCursor() {
    if (!fineHover || reduced) return;
    var dot = document.createElement("div");
    dot.className = "cursor-dot";
    document.body.appendChild(dot);
    var moved = false;
    window.addEventListener("mousemove", function (e) {
      dot.style.transform = "translate3d(" + (e.clientX - 4) + "px," + (e.clientY - 4) + "px,0)";
      if (!moved) { moved = true; dot.classList.add("is-ready"); }
    });
  }

  /* ---------- hero parallax (subtle) ---------- */
  function initHeroParallax() {
    if (reduced || !window.gsap) return;
    var media = $(".hero-media");
    if (!media) return;
    gsap.to(media, {
      yPercent: 10,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.4 }
    });
  }

  function boot() {
    safe(initSplitText, "initSplitText");
    safe(initSplash, "initSplash");
    safe(initNav, "initNav");
    safe(initSmoothScroll, "initSmoothScroll");
    safe(initReveals, "initReveals");
    safe(initHeroVideo, "initHeroVideo");
    safe(initCountdown, "initCountdown");
    safe(initAccordion, "initAccordion");
    safe(initCursor, "initCursor");

    if (window.gsap && window.ScrollTrigger) {
      try { gsap.registerPlugin(ScrollTrigger); } catch (e) {}
      safe(initTransitionScrub, "initTransitionScrub");
      safe(initHeroParallax, "initHeroParallax");
    }

    document.documentElement.classList.add("is-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
