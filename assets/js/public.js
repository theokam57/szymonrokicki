(() => {
  "use strict";

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const prefersReducedMotion = () => motionQuery.matches;

  function initMobileMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    if (!toggle || !navigation) {
      return;
    }

    const closeMenu = () => {
      navigation.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    };

    toggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("active");
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    });

    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  function initHeaderScroll() {
    const header = document.querySelector(".site-header") || document.querySelector("body > header");

    if (!header) {
      return;
    }

    const updateHeader = () => {
      header.classList.toggle("scrolled", window.scrollY > 18);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  function initRevealAnimations() {
    const elements = document.querySelectorAll(".reveal");

    if (!elements.length) {
      return;
    }

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));
  }

  function initReadingBar() {
    const bar = document.querySelector("#reading-bar");

    if (!bar) {
      return;
    }

    const updateBar = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(scrollTop / scrollable, 1) : 0;
      bar.style.transform = `scaleX(${progress})`;
    };

    updateBar();
    window.addEventListener("scroll", updateBar, { passive: true });
    window.addEventListener("resize", updateBar);
  }

  function initCharacterCounter() {
    const fields = document.querySelectorAll("textarea[data-character-counter]");

    fields.forEach((field) => {
      const targetId = field.getAttribute("data-character-counter");
      const counter = targetId ? document.getElementById(targetId) : null;

      if (!counter) {
        return;
      }

      const updateCounter = () => {
        const length = field.value.length;
        const max = field.getAttribute("maxlength");
        counter.textContent = max ? `${length}/${max}` : `${length}`;
      };

      updateCounter();
      field.addEventListener("input", updateCounter);
    });
  }

  function initGlossaryTooltips() {
    const terms = document.querySelectorAll(".glossary-term");

    if (!terms.length) {
      return;
    }

    const closeAll = (except = null) => {
      terms.forEach((term) => {
        if (term !== except) {
          term.classList.remove("is-open");
        }
      });
    };

    terms.forEach((term) => {
      term.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = term.classList.contains("is-open");
        closeAll(term);
        term.classList.toggle("is-open", !isOpen);
      });

      term.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          const isOpen = term.classList.contains("is-open");
          closeAll(term);
          term.classList.toggle("is-open", !isOpen);
        }

        if (event.key === "Escape") {
          term.classList.remove("is-open");
          term.blur();
        }
      });
    });

    document.addEventListener("click", () => closeAll());
    window.addEventListener("resize", () => closeAll(), { passive: true });
    window.addEventListener("scroll", () => closeAll(), { passive: true });
  }

  function initCopyButtons() {
    document.querySelectorAll("[data-copy-text]").forEach((button) => {
      button.addEventListener("click", async () => {
        const text = button.getAttribute("data-copy-text") || "";
        try {
          await navigator.clipboard.writeText(text);
          button.textContent = "Skopiowano";
          window.setTimeout(() => { button.textContent = "Kopiuj URL"; }, 1400);
        } catch {
          window.prompt("Skopiuj adres:", text);
        }
      });
    });
  }


  function initAccessibilityHelpers() {
    const main = document.querySelector("main");
    if (main && !main.id) main.id = "main-content";
  }


  const ROMAN_CENTURIES = {
    10: "X", 11: "XI", 12: "XII", 13: "XIII", 14: "XIV", 15: "XV",
    16: "XVI", 17: "XVII", 18: "XVIII", 19: "XIX", 20: "XX", 21: "XXI",
  };

  function romanCentury(value) {
    return ROMAN_CENTURIES[value] || String(value);
  }

  function initMapExplorer() {
    const explorer = document.querySelector("[data-map-explorer]");

    if (!explorer || typeof L === "undefined") {
      return;
    }

    const viewport = explorer.querySelector("[data-map-viewport]");
    const detailTitle = explorer.querySelector("[data-map-detail-title]");
    const detailText = explorer.querySelector("[data-map-detail-text]");
    const markerButtons = explorer.querySelectorAll("[data-map-marker]");
    const timeline = document.querySelector("[data-map-timeline]");
    const fromInput = timeline ? timeline.querySelector("[data-timeline-from]") : null;
    const toInput = timeline ? timeline.querySelector("[data-timeline-to]") : null;
    const timelineLabel = timeline ? timeline.querySelector("[data-timeline-label]") : null;

    if (!viewport) {
      return;
    }

    const map = L.map(viewport, {
      minZoom: 12,
      maxZoom: 19,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
    }).addTo(map);

    const markerLayers = new Map();
    const bounds = L.latLngBounds([]);
    let activeId = "";

    const activateMarker = (id, label, summary) => {
      activeId = id;
      markerButtons.forEach((item) => item.classList.toggle("active", item.dataset.markerId === id));

      const marker = markerLayers.get(id);

      if (marker) {
        map.setView(marker.getLatLng(), 17);
        marker.openPopup();
      }

      if (detailTitle) {
        detailTitle.textContent = label || "Punkt na mapie";
      }

      if (detailText) {
        detailText.textContent = summary || "";
      }
    };

    markerButtons.forEach((button) => {
      const lat = parseFloat(button.dataset.markerLat || "0");
      const lng = parseFloat(button.dataset.markerLng || "0");
      const id = button.dataset.markerId || "";
      const label = button.dataset.markerLabel || button.textContent.trim();
      const summary = button.dataset.markerSummary || "";

      const marker = L.marker([lat, lng], { title: label }).addTo(map);
      marker.bindPopup("<strong>" + label + "</strong><br>" + summary);
      marker.on("click", () => activateMarker(id, label, summary));

      markerLayers.set(id, marker);
      bounds.extend([lat, lng]);

      button.addEventListener("click", () => activateMarker(id, label, summary));
    });

    if (bounds.isValid()) {
      map.fitBounds(bounds.pad(0.5), { maxZoom: 16 });
    } else {
      map.setView([50.6832, 19.6249], 15);
    }

    if (fromInput && toInput) {
      const applyTimeline = () => {
        let from = parseInt(fromInput.value, 10);
        let to = parseInt(toInput.value, 10);

        if (from > to) {
          [from, to] = [to, from];
        }

        if (timelineLabel) {
          timelineLabel.textContent = romanCentury(from) + " w. – " + romanCentury(to) + " w.";
        }

        let activeStillVisible = false;

        markerButtons.forEach((button) => {
          const id = button.dataset.markerId || "";
          const centuryStart = parseInt(button.dataset.markerCenturyStart || "0", 10);
          const centuryEnd = parseInt(button.dataset.markerCenturyEnd || "21", 10);
          const visible = centuryStart <= to && centuryEnd >= from;
          const marker = markerLayers.get(id);

          button.classList.toggle("is-out-of-range", !visible);
          button.disabled = !visible;

          if (marker) {
            if (visible && !map.hasLayer(marker)) {
              marker.addTo(map);
            } else if (!visible && map.hasLayer(marker)) {
              marker.remove();
            }
          }

          if (visible && id === activeId) {
            activeStillVisible = true;
          }
        });

        if (!activeStillVisible) {
          activeId = "";
          markerButtons.forEach((item) => item.classList.remove("active"));

          if (detailTitle) {
            detailTitle.textContent = "Brak obiektów w tym zakresie";
          }

          if (detailText) {
            detailText.textContent = "Zmień zakres osi czasu, aby zobaczyć punkty istniejące w wybranym okresie.";
          }
        }
      };

      fromInput.addEventListener("input", applyTimeline);
      toInput.addEventListener("input", applyTimeline);
      applyTimeline();
    }
  }

  function initMapGallery() {
    const gallery = document.querySelector("[data-map-gallery]");

    if (!gallery) {
      return;
    }

    const buttons = gallery.querySelectorAll("[data-map-filter]");
    const cards = document.querySelectorAll("[data-map-category]");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.mapFilter || "all";
        buttons.forEach((item) => {
          const isActive = item === button;
          item.classList.toggle("active", isActive);
          item.classList.toggle("btn-ghost", !isActive);
        });

        cards.forEach((card) => {
          const matches = filter === "all" || card.dataset.mapCategory === filter;
          card.hidden = !matches;
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initHeaderScroll();
    initRevealAnimations();
    initReadingBar();
    initCharacterCounter();
    initGlossaryTooltips();
    initCopyButtons();
    initMapExplorer();
    initMapGallery();
    initAccessibilityHelpers();
  });
})();
