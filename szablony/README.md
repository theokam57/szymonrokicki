# Szablony artykułów

Folder pomocniczy — **nie wgrywaj go na serwer**. Leży obok `static/`, więc przy
wdrożeniu (kopiujesz zawartość `static/`) sam się nie załapie.

| Plik | Do czego |
|---|---|
| `artykul-pusty.html` | Czysty szablon — kopiujesz go, tworząc nowy artykuł. |
| `artykul-przyklad.html` | Podgląd wszystkich elementów naraz (zdjęcia, przypisy, ramki, tabela). |
| `fragmenty.md` | Ściąga: gotowe kawałki HTML do wklejenia. |

---

## Jak dodać nowy artykuł — 5 kroków

### 1. Utwórz folder artykułu

Wymyśl **slug** — adres artykułu. Tylko małe litery, cyfry i myślniki, bez polskich znaków:

```
zamek-lelowski
```

Utwórz folder i wklej do niego szablon jako `index.html`:

```
static/artykul/zamek-lelowski/index.html   ← kopia artykul-pusty.html
```

Adres artykułu to wtedy `https://szymonrokicki.pl/artykul/zamek-lelowski`.

### 2. Uzupełnij nagłówek pliku

Podmień wszystkie `{{ ... }}`:

- `{{TYTUL}}` — tytuł artykułu
- `{{SLUG}}` — ten sam slug co nazwa folderu
- `{{OPIS}}` — 1–2 zdania (widoczne w Google i przy udostępnianiu)
- `{{SLOWA, KLUCZOWE}}` — kilka fraz po przecinku
- `{{KATEGORIA}}` — np. „Historia Lelowa"
- `{{RRRR-MM-DD}}` i `{{DD.MM.RRRR}}` — data publikacji
- `{{X}} min czytania` — ok. 220 słów = 1 minuta

### 3. Napisz treść

Wszystko wchodzi między `<div class="article-content">` a `</div>`.
Każdy akapit w `<p class="article-paragraph">`. Zdjęcia, przypisy, słowniczek
i ramki — patrz `fragmenty.md`.

Jeśli artykuł nie ma przypisów, usuń całą sekcję `<section class="article-references">`.

### 4. Dodaj artykuł do list

**a) Spis w „Historia Lelowa"** — plik `static/historia-lelowa/index.html`,
wewnątrz `<div class="article-list">` dopisz:

```html
<article class="history-box reveal">
    <h3 class="medieval-heading"><a href="/artykul/zamek-lelowski">Zamek lelowski</a></h3>
    <p class="script-text">Krótki opis artykułu — to samo, co w meta description.</p>
</article>
```

**b) Strona główna (opcjonalnie)** — plik `static/index.html`,
wewnątrz `<div class="article-grid">` dopisz:

```html
<article class="card article-card reveal">
    <img src="/assets/images/zamek.jpg" alt="" loading="lazy">
    <div class="card-body">
        <p class="card-kicker">Szymon Rokicki</p>
        <h3><a href="/artykul/zamek-lelowski">Zamek lelowski</a></h3>
        <p>Krótki opis artykułu.</p>
    </div>
</article>
```

Linijkę `<img ...>` możesz pominąć, jeśli artykuł nie ma zdjęcia.
Na stronie głównej najlepiej trzymać 3 najnowsze teksty.

### 5. Dopisz do mapy strony

Plik `static/sitemap.xml`, przed `</urlset>`:

```xml
<url>
    <loc>https://szymonrokicki.pl/artykul/zamek-lelowski</loc>
    <lastmod>2026-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
```

---

## Zdjęcia

Pliki wrzucaj do `static/assets/images/`, a w kodzie podawaj ścieżkę
zaczynającą się od ukośnika:

```html
<img src="/assets/images/nazwa-pliku.jpg" alt="Opis">
```

Kilka zasad:

- **Nazwy plików** — małe litery i myślniki, bez spacji i polskich znaków.
- **`alt`** — krótki opis dla czytników ekranu i wyszukiwarek. Przy zdjęciu
  czysto dekoracyjnym zostaw `alt=""`.
- **Rozmiar** — zmniejsz zdjęcia przed wrzuceniem (szerokość ok. 1600 px w zupełności
  wystarcza); duże pliki spowalniają stronę.
- **`loading="lazy"`** — zostaw, obrazek doczyta się dopiero gdy będzie potrzebny.

---

## Podgląd przed publikacją

Otwórz plik artykułu w przeglądarce. Jeśli style się nie ładują, to dlatego, że
ścieżki są bezwzględne (`/assets/...`) i wymagają serwera — najprościej wrzucić
plik na hosting do folderu testowego albo uruchomić lokalny serwer w katalogu
`static/`.
