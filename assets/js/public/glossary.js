import { SITE_GLOSSARY } from "../glossary-data.js";

export function initAutomaticGlossary() {
  const glossary = SITE_GLOSSARY;
  const roots = document.querySelectorAll(".article-content");

  if (!glossary.length || !roots.length) return;

  roots.forEach((root, rootIndex) => {
    glossary.forEach((entry, entryIndex) => {
      const textNodes = [];
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const parent = node.parentElement;
          if (!parent || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;

          if (
            !parent.closest("p, li, figcaption, blockquote") ||
            parent.closest("a, code, pre, sup, .glossary-term")
          ) {
            return NodeFilter.FILTER_REJECT;
          }

          return NodeFilter.FILTER_ACCEPT;
        },
      });

      const expression = new RegExp(
        `(^|[^\\p{L}\\p{N}])(${entry.pattern})(?=$|[^\\p{L}\\p{N}])`,
        "iu",
      );

      while (walker.nextNode()) textNodes.push(walker.currentNode);

      for (const node of textNodes) {
        if (!node.isConnected || node.parentElement.closest(".glossary-term")) continue;

        const match = expression.exec(node.nodeValue);
        if (!match) continue;

        const start = match.index + match[1].length;
        const matchedText = match[2];
        const tooltipId = `glossary-${rootIndex + 1}-${entryIndex + 1}`;
        const term = document.createElement("dfn");
        const tooltip = document.createElement("span");
        const label = document.createElement("strong");

        term.className = "glossary-term";
        term.tabIndex = 0;
        term.setAttribute("aria-describedby", tooltipId);
        term.append(document.createTextNode(matchedText));

        tooltip.className = "glossary-tooltip";
        tooltip.id = tooltipId;
        tooltip.setAttribute("role", "tooltip");
        label.textContent = entry.label;
        tooltip.append(label, document.createTextNode(` ${entry.definition}`));
        term.append(tooltip);

        const fragment = document.createDocumentFragment();
        fragment.append(
          document.createTextNode(node.nodeValue.slice(0, start)),
          term,
          document.createTextNode(node.nodeValue.slice(start + matchedText.length)),
        );

        node.replaceWith(fragment);
        break;
      }
    });
  });
}

export function initGlossaryTooltips() {
  const terms = document.querySelectorAll(".glossary-term");
  if (!terms.length) return;

  const placeTooltip = (term) => {
    const tooltip = term.querySelector(".glossary-tooltip");
    if (!tooltip || window.matchMedia("(max-width: 760px)").matches) return;

    tooltip.style.setProperty("--glossary-shift", "0px");
    const rect = tooltip.getBoundingClientRect();
    const gutter = 12;
    let shift = 0;

    if (rect.left < gutter) {
      shift = gutter - rect.left;
    } else if (rect.right > window.innerWidth - gutter) {
      shift = window.innerWidth - gutter - rect.right;
    }

    tooltip.style.setProperty("--glossary-shift", `${shift}px`);
  };

  const closeAll = (except = null) => {
    terms.forEach((term) => {
      if (term !== except) term.classList.remove("is-open");
    });
  };

  terms.forEach((term) => {
    term.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = term.classList.contains("is-open");
      closeAll(term);
      term.classList.toggle("is-open", !isOpen);
      if (!isOpen) placeTooltip(term);
    });

    term.addEventListener("mouseenter", () => placeTooltip(term));
    term.addEventListener("focus", () => placeTooltip(term));

    term.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const isOpen = term.classList.contains("is-open");
        closeAll(term);
        term.classList.toggle("is-open", !isOpen);
        if (!isOpen) placeTooltip(term);
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
