# Statyczna wersja strony szymonrokicki.pl

Ten folder to w pełni statyczna wersja strony (czysty HTML), bez PHP i bez bazy danych.
Powstała z konwersji dotychczasowego CMS-a. Treść pochodzi z eksportu bazy
(`szymonnrokicki.sql`) z 22.07.2026.

## Co zawiera

```
static/
├── index.html                 → strona główna (/)
├── o-mnie/index.html          → /o-mnie/
├── projekty/index.html        → /projekty/
├── historia-lelowa/index.html → /historia-lelowa/
├── mapa-interaktywna/index.html → /mapa-interaktywna/ (Leaflet + OpenStreetMap)
├── galeria-map/index.html     → /galeria-map/
├── kontakt/index.html         → /kontakt/ (formularz przez Formspree)
├── wesprzyj/index.html        → /wesprzyj/ (pasek zbiórki + link do Suppi)
├── regulamin/index.html       → /regulamin/
├── artykul/lokacja-miasta-na-prawie-magdeburskim/index.html → jedyny OPUBLIKOWANY artykuł
├── 404.html                   → strona błędu
├── sitemap.xml
├── .htaccess                  → czysty adres artykułu + strona 404 (Apache)
└── README.md                  → ten plik
```

Wszystkie strony korzystają ze wspólnych zasobów przez adresy bezwzględne:
`/assets/css/public.css`, `/assets/js/public.js`, `/assets/images/...`.

Do folderu `static/assets/` zostały już skopiowane:
- `assets/css/public.css`
- `assets/js/public.js`

### JEDEN KROK RĘCZNY: obrazki, favicony i font

Plików graficznych (PNG/JPG/ICO) oraz fontu (TTF) nie dało się skopiować
automatycznie w tej sesji (są binarne, a środowisko powłoki na tym komputerze
się nie uruchomiło). Skopiuj je ręcznie — to dosłownie przeciągnięcie folderów
w Eksploratorze plików:

1. Skopiuj **cały** folder `assets/images/` → do `static/assets/images/`
2. Jeśli masz `assets/fonts/` (font `Canterbury.ttf`) → skopiuj do `static/assets/fonts/`
3. Gdy będziesz mieć skany map → wgraj je do `static/assets/mapy/`
   (oraz miniatury do `static/assets/mapy/thumbs/`)

Po tym folder `static/` będzie w 100% samodzielny. Nazwy plików i ścieżki
w HTML/CSS są już ustawione tak, by po skopiowaniu wszystko działało bez zmian.

Alternatywnie, w PowerShell (z katalogu projektu) całość zrobi jedna komenda:

```powershell
Copy-Item -Recurse -Force ".\assets\images" ".\static\assets\images"
# jeśli istnieją:
Copy-Item -Recurse -Force ".\assets\fonts"  ".\static\assets\fonts"
Copy-Item -Recurse -Force ".\assets\mapy"   ".\static\assets\mapy"
```

## Wdrożenie na hostingu

1. Najpierw wykonaj krok ręczny wyżej (skopiuj obrazki do `static/assets/images/`),
   żeby folder `static/` był kompletny.
2. Wgraj **zawartość** folderu `static/` do katalogu głównego strony (tam, gdzie dziś
   leży `index.php`). Czyli: `index.html`, foldery `o-mnie/`, `projekty/` itd.,
   `assets/`, `site.webmanifest`, `.htaccess`, `sitemap.xml`.
3. Usuń pliki i foldery PHP, których strona już nie potrzebuje:
   `index.php`, `article.php`, `header.php`, `footer.php`, `404.php`, `sitemap.php`,
   `contact_submit.php`, `functions.php`, `db.php`, `config*.php`,
   oraz foldery `admin/`, `includes/`, `cache/`, `sql/`.
   (Najpierw zrób kopię zapasową / commit — patrz niżej.)

Na hostingu innym niż Apache (np. Nginx) `.htaccess` jest ignorowany — strony i tak
działają, tylko adres artykułu może dostać ukośnik na końcu. Wtedy ustaw stronę 404
na `/404.html` w panelu hostingu.

## Formularz kontaktowy (Formspree)

Formularz na `/kontakt/` wysyła dane przez **Formspree** (bez PHP) i jest już
podpięty do Twojego endpointu: `https://formspree.io/f/xbdebbna`.
Pierwsza wiadomość może wymagać jednorazowego potwierdzenia adresu w panelu
Formspree. Ukryte pola `_subject`, `_next` i `_gotcha` (antyspam) są ustawione.

## Wesprzyj (pasek zbiórki) — `/wesprzyj/`

Strona pokazuje pasek postępu zbiórki na domenę oraz przycisk do
**https://suppi.pl/szymonrokicki**.

Aby zaktualizować kwotę, w pliku `wesprzyj/index.html` znajdź linię:

```html
<section class="support-goal ..." data-support data-collected="0" data-target="100" ...>
```

i zmień tylko dwie liczby:
- `data-collected` — ile złotych już zebrano,
- `data-target` — cel (koszt domeny/utrzymania).

Procent i szerokość paska policzą się same. Nic więcej nie trzeba ruszać.


## Uproszczony, bardziej średniowieczny wygląd

Wygląd został wyciszony: usunięto ruchome cząsteczki tła, drobne ornamenty
narożne i zygzaki, spłaszczono przyciski i karty, uproszczono tła i nagłówki —
z zachowaniem klimatu manuskryptu (pergamin, złoto, kroje Cinzel/Crimson).
Wszystkie te zmiany to jedna sekcja na końcu `assets/css/public.css`
(„UPROSZCZONY WYGLĄD"); można je łatwo dostroić lub cofnąć w jednym miejscu.

## Ważne różnice względem wersji PHP

- **Panel administracyjny znika.** Treść edytujesz teraz bezpośrednio w plikach HTML.
- **Publiczny jest tylko 1 artykuł** — `Lokacja miasta na prawie magdeburskim`
  (jako jedyny miał status *published*). Dwa pozostałe (`zamek-lelowski-szkic`,
  `lokacja-lelowa-notatka`) były szkicami (*draft*) i na żywej stronie też nie były
  widoczne — dlatego ich nie umieszczono. Jeśli chcesz je opublikować, daj znać.
- **Słowniczek** działa jako podpowiedzi (tooltipy) wpisane na stałe w treść artykułu.
- **Galeria map** wskazuje na pliki w `/assets/mapy/` oraz `/assets/mapy/thumbs/`.
  Tego folderu nie było w projekcie — dopóki nie wgrasz skanów map, miniatury będą
  puste. Struktura nazw plików jest zachowana 1:1 z dawnym CMS-em.

## Kopia zapasowa

Repozytorium jest pod git. Przed usunięciem plików PHP warto zrobić commit lub
skopiować cały folder, żeby w razie potrzeby wrócić do wersji z CMS-em.
