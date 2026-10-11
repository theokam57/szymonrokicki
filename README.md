# szymonrokicki.pl

Statyczna strona w HTML, CSS i JavaScript. Nie wymaga frameworka ani procesu serwerowego.

## Struktura

```text
artykul/          artykuły o historii Lelowa
historia-lelowa/  strona działu, mapy, kalendarium i źródła
sredniowiecze/    strona działu i artykuły ogólnohistoryczne
projekty/         lista projektów i ich opisy
assets/           publiczne style, skrypty, obrazy, mapy i dokumenty
tools/            generator, szablony, kontrole i skrypty budowania
```

Każda publiczna strona ma jeden adres zgodny z położeniem pliku. Przykładowo
`artykul/stary-lelow/index.html` odpowiada adresowi `/artykul/stary-lelow/`.
Stare adresy są obsługiwane wyłącznie przez przekierowania 301 w `.htaccess`.

## Polecenia

```powershell
npm install
npm run build
npm run check
```

`npm run build` składa i minifikuje CSS, generuje indeks wyszukiwania z publicznych stron oraz odświeża `sitemap.xml`.
`npm run check` sprawdza canonicale, linki lokalne, kotwice, JSON-LD i podstawową strukturę HTML.

Podgląd lokalny można uruchomić dowolnym serwerem plików statycznych, na przykład:

```powershell
npx serve .
```
