/* =========================================================
   MARI DESIGN CO. — main.js
   Quiet motion only: hero entrance + scroll reveals.
   Native scroll. Respects prefers-reduced-motion.
   ========================================================= */

(function () {
  "use strict";

  var prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---- Hero entrance ---- */
  function initHero() {
    var hero = document.querySelector(".hero");
    if (!hero) return;
    // next frame so the initial (hidden) state is painted first
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        hero.classList.add("is-ready");
      });
    });
  }

  /* ---- Scroll reveals via IntersectionObserver ---- */
  function initReveals() {
    var targets = document.querySelectorAll(
      "[data-reveal], [data-reveal-media]"
    );
    if (!targets.length) return;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      targets.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---- Back to top ---- */
  function initBackToTop() {
    document.querySelectorAll("[data-back-to-top]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: prefersReduced ? "auto" : "smooth"
        });
      });
    });
  }

  /* ---- Horizontal works gallery: arrows + drag scroll ---- */
  function initGalleries() {
    document.querySelectorAll("[data-gallery]").forEach(function (gallery) {
      var track = gallery.querySelector("[data-gallery-track]");
      if (!track) return;

      var prev = gallery.querySelector("[data-gallery-prev]");
      var next = gallery.querySelector("[data-gallery-next]");

      function panelStep() {
        var panel = track.querySelector(".work-panel");
        var gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
        return panel ? panel.getBoundingClientRect().width + gap : track.clientWidth * 0.6;
      }

      function updateArrows() {
        var max = track.scrollWidth - track.clientWidth - 2;
        if (prev) prev.disabled = track.scrollLeft <= 2;
        if (next) next.disabled = track.scrollLeft >= max;
      }

      function scrollByStep(dir) {
        track.scrollBy({
          left: dir * panelStep(),
          behavior: prefersReduced ? "auto" : "smooth"
        });
      }

      if (prev) prev.addEventListener("click", function () { scrollByStep(-1); });
      if (next) next.addEventListener("click", function () { scrollByStep(1); });
      track.addEventListener("scroll", updateArrows, { passive: true });
      window.addEventListener("resize", updateArrows);

      /* keyboard: arrows when track focused */
      track.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") { e.preventDefault(); scrollByStep(1); }
        else if (e.key === "ArrowLeft") { e.preventDefault(); scrollByStep(-1); }
      });

      /* pointer drag to scroll (desktop) */
      var down = false, startX = 0, startLeft = 0, moved = false;
      track.addEventListener("pointerdown", function (e) {
        if (e.pointerType === "touch") return; /* native touch scroll */
        down = true; moved = false;
        startX = e.clientX;
        startLeft = track.scrollLeft;
        track.classList.add("is-dragging");
      });
      track.addEventListener("pointermove", function (e) {
        if (!down) return;
        var dx = e.clientX - startX;
        if (Math.abs(dx) > 3) moved = true;
        track.scrollLeft = startLeft - dx;
      });
      function endDrag() {
        if (!down) return;
        down = false;
        track.classList.remove("is-dragging");
        updateArrows();
      }
      track.addEventListener("pointerup", endDrag);
      track.addEventListener("pointercancel", endDrag);
      track.addEventListener("pointerleave", endDrag);

      /* wheel -> horizontal (only while pointer is over the gallery, and
         only consume it when there is room to scroll horizontally; at the
         ends we release so the page keeps scrolling vertically) */
      track.addEventListener("wheel", function (e) {
        if (prefersReduced) return;
        var dominant = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
        if (!dominant) return;
        var max = track.scrollWidth - track.clientWidth - 1;
        var atStart = track.scrollLeft <= 0 && dominant < 0;
        var atEnd = track.scrollLeft >= max && dominant > 0;
        if (atStart || atEnd) return; /* let the page scroll */
        e.preventDefault();
        track.scrollLeft += dominant;
      }, { passive: false });
      /* suppress click after a drag */
      track.addEventListener("click", function (e) {
        if (moved) { e.preventDefault(); }
      }, true);

      updateArrows();
    });
  }

  /* ---- Studio status: local time, weather, office hours ----
     Timezone: America/Cuiaba (Mato Grosso, UTC-4).
     Office: Mon–Fri, 10:00–12:00 and 14:00–20:00. */
  function initStudioStatus() {
    var root = document.querySelector("[data-studio-status]");
    if (!root) return;

    var TZ = "America/Cuiaba";
    var LAT = -14.6229, LON = -57.4931;

    var clockEl = root.querySelector("[data-studio-clock]");
    var weatherEl = root.querySelector("[data-studio-weather]");
    var tempEl = root.querySelector("[data-studio-temp]");
    var condEl = root.querySelector("[data-studio-cond]");
    var iconEl = root.querySelector("[data-studio-icon]");
    var officeEl = root.querySelector("[data-studio-office]");
    var officeTextEl = root.querySelector("[data-studio-office-text]");

    var STR = {
      pt: {
        open: "Escritório aberto",
        closed: "Escritório fechado: Voltamos às ",
        conds: {
          clear: "Céu limpo", mostlyClear: "Predominantemente limpo",
          partly: "Parcialmente nublado", cloudy: "Nublado", fog: "Névoa",
          drizzle: "Garoa", rain: "Chuva", showers: "Aguaceiros",
          snow: "Neve", storm: "Trovoada"
        }
      },
      en: {
        open: "Studio open",
        closed: "Studio closed: Back at ",
        conds: {
          clear: "Clear sky", mostlyClear: "Mostly clear",
          partly: "Partly cloudy", cloudy: "Cloudy", fog: "Fog",
          drizzle: "Drizzle", rain: "Rain", showers: "Showers",
          snow: "Snow", storm: "Thunderstorm"
        }
      }
    };

    function lang() {
      return (window.MARI && window.MARI.getLang && window.MARI.getLang()) || "pt";
    }

    var clockFmt = new Intl.DateTimeFormat("en-US", {
      timeZone: TZ, hour: "numeric", minute: "2-digit",
      second: "2-digit", hour12: true
    });
    var partsFmt = new Intl.DateTimeFormat("en-US", {
      timeZone: TZ, weekday: "short", hour: "2-digit",
      minute: "2-digit", hour12: false
    });

    var WD = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

    function nowParts() {
      var p = partsFmt.formatToParts(new Date());
      var o = {};
      p.forEach(function (x) { o[x.type] = x.value; });
      var h = parseInt(o.hour, 10) % 24;
      return { wd: WD[o.weekday], h: h, m: parseInt(o.minute, 10) };
    }

    function isOpen(t) {
      var x = t.h + t.m / 60;
      var weekday = t.wd >= 1 && t.wd <= 5;
      return weekday && ((x >= 10 && x < 12) || (x >= 14 && x < 20));
    }

    function nextOpenHour(t) {
      var x = t.h + t.m / 60;
      var weekday = t.wd >= 1 && t.wd <= 5;
      if (weekday && x < 10) return 10;
      if (weekday && x >= 12 && x < 14) return 14;
      return 10; /* later today closed, weekend, or after 20h → next opening at 10h */
    }

    function renderOffice() {
      var t = nowParts();
      var d = STR[lang()];
      if (isOpen(t)) {
        officeEl.classList.add("is-open");
        officeTextEl.textContent = d.open;
      } else {
        officeEl.classList.remove("is-open");
        officeTextEl.textContent = d.closed + nextOpenHour(t) + "h";
      }
    }

    function tick() {
      if (clockEl) clockEl.textContent = clockFmt.format(new Date());
    }

    /* ---- weather ---- */
    var lastCode = null;

    function codeToCat(c) {
      if (c === 0) return "clear";
      if (c === 1) return "mostlyClear";
      if (c === 2) return "partly";
      if (c === 3) return "cloudy";
      if (c === 45 || c === 48) return "fog";
      if (c >= 51 && c <= 57) return "drizzle";
      if (c >= 61 && c <= 67) return "rain";
      if (c >= 71 && c <= 77) return "snow";
      if (c >= 80 && c <= 82) return "showers";
      if (c === 85 || c === 86) return "snow";
      if (c >= 95) return "storm";
      return "cloudy";
    }

    var ICONS = {
      sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M19.4 4.6l-2.1 2.1M6.7 17.3l-2.1 2.1"/></svg>',
      partly: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="8" cy="8" r="3"/><path d="M8 2v2M2 8h2M3.5 3.5l1.4 1.4"/><path d="M9 19h8a3.2 3.2 0 0 0 .3-6.4A4.4 4.4 0 0 0 9 13a3 3 0 0 0 0 6Z"/></svg>',
      cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M7 18h10a3.4 3.4 0 0 0 .3-6.8A4.7 4.7 0 0 0 7 12a3 3 0 0 0 0 6Z"/></svg>',
      rain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M7 15h10a3.3 3.3 0 0 0 .3-6.6A4.6 4.6 0 0 0 7 9a3 3 0 0 0 0 6Z"/><path d="M8 18l-1 2M12 18l-1 2M16 18l-1 2"/></svg>',
      snow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M7 15h10a3.3 3.3 0 0 0 .3-6.6A4.6 4.6 0 0 0 7 9a3 3 0 0 0 0 6Z"/><path d="M9 19h.01M12 20h.01M15 19h.01"/></svg>',
      storm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M7 14h10a3.3 3.3 0 0 0 .3-6.6A4.6 4.6 0 0 0 7 8a3 3 0 0 0 0 6Z"/><path d="M12 15l-2 4h3l-2 4"/></svg>'
    };

    function iconFor(cat) {
      if (cat === "clear" || cat === "mostlyClear") return ICONS.sun;
      if (cat === "partly") return ICONS.partly;
      if (cat === "cloudy" || cat === "fog") return ICONS.cloud;
      if (cat === "drizzle" || cat === "rain" || cat === "showers") return ICONS.rain;
      if (cat === "snow") return ICONS.snow;
      if (cat === "storm") return ICONS.storm;
      return ICONS.cloud;
    }

    function renderWeather() {
      if (lastCode === null) return;
      var cat = codeToCat(lastCode);
      condEl.textContent = STR[lang()].conds[cat];
      iconEl.innerHTML = iconFor(cat);
    }

    function fetchWeather() {
      var url = "https://api.open-meteo.com/v1/forecast?latitude=" + LAT +
        "&longitude=" + LON + "&current=temperature_2m,weather_code&timezone=America%2FCuiaba";
      fetch(url).then(function (r) { return r.json(); }).then(function (d) {
        if (!d || !d.current) return;
        lastCode = d.current.weather_code;
        if (tempEl) tempEl.textContent = Math.round(d.current.temperature_2m) + "°C";
        renderWeather();
        if (weatherEl) weatherEl.hidden = false;
      }).catch(function () { /* keep weather hidden on failure */ });
    }

    tick();
    renderOffice();
    fetchWeather();
    setInterval(tick, 1000);
    setInterval(renderOffice, 30000);

    document.addEventListener("languagechange", function () {
      renderOffice();
      renderWeather();
    });
  }

  /* ---- Word-by-word reveal (footer statement) ---- */
  function initWordReveal() {
    var els = document.querySelectorAll("[data-word-reveal]");
    if (!els.length) return;

    function split(el) {
      var text = (el.textContent || "").trim();
      el.textContent = "";
      var words = text.split(/\s+/);
      words.forEach(function (word, i) {
        var span = document.createElement("span");
        span.className = "w";
        span.style.transitionDelay = i * 45 + "ms";
        span.textContent = word;
        el.appendChild(span);
        if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
      });
    }

    els.forEach(function (el) {
      split(el);

      if (prefersReduced || !("IntersectionObserver" in window)) {
        el.classList.add("is-visible");
        return;
      }

      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              el.classList.add("is-visible");
              io.unobserve(el);
            }
          });
        },
        { threshold: 0.2 }
      );
      io.observe(el);

      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        el.classList.add("is-visible");
        io.unobserve(el);
      }
    });

    /* re-wrap after a language switch (i18n resets textContent) */
    document.addEventListener("languagechange", function () {
      els.forEach(function (el) { split(el); });
    });
  }

  /* ---- Accordions (services packages) ---- */
  function initAccordions() {
    document.querySelectorAll("[data-accordion]").forEach(function (item) {
      var btn = item.querySelector("[data-accordion-toggle]");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var open = item.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  function init() {
    initHero();
    initReveals();
    initBackToTop();
    initGalleries();
    initStudioStatus();
    initWordReveal();
    initAccordions();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
