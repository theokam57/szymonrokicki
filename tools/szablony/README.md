# Szablony artykułów

`artykul-pusty.html` jest punktem startowym dla nowego tekstu, a `artykul-przyklad.html` pokazuje gotową strukturę. `fragmenty.md` zawiera mniejsze elementy do wykorzystania podczas redakcji.

Nowy artykuł historyczny umieść w jednym z katalogów:

```text
artykul/nazwa-artykulu/index.html
sredniowiecze/nazwa-artykulu/index.html
```

Po utworzeniu lub zmianie strony uruchom:

```powershell
npm run build
npm run check
```

Obrazy publiczne należą do `assets/images/`, mapy do `assets/mapy/`, a dokumenty do `assets/pdf/`. W HTML używaj ścieżek od katalogu głównego, na przykład `/assets/images/nazwa-pliku.jpg`.
