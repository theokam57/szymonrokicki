# Historia Lelowa — kierunek rozwoju serwisu szymonrokicki.pl

**Rekomendacja:** rozwijać stronę jako autorskie archiwum historii Lelowa, którego podstawą są opisane źródła, miejsca i opowieści mieszkańców. Największą wartość przyniesie uporządkowanie istniejących materiałów, poprawienie wyszukiwania i mapy oraz zmiana hierarchii strony głównej. Rozbudowę funkcji należy podporządkować jakości kolekcji.

**Zakres i granice ustaleń.** Stan oceniono 13 września 2026 r. Ustalenia lokalne dotyczą kopii roboczej repozytorium, zawierającej 33 publiczne pliki HTML; nie oznaczają automatycznie stanu wdrożenia. Publiczną stronę główną obejrzano osobno. Wersja lokalna ma dodatkowe elementy, których nie ma w obejrzanej wersji publicznej. Nie zmierzono ruchu, zachowania rzeczywistych odbiorców, pozycji w Google ani terenowych wskaźników wydajności. Ocena historyczna obejmuje wybrane twierdzenia i sposób dokumentowania, a nie pełną recenzję naukową wszystkich tekstów.

**Poziomy pewności:** ustalenie oznacza wynik odczytu plików, obserwacji strony lub konkretnego testu; interpretacja oznacza ocenę znaczenia tego wyniku; rekomendacja oznacza proponowaną decyzję. Propozycje architektury i priorytetów są oceną redakcyjną, a nie zmierzonym efektem biznesowym.

## 1. Najważniejsze ustalenia

| Obszar | Ustalenie | Znaczenie |
|---|---|---|
| Kierunek strony | Główny komunikat przedstawia autora; dominująca zawartość dotyczy Lelowa | Należy połączyć obietnicę pierwszego ekranu z rzeczywistą specjalizacją |
| Wersje | Publiczna główna nie zawiera lokalnej sekcji polecanych tekstów ani pozycji „Średniowiecze” w menu | Wdrożenie i repozytorium trzeba oceniać oddzielnie |
| Wyszukiwanie | 26 kart, 20 unikalnych adresów, sześć adresów występuje podwójnie | Wyniki zawyżają liczbę dostępnych materiałów |
| Wyszukiwanie źródeł | Brakuje stron opisów zamku z 1629 i 1792 r.; zapytanie „1629” daje zero wyników | Cenne istniejące materiały są pomijane przez wyszukiwarkę |
| Mapa | Brama Krakowska pozostaje aktywna w X wieku; jej opis wskazuje XIV–XIX wiek | Funkcja osi czasu przekazuje sprzeczną informację historyczną |
| Galeria | Wszystkie 14 kart mają źródło „Archiwum map strony” | Czytelnik nie otrzymuje z tego pola informacji o pochodzeniu oryginału |
| Kalendarium | Wiele późniejszych wpisów opisuje daty map zamiast wydarzeń miejskich | Nazwa obiecuje szerszą historię niż przedstawiony wybór |
| Telefon | Przy 390 × 844 px pierwszy ekran zajmuje niemal całą wysokość i nie pokazuje materiału archiwalnego | Warto szybciej prezentować zawartość |
| Technika | Kontrola repozytorium zakończyła się powodzeniem dla 33 HTML | Poprawność podstaw struktury nie wykrywa błędów treści i działania |

Źródła ustaleń lokalnych: [L1–L8] w wykazie na końcu. Wyniki wyszukiwarki i mapy zostały potwierdzone w działającym podglądzie, a nie wyłącznie wywnioskowane z kodu.

## 2. Tożsamość i odbiorcy

Serwis ma materiał na wyraźną specjalizację: historia przestrzeni Lelowa, dawne mapy i dostępne źródła objaśniane przez lokalnego autora. Wstęp „Nazywam się Szymon Rokicki” jest zgodny z domeną osobistą, lecz sam nie wyjaśnia, dlaczego mieszkaniec, turysta lub nauczyciel powinien zostać na stronie. Wybrany kierunek archiwalny przemawia za odwróceniem hierarchii: temat jako główna obietnica, autor jako gwarancja odpowiedzialności za opracowanie.

Proponowana nazwa widoczna w nagłówku to **„Historia Lelowa”**, z podpisem **„Autorskie archiwum Szymona Rokickiego”**. Nie wymaga to przenoszenia domeny ani usuwania strony o autorze. W pierwszym ekranie można napisać: „Poznaj dawny Lelów przez mapy, dokumenty i historie miejsc”. Dwa główne działania to „Odkryj historię” i „Przeglądaj mapy i źródła”.

| Odbiorca | Zadanie | Odpowiedź serwisu |
|---|---|---|
| Mieszkaniec | Rozpoznać miejsce lub rodzinny ślad | Zdjęcia, dawne nazwy, mapa, możliwość przekazania informacji |
| Osoba zainteresowana historią | Zrozumieć, co wiadomo i na jakiej podstawie | Artykuł, przypis, pełny opis źródła, zaznaczona niepewność |
| Turysta | Połączyć dawną historię z dzisiejszym terenem | Mapa, zdjęcie współczesne, informacja o zachowaniu obiektu |
| Nauczyciel lub uczeń | Znaleźć zrozumiały i możliwy do zacytowania materiał | Krótkie wprowadzenie, daty, druk, opis bibliograficzny |
| Powracający czytelnik | Zobaczyć nowe materiały | Lista ostatnio dodanych i istotnie uzupełnionych obiektów |

To proponowane grupy odbiorców, nie wynik badań demograficznych. Ich użyteczność należy sprawdzić krótkimi zadaniami z rzeczywistymi czytelnikami.

Usunięcie „polityki” z pierwszego hasła jest w tym kierunku uzasadnione zakresem archiwum. Działalność autora może pozostać w biografii. Nie ma potrzeby tworzenia publicystycznego działu wyłącznie po to, by uzasadnić istniejące hasło.

## 3. Porównanie z projektami referencyjnymi

Poniższe projekty stanowią wzorce organizacji wiedzy. Nie są bezpośrednio porównywalne skalą, finansowaniem ani zespołem z osobistą stroną.

| Projekt | Zaobserwowany lub opisany wzorzec | Co przenieść do Lelowa | Czego nie kopiować na początek |
|---|---|---|---|
| Teatr NN, mapy i HGIS Lublin | Powiązania map z miejscami, osobami, wydarzeniami i źródłami | Droga „miejsce → materiał → źródło” | Rozbudowanej infrastruktury HGIS |
| Wirtualny Sztetl, Lelów | Historia konkretnej społeczności, bibliografia i oznaczenie weryfikacji | Czytelne autorstwo, źródła i zakres tematyczny | Instytucjonalnego oznaczenia „zweryfikowany”, jeśli nie stoi za nim realna recenzja |
| Polona/Labs, kolekcje cyfrowe | Opis obiektu, kategoryzacja i kontekst kolekcji | Stały zestaw danych każdej mapy i fotografii | Rozbudowanego standardu bibliotecznego jako warunku uruchomienia małej kolekcji |
| Centrum Archiwistyki Społecznej | Gromadzenie fotografii, dokumentów i relacji wraz z opisem oraz udziałem społeczności | Uporządkowane przyjmowanie materiałów i zapisywanie ich pochodzenia | Własnego skomplikowanego systemu archiwizacji od pierwszego dnia |
| Gmina Lelów, historia | Syntetyczne przedstawienie wielu epok, podpisany autor opracowania | Szersze ramy chronologiczne i wskazanie literatury | Powielania kolejnej ogólnej historii miejscowości bez własnego wkładu |

Teatr NN pokazuje, że mapę można traktować jako wejście do dokumentacji miejsca, a nie oddzielny gadżet. Wirtualny Sztetl pokazuje potrzebę uwzględnienia historii społeczności żydowskiej w szerokim obrazie Lelowa. Materiały Polony podkreślają rolę tytułu, autorstwa, daty, typu i lokalizacji w opisie kolekcji. CAS opisuje archiwum poprzez zbiory, ich opracowanie i udział mieszkańców. Wniosek dla tej strony: najpierw stworzyć małą, dobrze udokumentowaną kolekcję, którą da się przeglądać kilkoma drogami. [1–5]

## 4. Wiarygodność materiałów i praca ze źródłami

Najpilniejsza zmiana dotyczy pochodzenia map. „Archiwum map strony” wskazuje obecne miejsce przechowywania pliku, ale nie jego autora, instytucję przechowującą oryginał ani katalog, z którego pozyskano reprodukcję. To istotna luka w galerii, która ma służyć analizie historycznej. Nie oznacza to, że mapy są nieautentyczne; oznacza, że obecny opis nie pozwala tego samodzielnie prześledzić. [L3]

Minimalny rekord mapy powinien obejmować:

| Pole | Sposób zapisu |
|---|---|
| Tytuł oryginalny i tytuł opisowy | Oddzielić nazwę dokumentu od tytułu przygotowanego dla czytelnika |
| Autor lub wydawca | Zapisać ustaloną osobę/instytucję albo „nieustalony” |
| Data | Odróżnić datę wykonania/wydania od daty przedstawionego stanu, jeśli są różne |
| Zasób źródłowy | Instytucja, kolekcja lub zespół, sygnatura, trwały odnośnik |
| Zakres | Cały arkusz czy wycinek; jaki obszar rzeczywiście obejmuje |
| Opracowanie cyfrowe | Kadrowanie, korekty, naniesione opisy, autor opracowania |
| Wykorzystanie | Informacja o warunkach udostępnienia pochodząca z rekordu źródłowego |
| Wartość historyczna | Co można z mapy odczytać, a czego nie da się z niej rozstrzygnąć |

Taki zestaw jest propozycją dla małego serwisu, inspirowaną praktyką opisu kolekcji, a nie formalnym wymogiem wdrożenia wszystkich standardów archiwalnych. Nieustalonych danych nie należy uzupełniać domysłami. [3]

Opis zamku z 1629 r. jest szczególnie wartościowym kierunkiem: pozwala pokazać materiał bardziej konkretny niż ogólne streszczenie dziejów. Lokalna strona podaje tekst i odnośnik do PDF, lecz widoczny opis źródła jest bardzo krótki. Należy dodać podstawę wydania, autora transkrypcji lub opracowania, zasady modernizacji pisowni i wskazanie stron. Nie należy nazywać pliku reprodukcją rękopisu bez sprawdzenia, co faktycznie zawiera. [L4]

Słownik historyczno-geograficzny IH PAN odnotowuje opisy zamku z 1629 i 1792 r. oraz zwięzły opis z 1642 r.; wskazuje również edycję opisu z 1629 r. przez Jacka Laberscheka i opisu z 1792 r. przez Zdzisława Zaborskiego. To konkretny trop do uzupełnienia aparatu źródłowego, ale nie dowód, że lokalny PDF jest dokładnie tą edycją. [6]

Proponowany standard artykułu: krótka odpowiedź na pytanie tytułowe, następnie omówienie materiałów, zaznaczenie niepewności i przypisy przy twierdzeniach. W wypadku hipotezy przestrzennej osobno oznaczać pewność datowania i pewność lokalizacji. Ogólne zastrzeżenie na końcu tekstu nie powinno zastępować takiego rozróżnienia w miejscach, gdzie czytelnik widzi konkretną datę lub punkt na mapie.

Nie trzeba stale nazywać tekstów „prowizorycznymi”. Wystarczą uczciwe statusy: opracowanie, hipoteza, materiał źródłowy, szkic w przygotowaniu. Informacja o dacie aktualizacji ma sens wtedy, gdy odpowiada rzeczywistej zmianie materiału. W biografii warto pokazać krótki opis sposobu pracy; istniejący fragment „Jak pracuję nad stroną” znajduje się lokalnie w komentarzu HTML, więc nie jest normalnie widoczny. [L7]

## 5. Mapa i kalendarium

W lokalnej mapie są cztery punkty. Brama Krakowska ma zakres X–XXI wiek, chociaż opis mówi o XIV–XIX wieku. W teście wybranie X–X wieku pozostawiło jej przycisk aktywny i znacznik widoczny; po otwarciu pojawił się sprzeczny opis. Jest to błąd do naprawienia przed zwiększaniem ekspozycji mapy. Poprawna data samej bramy wymaga źródła; nie należy automatycznie uznać opisu za zweryfikowany tylko dlatego, że jest węższy od zakresu danych. [L2]

Podobnego uporządkowania wymaga punkt zamku: opis wspomina 1246 r., filtr zaczyna się od XIV wieku. To może odpowiadać rozróżnieniu wcześniejszego grodu i późniejszego zamku murowanego, ale interfejs go nie wyjaśnia. Zalecane są oddzielne fazy albo jasno opisany zakres punktu. Rok pierwszej wzmianki nie powinien automatycznie stawać się datą powstania obiektu.

Ważne jest również znaczenie końca okresu. Zamek rozebrany na początku XIX wieku i miejsce dawnego zamku istniejące współcześnie nie są tym samym obiektem historycznym. Filtr powinien jasno rozróżniać „istniał w tym okresie” od „miejsce związane z tym okresem”. Przy dokładności do stuleci interfejs musi informować, że wynik jest przybliżony.

Docelowo karta punktu powinna zawierać opis, źródło, datowanie, dokładność położenia, stan zachowania i link do artykułu. Ta sama treść powinna być dostępna na zwykłej liście poza mapą. Mapa powinna pomagać dotrzeć do wiedzy również wtedy, gdy ktoś nie korzysta z gestów lub gdy podkład się nie załaduje.

Kalendarium wymaga osobnej redakcji. Po najstarszych wydarzeniach liczne wpisy, np. 1827, 1862, 1873, 1914 czy 1944, opisują mapy. Jest to sensowne jako historia kartografii, ale słabo realizuje obietnicę „Kalendarium historii Lelowa”. Rekomendacja: rozdzielić wydarzenia i źródła kartograficzne, ewentualnie pozostawić wspólny widok z wyraźnym typem każdego wpisu. [L5]

Nowe wydarzenia należy dodawać po sprawdzeniu źródeł. Syntetyczne opracowanie gminy i materiał Wirtualnego Sztetla wyznaczają szersze pola dalszej kwerendy: dzieje nowożytne, społeczność żydowska, wojna i okres powojenny. Nie jest to podstawa do automatycznego kopiowania chronologii bez sprawdzenia szczegółów. [2,5]

## 6. Wyszukiwanie i nawigacja

Lokalna wyszukiwarka zawiera 26 kart prowadzących do 20 adresów. Powtarzają się: galeria map, bibliografia, Stary Lelów, zamek, mury i rynek. Zapytanie „zamek” daje cztery karty, z czego dwie prowadzą do tej samej strony zamku. Zapytanie „1629” daje zero wyników, mimo istnienia odpowiedniego artykułu. Brakuje również wpisu strony opisu z 1792 r. [L1]

Mechanizm dopasowuje ciąg znaków w tytułach, opisach i nazwach sekcji, a nie pełną treść artykułów. To może wystarczyć na obecnym etapie, jeśli indeks jest kompletny i odpowiada obietnicy wyszukiwarki. Obecnie priorytetem jest automatyczne tworzenie jednego wpisu na adres i dodanie ważnych dat, nazw alternatywnych oraz słów kluczowych. Nie ma potrzeby od razu wdrażać zewnętrznego silnika.

Kryteria odbioru: wyniki dla „1629” i „1792” prowadzą do właściwych opisów, adresy nie powtarzają się, nazwy z polskimi znakami i ich praktyczne warianty dają przewidywalne wyniki, komunikat o braku dopasowania podpowiada dalszą drogę. Przy aktualizacji treści nie powinno być konieczne ręczne pamiętanie o drugiej kopii jej opisu w wyszukiwarce.

Proponowane menu to **Historia Lelowa · Mapy i archiwum · Miejsca · O projekcie · Szukaj**. „Kontakt” i „Wesprzyj” mogą pozostać łatwo dostępne w dodatkowej nawigacji lub stopce. „O mnie” należy powiązać ze stroną projektu, a nie usuwać. Osobna pozycja „Średniowiecze” nie jest konieczna, jeśli przede wszystkim ma objaśniać kontekst lokalnej historii.

Działy „Miejsca” i „Mapy i archiwum” należy uruchamiać wraz z realną zawartością. Nowa etykieta bez uporządkowania obiektów jedynie przeniesie istniejący problem. Obecne adresy artykułów można zachować; zmiana menu nie wymaga masowej zmiany URL.

## 7. Strona główna i styl wizualny

Publiczna główna ma wyraźny historyczny charakter: ciemne tło, złote akcenty, ozdobny znak autora i duży tytuł. Ten język wizualny jest spójny, ale przedstawia przede wszystkim autora i atmosferę. W lokalnym wariancie mobilnym 390 × 844 px pierwszy ekran również praktycznie nie dopuszcza do głosu konkretnego materiału. To obserwacja układu, nie pomiar rezygnacji czytelników. [L6,L8]

Proponowana kolejność strony:

1. Krótka obietnica dotycząca historii Lelowa i dwa wejścia do materiałów.
2. Jeden wyróżniony obiekt: autentyczna mapa, dokument albo fotografia z podpisem.
3. Trzy ścieżki startowe, np. Stary Lelów, zamek, dawne mapy.
4. Ostatnio dodane lub istotnie uzupełnione materiały.
5. Zaproszenie do przekazania zdjęć, dokumentów i wspomnień.
6. Krótka informacja o autorze, zasadach pracy i wsparciu projektu.

Warto ograniczyć powtarzanie na głównej wszystkich pozycji menu. Nie jest potrzebne jednoczesne przedstawienie „O mnie”, „Projektów” i „Kontaktu” jako równorzędnych kafelków przed polecanymi materiałami. Istniejące lokalnie polecenia artykułów są krokiem w dobrym kierunku, ale znajdują się dopiero za rozbudowanym wstępem i katalogiem działów.

Zachować historyczny krój nagłówków i pojedyncze złote akcenty. Ograniczyć liczbę ramek, cieni i wielkich liter w elementach użytkowych. Sprawdzić spokojniejszy wariant długiego tekstu z mniejszą obecnością tekstur. Nie ma dowodu, że jasne tło samo w sobie rozwiąże problemy strony; wybór palety powinien być poprzedzony sprawdzeniem czytelności na dłuższym artykule.

Zdjęcia i mapy należy pokazywać z podpisami. Jeśli ilustracja jest rekonstrukcją, powinna mieć widoczne oznaczenie i wyjaśnienie podstaw. Ilustracja nastrojowa może pełnić funkcję dekoracyjną, ale nie powinna być odczytywana jako potwierdzony wizerunek dawnego Lelowa.

## 8. Redakcja i rozwój zawartości

W artykule o zamku kilkukrotnie powraca wyjaśnienie znaczenia administracyjnego budowli i potrzeby czytania krajobrazu. Powtórzenia można skrócić, a odzyskane miejsce przeznaczyć na datowany fakt, fragment źródła lub porównanie interpretacji. Nie chodzi o narzuconą długość artykułu; każdy kolejny akapit powinien wnosić nową informację. [L4]

Podstrona „Mówimy po swojemu” dobrze określa intencję, ale obecnie przede wszystkim opisuje, co projekt mógłby zbierać. Najlepszym następnym krokiem jest mała, rzeczywista próbka: kilka udokumentowanych haseł, nazw terenowych lub relacji. Każdy wpis powinien mieć znaczenie, przykład użycia, przybliżone miejsce, informację o pochodzeniu i odpowiedzialnego redaktora. Przy publikowaniu relacji trzeba uzgodnić z rozmówcą zakres udostępnienia. [L7]

| Kolejność | Materiał | Dlaczego |
|---|---|---|
| 1 | Dopracowane opisy zamku z 1629 i 1792 r. | Już istnieją; można podnieść ich użyteczność bez wymyślania nowego działu |
| 2 | Pełny opis kilku najlepszych map | Tworzy wzorzec opisu dla całej kolekcji |
| 3 | Jedna historia miejsca z dawną mapą i współczesnym zdjęciem | Łączy archiwum z doświadczeniem mieszkańca lub turysty |
| 4 | Kilka haseł lokalnej mowy | Zamienia deklarację projektu w dostępny zbiór |
| 5 | Materiał o życiu mieszkańców, także społeczności żydowskiej | Rozszerza historię poza budowle i średniowiecze |
| 6 | Krótka trasa historyczna | Wykorzystuje sprawdzone punkty; wymaga aktualnych danych terenowych |

Nie należy usuwać ogólnych tekstów o średniowieczu tylko dlatego, że nie dotyczą bezpośrednio Lelowa. Warto przypisać im rolę materiałów objaśniających: prawo miejskie, handel, rzemiosło, codzienność. Publikowanie kolejnych ogólnych tematów powinno wynikać z potrzeb konkretnych lokalnych artykułów.

Google w zaleceniach dotyczących pomocnych treści podkreśla oryginalny wkład, jasne źródła i autorstwo. Dla tego projektu oznacza to sensowną przewagę własnego opisu mapy, komentarza do dokumentu czy relacji mieszkańca nad kolejnym szerokim streszczeniem. Nie daje to gwarancji określonej pozycji w wyszukiwarce. [7]

## 9. Technika, dostępność i widoczność

Statyczna architektura odpowiada obecnej skali. Publiczny skrypt rozdziela obsługę interfejsu od modułów map i słownika. Galeria korzysta z miniatur, wariantów WebP i opóźnionego ładowania. Istnieją style druku, odnośnik pomijający nawigację i widoczne style fokusu. Te elementy należy zachować. Pomyślny wynik kontroli 33 HTML dotyczy zakresu sprawdzanego przez skrypt: m.in. adresów kanonicznych, lokalnych odnośników i składni JSON-LD. Nie potwierdza poprawności historycznej ani całej dostępności. [L3,L8]

W lokalnych zasobach logo PNG ma 1 036 585 bajtów, tekstura pergaminu 1 970 560 bajtów, a tło pierwszego ekranu 697 156 bajtów. Razem to około 3,70 MB dziesiętnych danych plikowych. Jest to wielkość zasobów wskazanych przez stronę i style, nie pomiar transferu konkretnej wizyty. Logo wyświetla się w niewielkim rozmiarze, więc przygotowanie mniejszego wariantu jest uzasadnione. Przed usuwaniem dużych plików trzeba odróżnić oryginały archiwalne od wersji do wyświetlania.

Cele wydajnościowe do późniejszego pomiaru: LCP do 2,5 s, INP do 200 ms i CLS do 0,1, oceniane w 75. percentylu osobno dla urządzeń mobilnych i komputerów. To progi opisane przez web.dev, nie zmierzone wyniki tej strony. Test laboratoryjny nie zastępuje danych od rzeczywistych odbiorców. [8]

Przegląd dostępności powinien objąć rozwijane menu, wyszukiwarkę, suwaki mapy, powiększanie obrazów, widoczność fokusu, kontrast i powiększenie tekstu. WCAG 2.2 określa m.in. minimalny cel wskazania 24 × 24 CSS px z wyjątkami oraz alternatywę dla operacji wymagających przeciągania. Wdrożenie wygodniejszych większych przycisków jest dobrą decyzją projektową, ale nie należy mylić jej z dosłownym brzmieniem kryterium. Nie wydano oceny zgodności całej strony z WCAG. [9]

Lokalna kontrola wykazała znacznik Article w 9 z 15 stron artykułowych. Warto ujednolicić opis autora, tytułu, obrazu i rzeczywistych dat. Google dokumentuje Article jako sposób przekazywania informacji o artykule; samo dodanie go nie gwarantuje rozszerzonego wyniku. [10]

Wspólny JSON-LD zawiera SearchAction. Google usunął widoczny sitelinks search box od 21 listopada 2024 r.; pozostawienie tego znacznika nie jest samo w sobie błędem ani powodem kary. Usunięcie go może uprościć szablon, lecz jest znacznie mniej pilne niż naprawienie wyszukiwarki. [11]

Konfiguracja lokalna przewiduje długie przechowywanie CSS, JS i obrazów w pamięci podręcznej. Przy późniejszych wdrożeniach trzeba zapewnić odświeżanie zmienionych plików, np. przez wersjonowanie nazw. Skuteczność tej konfiguracji zależy od serwera; nie została potwierdzona pomiarem nagłówków produkcyjnych. Przenoszenie serwisu do dużego frameworka nie rozwiąże opisanych problemów danych i redakcji.

## 10. Priorytety i warunki ukończenia

Priorytety oznaczają kolejność prac, nie oszacowanie terminu. Każdy etap powinien zakończyć się sprawdzalnym rezultatem.

| Priorytet | Działanie | Warunek ukończenia |
|---|---|---|
| P0 | Naprawić datowanie mapy | Wszystkie cztery punkty mają uzasadnione zakresy; test granic okresów nie ujawnia sprzeczności z opisami |
| P0 | Uporządkować indeks wyszukiwania | Jeden wynik na adres; oba opisy zamku dostępne po roku i tytule |
| P0 | Opisać pochodzenie map | Każda z 14 kart ma ustalone dane źródłowe albo wyraźnie opisany brak do uzupełnienia |
| P0 | Dopisać podstawę edycji tekstów źródłowych | Czytelnik potrafi ustalić, skąd pochodzi tekst i jak go opracowano |
| P1 | Przebudować pierwszą część głównej | Temat Lelowa i pierwszy konkretny materiał widoczne szybko również na telefonie |
| P1 | Ograniczyć dekoracyjne zasoby | Mały wariant logo i lżejsze tło; porównanie pomiarów przed i po |
| P1 | Zredagować powtarzające się treści | Każdy akapit głównych opracowań wnosi nowy fakt, argument lub objaśnienie |
| P1 | Rozdzielić wydarzenia i daty map | Kalendarium ma jasny zakres; typ wpisu nie budzi wątpliwości |
| P2 | Opublikować pilotaż kolekcji społecznej | Kilka rzeczywistych materiałów opisanych według jednego wzorca |
| P2 | Ujednolicić dane opisowe artykułów | Autor, daty i opis strony są spójne w widoku oraz danych strukturalnych |

Zaobserwowany stan publiczny różni się od lokalnego. Przed publikacją zmian trzeba przeprowadzić kontrolę finalnej wersji, a po wdrożeniu sprawdzić działające adresy, przekierowania i zasoby. Niniejsze wnioski nie stanowią potwierdzenia, że lokalne poprawki zostały opublikowane.

## 11. Czego obecnie nie dodawać

Nie rekomenduje się na tym etapie kont użytkowników, rozbudowanego systemu komentarzy, chatbota, automatycznych streszczeń wszystkich artykułów ani pełnej rekonstrukcji 3D jako głównego projektu technicznego. Są to funkcje wymagające dodatkowej obsługi, a nie usuwające obecnych problemów z odnajdywaniem i dokumentowaniem wiedzy.

Newsletter ma sens dopiero wtedy, gdy istnieje rytm publikacji i realna potrzeba powiadomień. Wcześniej wystarczy lista aktualizacji, a później prosty kanał RSS. Wsparcie finansowe powinno pokazywać konkretny cel i aktualny stan projektu; nie musi być najbardziej kontrastowym elementem nawigacji, zanim czytelnik zobaczy wartość zbiorów.

Nie usuwać archiwalnych oryginałów w ramach optymalizacji strony. Przygotować małe wersje do przeglądania, zachowując osobno pliki źródłowe. Nie zmieniać masowo adresów artykułów dla samego uporządkowania menu. Nie ogłaszać naukowej weryfikacji tam, gdzie odbyła się tylko kontrola techniczna.

## 12. Ocena powodzenia po zmianach

Najpierw warto przeprowadzić test z kilkoma osobami reprezentującymi różne potrzeby. Zadania: znaleźć opis zamku z 1629 r., ustalić źródło jednej mapy, rozpoznać obiekt nieistniejący współcześnie i znaleźć sposób przekazania starej fotografii. Zapisywać powodzenie, potrzebę podpowiedzi i miejsca pomyłek. Niewielka próba pomoże wykryć przeszkody, lecz nie będzie reprezentatywnym badaniem całej publiczności.

Wskaźniki redakcyjne są na początek ważniejsze niż liczba nowych podstron: odsetek map z pełnym pochodzeniem, liczba materiałów pominiętych w wyszukiwaniu, zgodność datowania między mapą i tekstem, liczba rzeczywiście opracowanych obiektów społecznych. Po uzyskaniu danych o ruchu można badać zapytania, wejścia do kolekcji i przejścia od artykułów do źródeł. Bez punktu odniesienia nie należy obiecywać procentowego wzrostu odwiedzin.

Najważniejszą decyzją jest przeznaczenie najbliższego wysiłku na **małe, spójne archiwum, któremu można zaufać i w którym łatwo znaleźć materiał**. Osobisty charakter strony pozostaje atutem, kiedy autor pokazuje własną pracę, jej podstawę i granice pewności.

## Źródła

Źródła internetowe sprawdzane 13 września 2026 r. Brak wskazanej daty publikacji oznacza, że nie ustalono jej na podstawie dostępnego odczytu. Materiały instytucjonalne są wzorcami i źródłami wskazanych twierdzeń, a nie dowodem skuteczności proponowanych zmian na szymonrokicki.pl.

1. Ośrodek „Brama Grodzka – Teatr NN”, [Mapy](https://teatrnn.pl/miejsca/mapy), bez ustalonej daty. Opis powiązań historycznych map z miejscami, osobami i źródłami. Wykorzystano treść udostępnioną w indeksie wyszukiwania; ponowne bezpośrednie pobranie zwróciło błąd.
2. Muzeum Historii Żydów Polskich POLIN, Wirtualny Sztetl, [Lelów — Historia społeczności](https://sztetl.org.pl/pl/miejscowosci/l/442-lelow/99-historia-spolecznosci/137573-historia-spolecznosci), bez ustalonej daty. Zakres historii społeczności, bibliografia i prezentacja weryfikacji.
3. Polona/Labs, [Tworzenie cyfrowych kolekcji: Jak zaprezentować zdigitalizowane zbiory](https://labs.polona.pl/2024/12/tworzenie-cyfrowych-kolekcji-jak-zaprezentowac-zdigitalizowane-zbiory/), grudzień 2024. Opisy obiektów i kontekst kolekcji. Wykorzystano treść indeksowaną; bezpośrednie ponowne pobranie nie powiodło się.
4. Centrum Archiwistyki Społecznej, [Zbiory Społeczne](https://cas.org.pl/zbiory-spoleczne/) oraz [Archiwistyka społeczna w pigułce](https://cas.org.pl/archiwistyka-spoleczna-w-pigulce-czyli-materialy-edukacyjne-cas/), bez ustalonej daty. Model gromadzenia i opisu materiałów. Wykorzystano treść indeksowaną; bezpośrednie pobranie pierwszej strony zwróciło 403.
5. Zbigniew Bryła, Gmina Lelów, [Historia](https://www.lelow.pl/kategorie/historialelowa), bez ustalonej daty. Syntetyczna historia miejscowości i tropy do dalszej kwerendy.
6. Instytut Historii PAN, Słownik historyczno-geograficzny ziem polskich w średniowieczu, [hasło dotyczące zamku i starostwa lelowskiego](https://www.slownik.ihpan.edu.pl/search.php?id=8975), zwłaszcza część 3a i przypis o opisach zamku. Informacje o zachowanych opisach i ich edycjach.
7. Google Search Central, [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), dokumentacja bieżąca. Oryginalny wkład, wiarygodność i autorstwo.
8. Philip Walton, web.dev, [Web Vitals](https://web.dev/articles/vitals), publikacja 4.05.2020, aktualizacja wskazana na stronie 31.10.2024. Progi i interpretacja pomiarów.
9. W3C, [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) oraz [Understanding Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum). Kryteria rozmiaru celów i alternatyw dla przeciągania.
10. Google Search Central, [Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article), dokumentacja bieżąca. Właściwości opisujące artykuł.
11. John Mueller, Google Search Central, [Farewell, Sitelinks Search Box](https://developers.google.com/search/blog/2024/10/sitelinks-search-box), 21.10.2024. Wycofanie elementu wyszukiwarki w wynikach od 21.11.2024 i brak konieczności pilnego usuwania znacznika.

## Materiał lokalny i dowody

Ścieżki wskazują pliki w kopii roboczej ocenionej w dniu analizy. Nie są numerami wersji ani identyfikatorami publikacji.

- **L1 — wyszukiwanie:** `szukaj/index.html`. Zliczenie atrybutów `data-search-item`: 26 kart i 20 adresów. Testy w podglądzie lokalnym: „zamek” → cztery karty, dwie do tego samego artykułu; „1629” → zero wyników. Porównanie adresów 15 stron artykułowych z indeksem wykazało brak opisów zamku z 1629 i 1792 r.
- **L2 — mapa:** `historia-lelowa/mapa-interaktywna/index.html`, `assets/js/public/maps.js`. Cztery punkty. Brama ma `data-marker-century-start="10"` i koniec `21`. Test X–X pozostawił ją aktywną; jej dymek określa budowę na XIV wiek i rozbiórkę na XIX.
- **L3 — galeria:** `historia-lelowa/galeria-map/index.html`. 14 elementów `map-gallery-card`, 14 pól źródłowych „Archiwum map strony”. Miniatury, WebP i opóźnione ładowanie obecne w HTML.
- **L4 — artykuły:** `artykul/zamek-lelowski/index.html`, `artykul/zamek-lelowski-1629/index.html`, strona opisu z 1792 r. uwzględniona w inwentaryzacji. Ocena powtórzeń dotyczy tekstu ogólnego o zamku; ocena skróconego zapisu podstawy źródłowej dotyczy strony z 1629 r. Nie wykonano kolacjonowania transkrypcji z rękopisem ani recenzji zawartości lokalnego PDF.
- **L5 — kalendarium:** `historia-lelowa/kalendarium/index.html`. Przegląd wpisów wydarzeń i map.
- **L6 — lokalna główna:** `index.html`, `assets/css/public/40-homepage.css`. Obserwacja przy 390 × 844 px potwierdziła dominację pierwszego ekranu. Nie przeprowadzono pomiaru efektów tej kompozycji na odbiorcach.
- **L7 — autor i projekty:** `o-mnie/index.html`, `projekty/index.html`, `artykul/mowimy-po-swojemu/index.html`. Istniejąca prezentacja zainteresowań, projektów i fragmenty ukryte w komentarzu.
- **L8 — technika i publikacja:** `README.md`, `package.json`, `tools/check-site.mjs`, `assets/js/public.js`, arkusze CSS, `.htaccess`, rozmiary lokalnych obrazów. `npm run check` zakończone komunikatem „Kontrola strony OK: 33 plików HTML”. Osobna obserwacja [publicznej strony głównej](https://szymonrokicki.pl/) wykazała brak lokalnej sekcji polecanych tekstów i odmienne menu. Nie kontrolowano wszystkich publicznych podstron ani nagłówków produkcyjnego serwera.
