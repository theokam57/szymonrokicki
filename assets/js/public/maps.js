const ROMAN_CENTURIES = {
  10: "X",
  11: "XI",
  12: "XII",
  13: "XIII",
  14: "XIV",
  15: "XV",
  16: "XVI",
  17: "XVII",
  18: "XVIII",
  19: "XIX",
  20: "XX",
  21: "XXI",
};

function romanCentury(value) {
  return ROMAN_CENTURIES[value] || String(value);
}

export function initMapExplorer() {
  const explorer = document.querySelector("[data-map-explorer]");
  if (!explorer || typeof L === "undefined") return;

  const viewport = explorer.querySelector("[data-map-viewport]");
  const detailTitle = explorer.querySelector("[data-map-detail-title]");
  const detailText = explorer.querySelector("[data-map-detail-text]");
  const markerButtons = explorer.querySelectorAll("[data-map-marker]");
  const timeline = document.querySelector("[data-map-timeline]");
  const fromInput = timeline?.querySelector("[data-timeline-from]") || null;
  const toInput = timeline?.querySelector("[data-timeline-to]") || null;
  const timelineLabel = timeline?.querySelector("[data-timeline-label]") || null;
  const detailLink = explorer.querySelector("[data-map-detail-link]");

  if (!viewport) return;

  const map = L.map(viewport, {
    minZoom: 12,
    maxZoom: 19,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const markerLayers = new Map();
  const bounds = L.latLngBounds([]);
  let activeId = "";

  const activateMarker = (id, label, summary, link = "") => {
    activeId = id;
    markerButtons.forEach((item) => {
      item.classList.toggle("active", item.dataset.markerId === id);
      item.setAttribute("aria-pressed", String(item.dataset.markerId === id));
    });

    const marker = markerLayers.get(id);
    if (marker) {
      map.setView(marker.getLatLng(), 17);
      marker.openPopup();
    }

    if (detailTitle) detailTitle.textContent = label || "Punkt na mapie";
    if (detailText) detailText.textContent = summary || "";
    if (detailLink) {
      detailLink.hidden = !link;
      if (link) detailLink.href = link;
    }
  };

  markerButtons.forEach((button) => {
    const lat = parseFloat(button.dataset.markerLat || "0");
    const lng = parseFloat(button.dataset.markerLng || "0");
    const id = button.dataset.markerId || "";
    const label = button.dataset.markerLabel || button.textContent.trim();
    const summary = button.dataset.markerSummary || "";
    const link = button.dataset.markerLink || "";

    const marker = L.marker([lat, lng], { title: label }).addTo(map);
    const popup = document.createElement("div");
    const popupTitle = document.createElement("strong");
    popupTitle.textContent = label;
    const popupSummary = document.createElement("p");
    popupSummary.textContent = summary;
    popup.append(popupTitle, popupSummary);
    marker.bindPopup(popup);
    marker.on("click", () => activateMarker(id, label, summary, link));

    markerLayers.set(id, marker);
    bounds.extend([lat, lng]);
    button.addEventListener("click", () => activateMarker(id, label, summary, link));
  });

  if (bounds.isValid()) {
    map.fitBounds(bounds.pad(0), { maxZoom: 16 });
  } else {
    map.setView([50.6832, 19.6249], 15);
  }

  if (fromInput && toInput) {
    const applyTimeline = () => {
      let from = parseInt(fromInput.value, 10);
      let to = parseInt(toInput.value, 10);

      if (from > to) [from, to] = [to, from];

      if (timelineLabel) {
        timelineLabel.textContent = `${romanCentury(from)} w. – ${romanCentury(to)} w.`;
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

        if (visible && id === activeId) activeStillVisible = true;
      });

      if (!activeStillVisible) {
        activeId = "";
        markerButtons.forEach((item) => item.classList.remove("active"));
        if (detailLink) detailLink.hidden = true;

        if (detailTitle) detailTitle.textContent = "Brak obiektów w tym zakresie";
        if (detailText) {
          detailText.textContent =
            "Zmień zakres osi czasu, aby zobaczyć punkty istniejące w wybranym okresie.";
        }
      }
    };

    fromInput.addEventListener("input", applyTimeline);
    toInput.addEventListener("input", applyTimeline);
    applyTimeline();
  }
}

export function initMapGallery() {
  const gallery = document.querySelector("[data-map-gallery]");
  if (!gallery) return;

  const buttons = gallery.querySelectorAll("[data-map-filter]");
  const cards = gallery.parentElement.querySelectorAll("[data-map-category]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.mapFilter || "all";

      buttons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("active", isActive);
        item.classList.toggle("btn-ghost", !isActive);
      });

      cards.forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.mapCategory !== filter;
      });
    });
  });
}
