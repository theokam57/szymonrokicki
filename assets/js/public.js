import {
  initAccessibilityHelpers,
  initCharacterCounter,
  initCopyButtons,
  initHeaderScroll,
  initMobileMenu,
} from "./public/ui.js";

async function initSite() {
  initMobileMenu();
  initHeaderScroll();
  initCharacterCounter();
  initCopyButtons();
  initAccessibilityHelpers();

  if (document.querySelector(".article-content")) {
    const { initAutomaticGlossary, initGlossaryTooltips } = await import("./public/glossary.js");
    initAutomaticGlossary();
    initGlossaryTooltips();
  }

  if (document.querySelector("[data-map-explorer], [data-map-gallery]")) {
    const { initMapExplorer, initMapGallery } = await import("./public/maps.js");
    initMapExplorer();
    initMapGallery();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSite, { once: true });
} else {
  initSite();
}
