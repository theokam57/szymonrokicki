# Fragmenty HTML do artykułów

Gotowe kawałki do wklejenia w sekcję `<div class="article-content">`.
Podgląd wszystkiego naraz: `artykul-przyklad.html`.

---

## Akapit

```html
<p class="article-paragraph">Treść akapitu.</p>
```

Pierwsza litera **pierwszego** akapitu automatycznie staje się ozdobnym inicjałem — nic nie trzeba dodawać.

## Śródtytuł

```html
<h2 class="medieval-heading">Śródtytuł sekcji</h2>
<h3 class="medieval-heading">Mniejszy śródtytuł</h3>
```

---

## Zdjęcie

### Na całą szerokość, z podpisem

```html
<figure class="article-image">
    <img src="/assets/images/nazwa-pliku.jpg" alt="Opis obrazka dla czytników" loading="lazy">
    <figcaption>Podpis pod zdjęciem. <span class="image-source">Źródło: archiwum własne</span></figcaption>
</figure>
```

### Oblewane tekstem (z prawej / z lewej / wyśrodkowane)

```html
<figure class="article-image media-float-right">
    <img src="/assets/images/nazwa-pliku.jpg" alt="Opis" loading="lazy">
    <figcaption>Podpis.</figcaption>
</figure>
```

Zamień klasę na `media-float-left` albo `media-float-center`.
Na telefonach każdy wariant sam przechodzi na pełną szerokość.

**Gdzie wrzucić plik:** `static/assets/images/` — a w kodzie podajesz `/assets/images/nazwa-pliku.jpg`.

---

## Przypis (footnote)

Przypis to **dwa** elementy, które łączy wspólny identyfikator. Wymyśl krótki `ID`
(małe litery i myślniki), np. `laberschek-2018`.

### 1. W treści, w miejscu odnośnika

```html
<sup class="footnote-ref" id="ref-ID" data-ref-id="ID"><a href="#fn-ID" aria-label="Przypis 1">[1]</a></sup>
```

### 2. Na dole strony, w sekcji bibliografii

```html
<li id="fn-ID">
    <span class="reference-type">książka</span>,
    <strong>Autor</strong>, 2018,
    <em>Tytuł publikacji</em>, Miejsce, Wydawca, s. 67, ISBN: 000-00-00000-0-0
    <a class="reference-back" href="#ref-ID" aria-label="Wróć do miejsca przypisu">↩</a>
</li>
```

**Ważne:** kolejność `<li>` na liście musi odpowiadać numerom `[1]`, `[2]`, `[3]` w treści.

### Cała sekcja przypisów (wklej po `</div>` zamykającym `article-content`)

```html
<section class="article-references" aria-labelledby="article-references-heading">
    <h2 id="article-references-heading" class="medieval-heading">Przypisy i bibliografia</h2>
    <ol class="references-list">
        <!-- tutaj kolejne <li> -->
    </ol>
</section>
```

### Rodzaje źródła (`reference-type`)

`książka` · `artykuł` · `źródło` · `mapa` · `strona internetowa` · `archiwalium` · `inne`

### Źródło internetowe

```html
<li id="fn-ID">
    <span class="reference-type">strona internetowa</span>,
    <strong>Autor</strong>, 2026,
    <em>Tytuł strony</em>,
    <a href="https://example.com" target="_blank" rel="noopener noreferrer">link</a>, dostęp: 2026-07-22
    <a class="reference-back" href="#ref-ID" aria-label="Wróć do miejsca przypisu">↩</a>
</li>
```

---

## Hasło słowniczka (dymek z definicją)

```html
<span class="glossary-term" tabindex="0" role="button" aria-label="Definicja: Prawo magdeburskie">prawo magdeburskie<span class="glossary-tooltip" role="tooltip"><strong>Prawo magdeburskie</strong><span>Treść definicji.</span><small>Źródło definicji</small></span></span>
```

- Tekst **przed** `<span class="glossary-tooltip">` to słowo widoczne w zdaniu (możesz je odmienić, np. „prawie magdeburskim").
- `<strong>` to nazwa hasła, `<span>` to definicja, `<small>` (opcjonalny) to źródło.
- Nie zostawiaj spacji ani nowych linii między `</span>` a resztą zdania — inaczej podkreślenie się rozjedzie.

---

## Ramki redakcyjne

```html
<aside class="article-note article-note-fact">
    <h3>Fakt źródłowy</h3>
    <p>Informacja potwierdzona w źródle.</p>
</aside>

<aside class="article-note article-note-hypothesis">
    <h3>Hipoteza</h3>
    <p>Przypuszczenie oparte na przesłankach.</p>
</aside>

<aside class="article-note article-note-comment">
    <h3>Komentarz autora</h3>
    <p>Osobista uwaga albo zastrzeżenie.</p>
</aside>
```

## Ramka z uwagą

```html
<div class="notice-box">Ważna uwaga dla czytelnika.</div>
```

## Teza autorska w zdaniu

```html
<span class="teza-autorska">fragment oznaczony jako teza autorska</span>
```

## Cytat

```html
<blockquote class="article-quote">
    <p>Treść cytatu.</p>
</blockquote>
```

---

## Lista

```html
<ul>
    <li>Punkt pierwszy.</li>
    <li>Punkt drugi.</li>
</ul>
```

Lista numerowana: zamień `<ul>` na `<ol>`.

---

## Tabela

```html
<div class="table-scroll">
    <table class="article-table">
        <thead>
            <tr>
                <th>Rok</th>
                <th>Wydarzenie</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1340</td>
                <td>Lokacja miasta</td>
            </tr>
        </tbody>
    </table>
</div>
```

Owinięcie w `table-scroll` sprawia, że szeroka tabela przewija się w bok na telefonie.

---

## Odnośnik do innego artykułu

```html
<a href="/artykul/slug-innego-artykulu">tekst odnośnika</a>
```
