# Narzędzia

- `build-sitemap.mjs` generuje `sitemap.xml` z publicznych plików `index.html`.
- `build-search-index.mjs` generuje karty wyszukiwania z tytułów i opisów publicznych stron; słowa alternatywne utrzymuje w jednym miejscu w skrypcie.
- `check-site.mjs` sprawdza spójność adresów i podstawowe błędy w HTML.
- `generate-responsive-images.ps1` przygotowuje warianty obrazów map.
- `generator/` zawiera lokalny formularz do przygotowania artykułu.
- `szablony/` zawiera wzory i fragmenty używane przy ręcznym tworzeniu treści.
- `archive/` przechowuje jednorazowe skrypty migracyjne. Nie są częścią zwykłego procesu budowania.

Standardowa praca odbywa się z katalogu głównego przez `npm run build` i `npm run check`.
