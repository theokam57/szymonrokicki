export function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");

  if (!toggle || !navigation) return;

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

  document.addEventListener("click", (event) => {
    if (!navigation.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

export function initHeaderScroll() {
  const header = document.querySelector(".site-header") || document.querySelector("body > header");
  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle("scrolled", window.scrollY > 18);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

export function initCharacterCounter() {
  document.querySelectorAll("textarea[data-character-counter]").forEach((field) => {
    const targetId = field.getAttribute("data-character-counter");
    const counter = targetId ? document.getElementById(targetId) : null;
    if (!counter) return;

    const updateCounter = () => {
      const length = field.value.length;
      const max = field.getAttribute("maxlength");
      counter.textContent = max ? `${length}/${max}` : `${length}`;
    };

    updateCounter();
    field.addEventListener("input", updateCounter);
  });
}

export function initCopyButtons() {
  document.querySelectorAll("[data-copy-text]").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.getAttribute("data-copy-text") || "";

      try {
        await navigator.clipboard.writeText(text);
        const originalText = button.textContent;
        button.textContent = "Skopiowano";
        window.setTimeout(() => {
          button.textContent = originalText || "Kopiuj URL";
        }, 1400);
      } catch {
        window.prompt("Skopiuj adres:", text);
      }
    });
  });
}

export function initAccessibilityHelpers() {
  const main = document.querySelector("main");
  if (main && !main.id) main.id = "main-content";
}
