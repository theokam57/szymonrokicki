import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const site = "https://szymonrokicki.pl";
const modified = "2026-08-21";

const personId = `${site}/#szymon-rokicki`;
const websiteId = `${site}/#website`;

const articleOrder = [
  "lokacja-miasta-na-prawie-magdeburskim",
  "stary-lelow",
  "zamek-lelowski",
  "mury-miejskie-lelowa",
  "rynek-w-lelowie",
  "dawne-szlaki-lelowa",
  "mowimy-po-swojemu",
];

const articles = {
  "lokacja-miasta-na-prawie-magdeburskim": {
    slug: "lokacja-miasta-na-prawie-magdeburskim",
    title: "Lokacja Lelowa: prawo magdeburskie, Stary Lelów i układ miasta | Szymon Rokicki",
    h1: "Lokacja Lelowa na prawie magdeburskim",
    eyebrow: "Średniowieczny Lelów",
    description:
      "Jak lokacja Lelowa na prawie magdeburskim zmieniła starszą osadę w miasto królewskie z rynkiem, prawem, handlem i obroną.",
    lead:
      "Lokacja Lelowa była przełomem, ponieważ przeniosła starszy ośrodek ze Staromieścia w uporządkowany model miasta królewskiego: z rynkiem, prawem, wójtem, handlem i zapleczem obronnym.",
    datePublished: "2026-07-01",
    readingTime: "7 min czytania",
    articleSection: "Średniowieczny Lelów",
    keywords: [
      "lokacja Lelowa",
      "prawo magdeburskie",
      "Stary Lelów",
      "Kazimierz Wielki",
      "układ miasta",
      "miasto królewskie",
    ],
    image: "/assets/mapy/mapa-lelow-1792.jpg",
    imageAlt: "Lelów i okolice na mapie z 1792 roku",
    imageCaption:
      "Mapa Lelowa z 1792 roku pomaga czytać późniejszy układ miasta przez pryzmat starszych dróg, rynku i zaplecza osadniczego.",
    summary: [
      "Lokacja z lat 1340/41 nie stworzyła Lelowa od zera, tylko nadała starszemu ośrodkowi nową formę prawną i przestrzenną.",
      "Prawo magdeburskie porządkowało samorząd, sądownictwo, handel, obowiązki mieszczan i rolę wójta.",
      "Nowy układ miasta skupiał się wokół rynku, ulic, bram, kościoła, zamku i zaplecza gospodarczego.",
      "Najważniejszy kontekst to relacja między Starym Lelowem, miastem lokacyjnym i polityką Kazimierza Wielkiego.",
    ],
    body: [
      {
        heading: "Co właściwie oznaczała lokacja",
        paragraphs: [
          'Lokacja Lelowa na prawie magdeburskim była jednym z najważniejszych momentów w historii miejscowości. Nie oznaczała powstania osady z niczego, lecz przeorganizowanie wcześniejszego ośrodka i nadanie mu nowego, miejskiego porządku. W tle tej zmiany znajduje się <a href="/artykul/stary-lelow/">Stary Lelów</a>, dzisiejsze Staromieście, znane ze źródeł już od 1193 roku.',
          "Prawo magdeburskie było średniowiecznym modelem organizacji miasta. Określało samorząd, sądownictwo, obowiązki mieszkańców, zasady handlu i rolę wójta. Dla Lelowa oznaczało to wejście w sieć miast królewskich, które miały żyć z lokalnego zaplecza, obsługiwać handel, zabezpieczać drogi i wzmacniać administrację monarchy.",
        ],
      },
      {
        heading: "Od Starego Lelowa do miasta lokacyjnego",
        paragraphs: [
          'Najstarszy Lelów wiąże się ze Staromieściem, targiem, karczmą i wcześniejszą organizacją osadniczą. W latach 1340/41, z inicjatywy Kazimierza Wielkiego, ciężar ośrodka został przeniesiony do nowego układu miejskiego. Ta translokacja była ruchem praktycznym: pozwalała zaplanować <a href="/artykul/rynek-w-lelowie/">rynek</a>, ulice, działki, obronę i zaplecze gospodarcze w bardziej uporządkowany sposób.',
          "Pierwszym wójtem Lelowa miał zostać Wisław. Funkcja wójta była kluczowa, bo lokacja nie była tylko aktem symbolicznym. Trzeba było rozmierzyć przestrzeń, przyciągnąć osadników, zorganizować prawo, pobór opłat i relacje z władzą królewską. Miasto lokacyjne było więc projektem prawnym, gospodarczym i urbanistycznym naraz.",
        ],
      },
      {
        heading: "Układ miasta: rynek, bramy i zamek",
        paragraphs: [
          'Centralnym punktem nowego Lelowa stał się rynek. Wokół niego skupiała się zabudowa mieszczańska, handel i codzienna administracja. W takim układzie ważne były także drogi wychodzące z miasta, <a href="/artykul/mury-miejskie-lelowa/">mury miejskie</a>, kościół oraz <a href="/artykul/zamek-lelowski/">zamek w Lelowie</a>. Każdy z tych elementów pełnił osobną funkcję, ale dopiero razem tworzyły miasto w sensie średniowiecznym.',
          "Lelów rozwijał się jako miasto królewskie. Oznaczało to bezpośredni związek z polityką monarchy i jego administracją. Królewskie przywileje, zamek, obwarowania i położenie komunikacyjne wzmacniały znaczenie miejscowości. Od końca XIV wieku Lelów pojawia się również jako ważny ośrodek powiatowy dawnego województwa krakowskiego.",
        ],
      },
      {
        heading: "Dlaczego lokacja była przełomem",
        paragraphs: [
          "Przed lokacją istniał ośrodek o starszej metryce, ale dopiero prawo miejskie i nowy układ przestrzenny nadały mu ramy trwałego miasta. Lokacja stworzyła mechanizm rozwoju: rynek, działki, samorząd, sądownictwo, handel i obronę. Dzięki temu Lelów mógł stać się czymś więcej niż lokalną osadą - stał się punktem administracyjnym i gospodarczym regionu.",
          "Dziś wiele elementów tego układu trzeba odtwarzać z map, wykopalisk i źródeł pisanych. To właśnie czyni temat ciekawym: lokacja nie jest tylko datą, ale kluczem do czytania całej przestrzeni Lelowa.",
        ],
      },
    ],
    note:
      "Najważniejsze pytanie badawcze brzmi nie tylko: kiedy lokowano Lelów, ale jak daleko nowy układ miejski odciął się od wcześniejszego Staromieścia i które funkcje przejął po starszym ośrodku.",
    references: [
      '<span class="reference-type">książka</span>, <strong>Jacek Laberschek</strong>, 2018, <em>Dzieje średniowiecznego Lelowa</em>, Kraków, KONTUR, ISBN: 978-83-65334-27-5.',
      '<span class="reference-type">online</span>, <strong>Gmina Lelów</strong>, <em>Historia</em>, <a href="https://www.lelow.pl/kategorie/historialelowa" target="_blank" rel="noopener noreferrer">lelow.pl</a>, dostęp: 26.07.2026.',
      '<span class="reference-type">online</span>, <strong>Instytut Historii PAN</strong>, <em>Słownik historyczno-geograficzny ziem polskich w średniowieczu: Lelów</em>, <a href="https://www.slownik.ihpan.edu.pl/search.php?id=8974" target="_blank" rel="noopener noreferrer">slownik.ihpan.edu.pl</a>, dostęp: 26.07.2026.',
      '<span class="reference-type">online</span>, <strong>Wirtualny Sztetl</strong>, <em>Lelów - historia miejscowości</em>, <a href="https://sztetl.org.pl/pl/miejscowosci/l/442-lelow/96-historia-miejscowosci/69023-historia-miejscowosci" target="_blank" rel="noopener noreferrer">sztetl.org.pl</a>, dostęp: 26.07.2026.',
    ],
    related: ["stary-lelow", "rynek-w-lelowie", "zamek-lelowski", "mury-miejskie-lelowa"],
  },
  "stary-lelow": {
    slug: "stary-lelow",
    title: "Stary Lelów: Staromieście, najstarsza wzmianka i początki miasta | Szymon Rokicki",
    h1: "Stary Lelów",
    eyebrow: "Przedlokacyjny Lelów",
    description:
      "Stary Lelów i Staromieście: najstarsza wzmianka z 1193 roku, targ, karczma, archeologia i związek z późniejszą lokacją miasta.",
    lead:
      "Stary Lelów to klucz do początków miejscowości: zanim powstało miasto lokacyjne, w rejonie Staromieścia działał starszy ośrodek z targiem, karczmą i zapleczem osadniczym.",
    datePublished: "2026-07-26",
    readingTime: "7 min czytania",
    articleSection: "Przedlokacyjny Lelów",
    keywords: ["Stary Lelów", "Staromieście", "przedlokacyjny Lelów", "1193", "targ", "archeologia Lelowa"],
    image: "/assets/mapy/mapa-lelow-1787.jpg",
    imageAlt: "Lelów i okolice na mapie z 1787 roku",
    imageCaption:
      "Dawne mapy pozwalają porównywać relację Staromieścia, nowego miasta lokacyjnego i późniejszych dróg wokół Lelowa.",
    summary: [
      "Najstarsza wzmianka z 1193 roku wskazuje na zorganizowany ośrodek, a nie na przypadkową osadę.",
      "Staromieście wiąże się z wcześniejszym Lelowem, targiem, karczmą i lokalnym ruchem handlowym.",
      "Lokacja z XIV wieku przeniosła ciężar funkcji miejskich do nowego układu, ale nie wymazała starszej pamięci miejsca.",
      "Najważniejsze pytania wymagają łączenia źródeł pisanych, archeologii, dawnych dróg i cieków wodnych.",
    ],
    body: [
      {
        heading: "Najstarszy punkt opowieści",
        paragraphs: [
          "Stary Lelów, utożsamiany z dzisiejszym Staromieściem, jest jednym z najważniejszych punktów wyjścia do historii całej miejscowości. Najstarsza wzmianka z 1193 roku pokazuje, że nie mówimy o pustym miejscu, lecz o zorganizowanej osadzie z funkcjami gospodarczymi. Źródła wspominają targi i karczmę, a więc elementy związane z ruchem, handlem i obsługą przybyszów.",
          'To ważne przesunięcie perspektywy: Lelów nie zaczyna się dopiero w momencie <a href="/artykul/lokacja-miasta-na-prawie-magdeburskim/">lokacji miasta</a> w XIV wieku. Lokacja była przeorganizowaniem wcześniejszej przestrzeni, a nie stworzeniem historii od zera. Właśnie dlatego nazwy takie jak Stary Lelów, Staromieście czy <em>Antiqua Civitas Lelow</em> są tak cenne.',
        ],
      },
      {
        heading: "Przedlokacyjny ośrodek",
        paragraphs: [
          "W Staromieściu funkcjonował ważny punkt osadniczy, religijny i gospodarczy. Badacze zwracają uwagę na rolę kościoła, bliskość wody oraz dogodne warunki obronne i komunikacyjne. Jeżeli w 1193 roku źródło notuje karczmę i targ, można przypuszczać, że zaplecze osadnicze musiało kształtować się wcześniej, choć brak starszych dokumentów nie pozwala tego łatwo opisać.",
          'Archeologia jest tu szczególnie potrzebna. Dokumenty zachowują tylko ułamek rzeczywistości, zwłaszcza dla XII i XIII wieku. Badania przedlokacyjnego Lelowa mogą odpowiedzieć na pytania o zasięg osady, charakter zabudowy, relacje z <a href="/artykul/dawne-szlaki-lelowa/">dawnymi drogami</a> oraz moment, w którym ciężar życia przeniósł się do nowego miasta.',
        ],
      },
      {
        heading: "Translokacja i podwójna pamięć",
        paragraphs: [
          "W latach 1340/41, za Kazimierza Wielkiego, nastąpiła lokacja Lelowa w nowym układzie miejskim. Starszy ośrodek nie zniknął jednak z pamięci. Stał się punktem odniesienia: miejscem wcześniejszym, od którego odróżniano nowy Lelów. Ta dwoistość jest jedną z najciekawszych cech lokalnej historii.",
          'W praktyce oznacza to, że historię Lelowa trzeba czytać podwójnie: przez Staromieście i przez lokacyjne centrum z <a href="/artykul/rynek-w-lelowie/">rynkiem</a>. Dopiero porównanie tych dwóch punktów pokazuje, jak zmieniała się logika osadnictwa, handlu i władzy w okolicy.',
        ],
      },
    ],
    note:
      "Dalsza praca nad tematem powinna łączyć źródła pisane, archeologię Staromieścia oraz analizę dawnych dróg i cieków wodnych.",
    references: [
      '<span class="reference-type">online</span>, <strong>Instytut Historii PAN</strong>, <em>Słownik historyczno-geograficzny ziem polskich w średniowieczu: Lelów - Staromieście</em>, <a href="https://www.slownik.ihpan.edu.pl/search.php?id=8979" target="_blank" rel="noopener noreferrer">slownik.ihpan.edu.pl</a>, dostęp: 26.07.2026.',
      '<span class="reference-type">online</span>, <strong>Uniwersytet Łódzki</strong>, <em>Przedlokacyjny Lelów</em>, <a href="https://www.archeologia.uni.lodz.pl/badania/projekty-badawcze/przedlokacyjny-lelow" target="_blank" rel="noopener noreferrer">archeologia.uni.lodz.pl</a>, dostęp: 26.07.2026.',
      '<span class="reference-type">online</span>, <strong>Gmina Lelów</strong>, <em>Badania archeologiczne w Staromieściu</em>, <a href="https://www.lelow.pl/aktualnosci/1429" target="_blank" rel="noopener noreferrer">lelow.pl</a>, dostęp: 26.07.2026.',
    ],
    related: ["lokacja-miasta-na-prawie-magdeburskim", "dawne-szlaki-lelowa", "rynek-w-lelowie"],
  },
  "zamek-lelowski": {
    slug: "zamek-lelowski",
    title: "Zamek w Lelowie: historia, położenie i źródła | Szymon Rokicki",
    h1: "Zamek w Lelowie",
    eyebrow: "Zamek lelowski",
    description:
      "Zamek w Lelowie: historia królewskiej warowni, prawdopodobne położenie, funkcje starostwa, rozbiórka w XIX wieku i źródła.",
    lead:
      "Zamek w Lelowie był królewskim punktem kontroli, administracji i obrony; choć jego mury nie dominują już w krajobrazie, źródła i układ terenu pozwalają czytać go jako jeden z kluczy do średniowiecznego miasta.",
    datePublished: "2026-07-26",
    readingTime: "7 min czytania",
    articleSection: "Zamek i starostwo",
    keywords: ["zamek w Lelowie", "zamek lelowski", "starostwo lelowskie", "castrum in Lelow", "Kazimierz Wielki"],
    image: "/assets/images/lelowzamek.jpg",
    imageAlt: "Widok miejsca kojarzonego z dawnym zamkiem w Lelowie",
    imageCaption:
      "Miejsce dawnego zamku wymaga dziś czytania przez źródła, rekonstrukcje i porównanie z układem miasta.",
    summary: [
      "Zamek łączy historię wcześniejszego grodu z rozwojem królewskiego miasta Kazimierza Wielkiego.",
      "Warownia pełniła funkcje obronne, administracyjne, gospodarcze i symboliczne.",
      "Najważniejsze ślady trzeba dziś odtwarzać przez źródła pisane, mapy, teren i lokalną pamięć.",
      "Rozbiórkę zamku lokalne opracowania wiążą z latami 1804-1805.",
    ],
    body: [
      {
        heading: "Dlaczego zamek jest tak ważny",
        paragraphs: [
          'Zamek lelowski najlepiej traktować jako punkt, w którym spotykają się dwie historie: wcześniejszego grodu oraz królewskiego miasta Kazimierza Wielkiego. W źródłach pojawia się już trzynastowieczny <em>castrum in Lelow</em>, a późniejsza tradycja łączy wzmocnienie i przebudowę tego miejsca z polityką ostatniego Piasta. Warownia nie była więc ozdobą na marginesie miasta, lecz częścią większego układu obronnego i administracyjnego.',
          'Położenie zamku miało znaczenie praktyczne. Wzniesienie, woda i bliskość <a href="/artykul/dawne-szlaki-lelowa/">szlaków</a> dawały kontrolę nad ruchem ludzi, towarów i informacji. Lelów leżał na ważnym pograniczu dawnych układów osadniczych Małopolski, dlatego obiekt obronny wzmacniał nie tylko samo miasto, ale również królewską obecność w regionie.',
        ],
      },
      {
        heading: "Funkcja królewska i starościńska",
        paragraphs: [
          'W XIV wieku Lelów stał się ośrodkiem miejskim i administracyjnym, a zamek można czytać jako zaplecze tej zmiany. W pobliżu zamku funkcjonowały młyny, drogi i zabudowa związana z obsługą miasta. Słownik historyczno-geograficzny notuje dla zamku i starostwa szereg wzmianek, pokazujących, że nie był to punkt jednorazowej inwestycji, lecz miejsce stale obecne w dokumentach późnego średniowiecza.',
          'Zamek pełnił prawdopodobnie kilka funkcji naraz: militarną, urzędową, gospodarczą i reprezentacyjną. To ważne, bo w małym mieście królewska warownia była widzialnym znakiem władzy. Razem z <a href="/artykul/mury-miejskie-lelowa/">murami miejskimi</a> i rynkiem tworzyła układ, w którym obrona, handel i administracja wzajemnie się wzmacniały.',
        ],
      },
      {
        heading: "Zniknięcie z krajobrazu",
        paragraphs: [
          "Według lokalnych opracowań zamek został rozebrany w latach 1804-1805. Dziś w miejscu kojarzonym z dawną warownią znajduje się cmentarz, dlatego o zamku mówi się bardziej przez źródła, rekonstrukcje i układ terenu niż przez zachowane mury. To nie osłabia jego znaczenia; przeciwnie, pokazuje jak mocno historia Lelowa wymaga pracy z mapą, tekstem i pamięcią miejsca.",
          'Dla czytelnika najważniejsza jest ostrożność: zamek w Lelowie nie jest łatwym zabytkiem do „obejrzenia”, ale jest świetnym tematem do porównywania źródeł, dawnych map i hipotez. Dlatego warto zestawiać ten tekst z <a href="/mapy-lelowa/">mapami Lelowa</a> oraz z opisem lokacji miasta.',
        ],
      },
    ],
    note:
      "Dokładne granice zamku i jego fazy wymagają dalszej kwerendy archeologicznej oraz porównania planów historycznych. Ten tekst porządkuje najważniejsze informacje i wskazuje dalsze pytania.",
    references: [
      '<span class="reference-type">online</span>, <strong>Instytut Historii PAN</strong>, <em>Słownik historyczno-geograficzny ziem polskich w średniowieczu: Lelów - zamek i starostwo</em>, <a href="https://www.slownik.ihpan.edu.pl/search.php?id=8975" target="_blank" rel="noopener noreferrer">slownik.ihpan.edu.pl</a>, dostęp: 26.07.2026.',
      '<span class="reference-type">online</span>, <strong>Gmina Lelów</strong>, <em>Historia</em>, <a href="https://www.lelow.pl/kategorie/historialelowa" target="_blank" rel="noopener noreferrer">lelow.pl</a>, dostęp: 26.07.2026.',
      '<span class="reference-type">online</span>, <strong>Strażnicy Czasu</strong>, <em>Zamek Lelowski</em>, <a href="https://www.straznicyczasu.pl/viewtopic.php?t=5278" target="_blank" rel="noopener noreferrer">straznicyczasu.pl</a>, dostęp: 26.07.2026.',
    ],
    related: ["lokacja-miasta-na-prawie-magdeburskim", "mury-miejskie-lelowa", "rynek-w-lelowie"],
  },
  "mury-miejskie-lelowa": {
    slug: "mury-miejskie-lelowa",
    title: "Mury miejskie Lelowa: Brama Nakielska, obwód i archeologia | Szymon Rokicki",
    h1: "Mury miejskie Lelowa",
    eyebrow: "Fortyfikacje Lelowa",
    description:
      "Mury miejskie Lelowa, Brama Nakielska i odkrycia archeologiczne: jak obwarowania porządkowały średniowieczne miasto.",
    lead:
      "Mury miejskie Lelowa wyznaczały granicę prawa, bezpieczeństwa i handlu; ich relikty, zwłaszcza Brama Nakielska, pomagają odtworzyć skalę średniowiecznego miasta.",
    datePublished: "2026-07-26",
    readingTime: "6 min czytania",
    articleSection: "Fortyfikacje",
    keywords: ["mury miejskie Lelowa", "Brama Nakielska", "fortyfikacje Lelowa", "archeologia Lelowa", "Kazimierz Wielki"],
    image: "/assets/images/proba-rekonstrucji-lelow-sr.jpg",
    imageAlt: "Próba rekonstrukcji dawnego Lelowa",
    imageCaption:
      "Rekonstrukcyjne spojrzenie na Lelów ułatwia zrozumienie relacji między bramami, rynkiem i obronnym obwodem miasta.",
    summary: [
      "Obwarowania oddzielały centrum miejskie od przedmieść i porządkowały ruch przez bramy.",
      "Brama Nakielska jest najważniejszym materialnym tropem dawnych fortyfikacji.",
      "Mury trzeba analizować razem z rynkiem, zamkiem, drogami i problemem podmokłego terenu.",
      "Dzisiejszy krajobraz wymaga odtwarzania obwodu przez archeologię, mapy i układ ulic.",
    ],
    body: [
      {
        heading: "Po co miastu były mury",
        paragraphs: [
          "Średniowieczne mury Lelowa były czymś więcej niż linią kamienia. W mieście lokowanym na prawie magdeburskim wyznaczały obszar prawa, bezpieczeństwa i gospodarki. Oddzielały centrum miejskie od przedmieść, porządkowały bramy, ruch towarów i obronę. Według lokalnych przekazów zgodę na budowę obwarowań wiąże się z panowaniem Kazimierza Wielkiego i rokiem 1354.",
          'Powierzchnia miasta zamknięta murami była niewielka, ale dobrze zorganizowana. Późniejsze pomiary przywoływane w opracowaniach lokalnych wskazują około 7,5 ha przestrzeni objętej dawnym obwodem miejskim. W takiej skali każdy element miał znaczenie: <a href="/artykul/rynek-w-lelowie/">rynek</a>, kościół, <a href="/artykul/zamek-lelowski/">zamek</a>, bramy, ulice i zaplecze gospodarcze musiały tworzyć spójny układ.',
        ],
      },
      {
        heading: "Brama Nakielska",
        paragraphs: [
          "Najbardziej namacalnym śladem fortyfikacji jest odkrycie reliktów Bramy Nakielskiej podczas prac archeologicznych na rynku i przy drodze krajowej nr 46. Fundamenty pozwoliły badaczom określić, że brama była kamienna, połączona z murami obronnymi i miała około 18,5 m długości od wejścia do wyjścia. Porównywano ją do bram typu krakowskiego znanych z innych miast dawnej Małopolski.",
          'Brama była punktem kontroli i zarazem wizytówką miasta. Tędy wchodził handel, przybysze, wiadomości i zagrożenia. Dlatego mury warto badać razem ze <a href="/artykul/dawne-szlaki-lelowa/">szlakami</a>, rynkiem oraz zamkiem, a nie jako osobny zabytek oderwany od życia miasta.',
        ],
      },
      {
        heading: "Miasto, które straciło obwód",
        paragraphs: [
          "Dziś obwarowania nie dominują już w krajobrazie Lelowa. Ich obecność trzeba odtwarzać przez wykopaliska, dawne mapy i układ ulic. To czyni temat trudniejszym, ale ciekawszym: każdy ślad muru, bramy, fosy lub drewnianego pomostu pomaga zobaczyć Lelów jako miasto królewskie, a nie tylko współczesną miejscowość z długą pamięcią.",
          "Największą wartością tego tematu jest połączenie materialnego szczegółu z całą strukturą miasta. Jeden fragment bramy prowadzi do pytań o drogi, handel, kontrolę wjazdu, obronę i codzienne życie mieszczan.",
        ],
      },
    ],
    note:
      "Granice murów warto traktować jako rekonstrukcję roboczą: każdy nowy wykop, plan i opis może doprecyzować przebieg obwodu.",
    references: [
      '<span class="reference-type">online</span>, <strong>Gmina Lelów</strong>, <em>Historia</em>, <a href="https://www.lelow.pl/kategorie/historialelowa" target="_blank" rel="noopener noreferrer">lelow.pl</a>, dostęp: 26.07.2026.',
      '<span class="reference-type">online</span>, <strong>Instytut Historii PAN</strong>, <em>Słownik historyczno-geograficzny ziem polskich w średniowieczu: Lelów</em>, <a href="https://www.slownik.ihpan.edu.pl/search.php?id=8974" target="_blank" rel="noopener noreferrer">slownik.ihpan.edu.pl</a>, dostęp: 26.07.2026.',
      '<span class="reference-type">online</span>, <strong>PAP / dzieje.pl</strong>, <em>W Lelowie odkryto średniowieczną bramę i drewniany pomost</em>, <a href="https://dzieje.pl/content/w-lelowie-odkryto-%C5%9Bredniowieczn%C4%85-bram%C4%99-i-drewniany-pomost" target="_blank" rel="noopener noreferrer">dzieje.pl</a>, dostęp: 26.07.2026.',
    ],
    related: ["rynek-w-lelowie", "zamek-lelowski", "dawne-szlaki-lelowa"],
  },
  "rynek-w-lelowie": {
    slug: "rynek-w-lelowie",
    title: "Rynek w Lelowie: układ miasta, handel i archeologia | Szymon Rokicki",
    h1: "Rynek w Lelowie",
    eyebrow: "Centrum miasta lokacyjnego",
    description:
      "Rynek w Lelowie jako centrum miasta lokacyjnego: handel, układ ulic, archeologia, bruk, jatki i pamięć dawnej przestrzeni.",
    lead:
      "Rynek w Lelowie był centrum miasta lokacyjnego: miejscem handlu, administracji, spotkań i ruchem, od którego można odczytywać układ średniowiecznego Lelowa.",
    datePublished: "2026-07-26",
    readingTime: "6 min czytania",
    articleSection: "Urbanistyka",
    keywords: ["rynek w Lelowie", "Lelów rynek", "układ miasta", "archeologia rynku", "prawo magdeburskie"],
    image: "/assets/mapy/mapa-lelow-1792.jpg",
    imageAlt: "Lelów na mapie z 1792 roku z czytelnym układem dróg i centrum",
    imageCaption:
      "Mapy z końca XVIII wieku są użytecznym punktem odniesienia do analizy rynku, ulic i dawnych kierunków komunikacyjnych.",
    summary: [
      "Rynek był praktycznym narzędziem handlu i administracji, nie tylko reprezentacyjnym placem.",
      "Odkrycia archeologiczne odsłoniły bruk, relikty jatek, monety i ceramikę.",
      "Rynek warto zestawiać z bramami, zamkiem, drogami i lokacją na prawie magdeburskim.",
      "To najlepszy punkt startu do rozumienia układu dawnego Lelowa.",
    ],
    body: [
      {
        heading: "Rynek jako dokument przestrzenny",
        paragraphs: [
          'Rynek w Lelowie należy czytać jak dokument przestrzenny. Po <a href="/artykul/lokacja-miasta-na-prawie-magdeburskim/">lokacji miasta na prawie magdeburskim</a> był centrum nowego układu: od niego wychodziły ulice, przy nim koncentrował się handel, a wokół niego narastała zabudowa mieszczańska. Jeżeli zamek symbolizował władzę królewską, rynek pokazywał codzienną energię miasta.',
          "W średniowiecznym i nowożytnym mieście rynek nie był placem dekoracyjnym. Był narzędziem gospodarki. Tu zawierano transakcje, sprzedawano żywność i rzemiosło, wymieniano informacje, a podczas jarmarków i targów miasto otwierało się na okoliczne wsie oraz dalsze szlaki. W przypadku Lelowa znaczenie rynku wzmacniało położenie przy drodze i funkcja dawnego ośrodka powiatowego.",
        ],
      },
      {
        heading: "Co pokazała archeologia",
        paragraphs: [
          "Prace archeologiczne prowadzone w centrum Lelowa odsłoniły znaczną część dawnego rynku pokrytego drobnym brukiem kamiennym. Badacze natrafili także na relikty jatek, monety z różnych okresów oraz ceramikę. Te znaleziska są ważne, bo pokazują ciągłość użytkowania placu: od średniowiecza po czasy znacznie bliższe współczesności.",
          'Rynek przechowuje warstwy pamięci. Jedna dotyczy miasta lokacyjnego i prawa magdeburskiego, inna handlu nowożytnego, jeszcze inna wielokulturowego Lelowa. Dlatego opis rynku powinien łączyć urbanistykę z historią społeczną: pytaniem nie jest tylko, gdzie stała dana budowla, ale kto korzystał z tej przestrzeni i po co.',
        ],
      },
      {
        heading: "Punkt odniesienia dla całego miasta",
        paragraphs: [
          'Dla dalszych badań rynek może być osią porównania. Warto zestawiać go z dawnymi mapami, lokalizacją <a href="/artykul/mury-miejskie-lelowa/">bram i murów</a>, przebiegiem ulic oraz miejscem zamku. Dopiero wtedy widać, że Lelów nie był zbiorem luźnych punktów historycznych, ale zorganizowanym miastem o czytelnej logice.',
          'Jeżeli ktoś szuka odpowiedzi na pytanie „jak wyglądał dawny Lelów?”, rynek jest dobrym początkiem. Od niego prowadzą ścieżki do lokacji, zamku, szlaków, jatek, handlu i map, czyli do niemal wszystkich tematów składających się na historię miasta.',
        ],
      },
    ],
    note:
      "Rynek warto dokumentować warstwowo: osobno jako plac handlowy, osobno jako punkt archeologiczny i osobno jako oś całego układu lokacyjnego.",
    references: [
      '<span class="reference-type">online</span>, <strong>Gmina Lelów</strong>, <em>Historia</em>, <a href="https://www.lelow.pl/kategorie/historialelowa" target="_blank" rel="noopener noreferrer">lelow.pl</a>, dostęp: 26.07.2026.',
      '<span class="reference-type">online</span>, <strong>Instytut Historii PAN</strong>, <em>Słownik historyczno-geograficzny ziem polskich w średniowieczu: Lelów</em>, <a href="https://www.slownik.ihpan.edu.pl/search.php?id=8974" target="_blank" rel="noopener noreferrer">slownik.ihpan.edu.pl</a>, dostęp: 26.07.2026.',
      '<span class="reference-type">online</span>, <strong>PAP / dzieje.pl</strong>, <em>W Lelowie odkryto średniowieczną bramę i drewniany pomost</em>, <a href="https://dzieje.pl/content/w-lelowie-odkryto-%C5%9Bredniowieczn%C4%85-bram%C4%99-i-drewniany-pomost" target="_blank" rel="noopener noreferrer">dzieje.pl</a>, dostęp: 26.07.2026.',
    ],
    related: ["lokacja-miasta-na-prawie-magdeburskim", "mury-miejskie-lelowa", "dawne-szlaki-lelowa"],
  },
  "dawne-szlaki-lelowa": {
    slug: "dawne-szlaki-lelowa",
    title: "Dawne szlaki Lelowa: drogi, handel i średniowieczny trakt | Szymon Rokicki",
    h1: "Dawne szlaki Lelowa",
    eyebrow: "Drogi i handel",
    description:
      "Dawne szlaki Lelowa: drogi handlowe, cła, drewniany trakt, bramy miasta i znaczenie komunikacyjne średniowiecznego Lelowa.",
    lead:
      "Dawne szlaki Lelowa tłumaczą, dlaczego miejscowość mogła pełnić funkcje handlowe i administracyjne: drogi łączyły targ, bramy, rynek, zamek i zaplecze osadnicze.",
    datePublished: "2026-07-26",
    readingTime: "6 min czytania",
    articleSection: "Drogi i handel",
    keywords: ["dawne szlaki Lelowa", "drogi handlowe", "drewniany trakt", "Brama Nakielska", "średniowieczny Lelów"],
    image: "/assets/mapy/mapa-lelow-1914.jpg",
    imageAlt: "Lelów i okolice na mapie z 1914 roku",
    imageCaption:
      "Nawet późniejsze mapy pomagają uchwycić trwałość kierunków komunikacyjnych i relacji Lelowa z okolicą.",
    summary: [
      "Drogi były jednym z powodów znaczenia Lelowa, bo prowadziły ludzi, towary, opłaty i informacje.",
      "Źródła oraz archeologia wskazują na techniczne rozwiązania, takie jak drewniany trakt lub pomost.",
      "Szlaki trzeba badać razem z bramami, rynkiem, zamkiem i Starym Lelowem.",
      "Dzisiejszy układ dróg może przechowywać echo starszych przejść, choć nie należy go kopiować bez krytyki.",
    ],
    body: [
      {
        heading: "Miasto w sieci dróg",
        paragraphs: [
          'Dawny Lelów trudno zrozumieć bez dróg. Osada, a później miasto, funkcjonowała w sieci ruchu: lokalnego, handlowego, urzędowego i pielgrzymkowego. Szlak nie był tylko linią na mapie. Był powodem istnienia karczmy, targu, komory celnej, mostu, bramy i <a href="/artykul/rynek-w-lelowie/">rynku</a>.',
          "Źródła średniowieczne notują drogi prowadzące przez Lelów lub do Lelowa w kontekście ceł i uprawnień klasztornych. To pokazuje, że ruch przez tę przestrzeń miał wartość gospodarczą. Jeżeli pobierano opłaty, musiała istnieć trasa, którą realnie przemieszczali się ludzie i towary.",
        ],
      },
      {
        heading: "Droga w ziemi",
        paragraphs: [
          "Szczególnie ciekawe są odkrycia archeologiczne przy dzisiejszej drodze krajowej nr 46. Odsłonięto tam fragment drewnianego traktu, datowanego prawdopodobnie na XIV-XV wiek. Konstrukcja z gałęzi i dranic zachowała się dzięki warunkom beztlenowym i wilgotnemu podłożu. Taki ślad pokazuje, że dawne drogi bywały budowlami technicznymi, a nie tylko wydeptanymi pasami ziemi.",
          'Trakt, pomost i okolice bramy należy widzieć razem. Miasto musiało rozwiązywać problem wody, błota, fosy lub podmokłego terenu. Drewniana droga mogła być odpowiedzią na bardzo praktyczne pytanie: jak wprowadzić wozy, ludzi i towary do miasta bez grzęźnięcia w mokrym podłożu. To łączy temat szlaków z <a href="/artykul/mury-miejskie-lelowa/">murami miejskimi Lelowa</a>.',
        ],
      },
      {
        heading: "Szlaki jako pamięć układu",
        paragraphs: [
          'Współczesne drogi często zachowują echo starszych przejść, choć ich przebieg mógł się zmieniać. Dlatego przy badaniu Lelowa warto zestawiać mapy z różnych epok z reliktami archeologicznymi. Dawne szlaki mogą tłumaczyć położenie rynku, bram, <a href="/artykul/stary-lelow/">osad przedlokacyjnych</a> i późniejszych przedmieść.',
          "Najrozsądniejsza metoda to porównywanie: źródło pisane mówi o prawie, mapa pokazuje relację przestrzenną, a archeologia daje materialny ślad. Dopiero razem te trzy typy danych pozwalają odtworzyć komunikacyjną logikę dawnego Lelowa.",
        ],
      },
    ],
    note:
      "Szlaki komunikacyjne są hipotezą przestrzenną, którą najlepiej sprawdzać przez zestawienie map, źródeł pisanych i znalezisk archeologicznych.",
    references: [
      '<span class="reference-type">online</span>, <strong>Instytut Historii PAN</strong>, <em>Słownik historyczno-geograficzny ziem polskich w średniowieczu: Lelów - Staromieście</em>, <a href="https://www.slownik.ihpan.edu.pl/search.php?id=8979" target="_blank" rel="noopener noreferrer">slownik.ihpan.edu.pl</a>, dostęp: 26.07.2026.',
      '<span class="reference-type">online</span>, <strong>PAP / dzieje.pl</strong>, <em>W Lelowie odkryto średniowieczną bramę i drewniany pomost</em>, <a href="https://dzieje.pl/content/w-lelowie-odkryto-%C5%9Bredniowieczn%C4%85-bram%C4%99-i-drewniany-pomost" target="_blank" rel="noopener noreferrer">dzieje.pl</a>, dostęp: 26.07.2026.',
    ],
    related: ["rynek-w-lelowie", "mury-miejskie-lelowa", "stary-lelow"],
  },
  "mowimy-po-swojemu": {
    slug: "mowimy-po-swojemu",
    title: "Mówimy po swojemu: lokalna mowa, gwara i pamięć Lelowa | Szymon Rokicki",
    h1: "Mówimy po swojemu",
    eyebrow: "Projekt językowy",
    description:
      "Projekt Mówimy po swojemu zbiera lokalne słowa, gwarę, nazwy miejscowe, powiedzenia i pamięć językową mieszkańców Lelowa.",
    lead:
      "Mówimy po swojemu to projekt dokumentowania lokalnej mowy: słów, zwrotów, nazw miejscowych i opowieści, które przechowują codzienną pamięć Lelowa.",
    datePublished: "2026-07-26",
    readingTime: "4 min czytania",
    articleSection: "Dziedzictwo językowe",
    keywords: ["Mówimy po swojemu", "gwara Lelowa", "lokalna mowa", "regionalizmy", "pamięć językowa"],
    image: "/assets/images/drzeworyt/drzeworyt2.jpg",
    imageAlt: "Drzeworyt jako ilustracja projektu lokalnej pamięci",
    imageCaption:
      "Lokalna mowa jest częścią dziedzictwa równie ważną jak mapy, fotografie i dokumenty.",
    summary: [
      "Projekt ma zbierać słowa, powiedzenia, wymowę nazw miejscowych i krótkie opowieści.",
      "Nie chodzi o ocenianie poprawności, tylko o zapis żywej pamięci językowej.",
      "Każde hasło warto zapisywać z przykładem użycia, lokalizacją i informacją o źródle.",
      "Docelowo projekt może stać się słownikiem, mapą słów albo cyklem krótkich tekstów.",
    ],
    body: [
      {
        heading: "Dlaczego lokalna mowa ma znaczenie",
        paragraphs: [
          "„Mówimy po swojemu” to zalążek projektu poświęconego lokalnej mowie: gwarom, regionalizmom, powiedzeniom, nazwom miejscowym i codziennym słowom, które rzadko trafiają do oficjalnych opracowań. Takie słownictwo często znika po cichu, razem ze zmianą pokoleń i sposobów życia.",
          "Celem projektu jest stworzenie małego archiwum językowego. Nie chodzi o ocenianie, która forma jest „poprawniejsza”, lecz o zapisanie tego, jak ludzie rzeczywiście mówią i jak przez język opowiadają o miejscu. Gwara może przechować historię pracy, domu, kuchni, pól, rzemiosła i sąsiedzkich relacji.",
        ],
      },
      {
        heading: "Co można zbierać",
        list: [
          "lokalne słowa i ich znaczenia,",
          "wymowę nazw miejscowych, pól, dróg i części wsi,",
          "powiedzenia, przysłowia i krótkie anegdoty,",
          "wspomnienia o dawnych pracach, zwyczajach i świętach,",
          "różnice między mową starszych i młodszych mieszkańców.",
        ],
      },
      {
        heading: "Jak zapisywać hasła",
        paragraphs: [
          "Pierwszym etapem może być prosty formularz zgłoszeniowy albo seria rozmów z mieszkańcami. Każde hasło warto zapisywać z przykładem użycia, przybliżoną lokalizacją i informacją, czy słowo jest jeszcze żywe, czy znane głównie z pamięci rodzinnej.",
          'Projekt dobrze łączy się z częścią historyczną strony: nazwy pól, dróg i miejsc często prowadzą do dawnych funkcji przestrzeni. W ten sposób język może uzupełniać <a href="/mapy-lelowa/">mapy Lelowa</a>, historię osadnictwa i lokalną pamięć rodzin.',
        ],
      },
    ],
    note:
      "To robocza podstrona projektu. Może później rozrosnąć się w słownik, mapę słów albo cykl krótkich tekstów.",
    references: ['<span class="reference-type">notatka</span>, <strong>Szymon Rokicki</strong>, opis projektu własnego, 2026.'],
    related: ["stary-lelow", "dawne-szlaki-lelowa"],
  },
};

const glossaryTerms = [
  {
    term: "lokacja",
    definition:
      "akt prawny i organizacyjny, który nadawał osadzie miejski porządek: rynek, działki, samorząd, sądownictwo i reguły handlu.",
  },
  {
    term: "starostwo",
    definition:
      "królewska jednostka administracyjna zarządzana przez starostę; w Lelowie wiązała się między innymi z zamkiem i funkcjami urzędowymi.",
  },
  {
    term: "gród",
    definition:
      "umocniony ośrodek wcześniejszy niż miasto lokacyjne; mógł pełnić funkcje obronne, administracyjne i osadnicze.",
  },
  {
    term: "prawo magdeburskie",
    definition:
      "model prawa miejskiego określający samorząd, sądownictwo, obowiązki mieszkańców, handel i rolę wójta.",
  },
];

const deepSections = {
  "lokacja-miasta-na-prawie-magdeburskim": [
    {
      heading: "Co można rozpoznać w przestrzeni",
      paragraphs: [
        "Ślady lokacji nie zawsze są widoczne jako pojedynczy zabytek. Częściej układają się w relacje: rynek wobec dróg, możliwe bramy wobec kierunków wjazdu, zamek wobec centrum oraz starszy ośrodek wobec nowego miasta. Dlatego dobre opracowanie lokacji musi pracować nie tylko z datą, ale też z planem przestrzeni.",
        "Najcenniejsze są porównania kilku warstw naraz. Dokument mówi, że miasto otrzymało określony porządek prawny, mapa podpowiada trwałość układu, a archeologia pokazuje, które elementy rzeczywiście działały w terenie. Dopiero takie zestawienie pozwala uniknąć prostego przepisywania lokalnej legendy.",
      ],
    },
    {
      heading: "Co jest pewne, a co wymaga ostrożności",
      paragraphs: [
        "Pewne jest znaczenie przełomu lokacyjnego: od tego momentu Lelów funkcjonował jako miasto o wyraźnej roli administracyjnej i gospodarczej. Ostrożności wymaga natomiast precyzyjne odtworzenie wszystkich granic, pierwotnych działek i przebiegu poszczególnych ulic.",
        "Warto też uważać na pozornie proste mapowanie współczesnych ulic na średniowieczny układ. Dzisiejsza przestrzeń przechowuje dawne ślady, ale przez stulecia ulegała przebudowom, pożarom, zmianom własności i modernizacjom dróg.",
      ],
    },
  ],
  "stary-lelow": [
    {
      heading: "Dlaczego Staromieście jest tak ważne",
      paragraphs: [
        "Staromieście pozwala przesunąć początek opowieści o Lelowie przed XIV-wieczną lokację. To zmienia proporcje: miasto lokacyjne nie jest pierwszym aktem, lecz jednym z etapów dłuższego procesu osadniczego. Właśnie dlatego Stary Lelów powinien mieć osobne miejsce w każdej syntezie historii miejscowości.",
        "Wzmianki o targu i karczmie są szczególnie wymowne, bo wskazują na obsługę ruchu. Takie funkcje rzadko pojawiają się przypadkiem. Za nimi stoi zaplecze ludzi, dróg, wymiany i kontaktów z okolicą.",
      ],
    },
    {
      heading: "Jak badać miejsce bez nadmiaru dokumentów",
      paragraphs: [
        "Dla XII i XIII wieku źródła pisane są skąpe, dlatego większą wagę zyskuje archeologia i topografia. Trzeba pytać o wodę, wyniesienia, drogi, kościół, cmentarz i późniejsze nazwy terenowe. Każdy z tych elementów może dopowiadać coś, czego dokument nie zachował.",
        "Najlepsza metoda to cierpliwe łączenie słabych sygnałów. Pojedynczy trop może być niepewny, ale kilka zgodnych tropów zaczyna budować sensowną hipotezę o wcześniejszym ośrodku.",
      ],
    },
  ],
  "zamek-lelowski": [
    {
      heading: "Jak szukać zamku, którego prawie nie widać",
      paragraphs: [
        "Zamek w Lelowie jest tematem trudnym, bo nie działa jak zachowana ruina z tablicą i czytelnym murem. Tu ważniejsze jest czytanie krajobrazu: położenia, relacji z miastem, bliskości dróg, wody oraz punktów, które mogły mieć znaczenie obronne i administracyjne.",
        "Dlatego w opisie zamku nie wystarczy powtórzyć, że istniał. Trzeba wyjaśnić, po co był potrzebny, jak wiązał się ze starostwem, jak wpływał na rangę miasta i dlaczego jego rozbiórka zmieniła pamięć przestrzeni.",
      ],
    },
    {
      heading: "Zamek jako znak władzy",
      paragraphs: [
        "W małym mieście królewskim zamek był czymś więcej niż budowlą militarną. Był znakiem obecności monarchy, punktem urzędowym i miejscem, wokół którego mogły skupiać się funkcje gospodarcze. To tłumaczy, dlaczego temat zamku trzeba łączyć z powiatem, starostwem i administracją.",
        "Dla czytelnika najważniejsze jest to, że zamek porządkuje całą opowieść o królewskim Lelowie. Bez niego miasto wygląda jak lokalny ośrodek; z nim staje się elementem większej sieci politycznej dawnej Małopolski.",
      ],
    },
  ],
  "mury-miejskie-lelowa": [
    {
      heading: "Jak odtwarzać przebieg obwarowań",
      paragraphs: [
        "Przebieg murów miejskich najrozsądniej odtwarzać przez punkty kontrolne: relikty bram, odkrycia archeologiczne, dawny układ dróg, krawędzie rynku i możliwe odcinki graniczne miasta. Samo narysowanie linii na mapie nie wystarczy, jeśli nie wiadomo, z jakich przesłanek wynika.",
        "W Lelowie szczególnie ważna jest relacja między Bramą Nakielską, drogą krajową nr 46, rynkiem i śladami drewnianego traktu. Te elementy wskazują, że fortyfikacje nie były abstrakcyjnym murem, lecz częścią bardzo praktycznego systemu wjazdu do miasta.",
      ],
    },
    {
      heading: "Obrona i codzienność",
      paragraphs: [
        "Mury kojarzą się z wojną, ale w codziennym życiu regulowały także handel i ruch. Brama była miejscem kontroli, poboru opłat, spotkania przybyszów z miastem oraz symbolicznym progiem między światem zewnętrznym a prawem miejskim.",
        "To dlatego odkrycie bramy ma znaczenie większe niż sam wymiar fundamentu. Pozwala zobaczyć dawny Lelów jako organizm, który musiał zarządzać ruchem ludzi, towarów, zwierząt, wozów i informacji.",
      ],
    },
  ],
  "rynek-w-lelowie": [
    {
      heading: "Rynek jako serce gospodarki",
      paragraphs: [
        "Rynek działał jak mechanizm. Organizował przestrzeń handlu, miejsce sprzedaży, obecność jatek, przepływ informacji i relacje między mieszczanami a przybyszami z okolicznych wsi. W takim ujęciu plac nie jest pustą przestrzenią, ale narzędziem miejskiego życia.",
        "Odkrycia archeologiczne są tu szczególnie cenne, bo sprowadzają opowieść z poziomu ogólnych pojęć do konkretu: bruk, monety, ceramika i relikty zabudowy pokazują, że rynek był intensywnie używany przez długi czas.",
      ],
    },
    {
      heading: "Jak czytać rynek dzisiaj",
      paragraphs: [
        "Współczesny wygląd rynku nie daje pełnej odpowiedzi na pytanie o średniowieczne miasto, ale jest dobrym punktem startu. Warto patrzeć na kierunki ulic, możliwe wyloty dawnych dróg, relację z miejscem zamku i na to, jak późniejsze przebudowy mogły przykryć starsze warstwy.",
        "Najlepsze czytanie rynku jest porównawcze: obecny plac, dawne mapy, wyniki wykopalisk i źródła pisane powinny być traktowane razem. Każde z tych źródeł poprawia obraz pozostałych.",
      ],
    },
  ],
  "dawne-szlaki-lelowa": [
    {
      heading: "Które kierunki były najważniejsze",
      paragraphs: [
        "W przypadku dawnych szlaków najważniejsze są nie tylko nazwy miejscowości na trasie, ale funkcje, które trasa obsługiwała. Droga mogła prowadzić handel, pielgrzymów, urzędników, wojsko, informacje i podatki. Właśnie dlatego drogi tak mocno wpływały na rangę miasta.",
        "Lelów trzeba widzieć w sieci Małopolski, a nie jako punkt oderwany od regionu. Każde połączenie z większym ośrodkiem wzmacniało znaczenie lokalnego rynku, karczmy, bram i zaplecza gospodarczego.",
      ],
    },
    {
      heading: "Mapa nie wystarczy",
      paragraphs: [
        "Stara mapa jest znakomitym źródłem, ale sama nie dowodzi średniowiecznego przebiegu drogi. Trzeba ją porównać z dokumentami, nazwami terenowymi, archeologią i ukształtowaniem terenu. Dopiero wtedy można mówić o bardziej prawdopodobnym przebiegu szlaku.",
        "Drewniany trakt odkryty przy pracach archeologicznych pokazuje, jak praktyczny był problem komunikacji. Droga musiała działać w błocie, wodzie i ruchu wozów, więc często była konstrukcją techniczną, a nie tylko śladem przechodzenia ludzi.",
      ],
    },
  ],
  "mowimy-po-swojemu": [
    {
      heading: "Jak powinno wyglądać dobre hasło",
      paragraphs: [
        "Najlepsze hasło w lokalnym słowniku powinno mieć słowo, zapis wymowy, znaczenie, przykład użycia, przybliżone miejsce występowania i informację o osobie lub rodzinie, od której pochodzi. Dzięki temu nie jest martwą definicją, tylko fragmentem żywej pamięci.",
        "Warto zapisywać także niepewność. Jeżeli ktoś pamięta słowo, ale nie jest pewien znaczenia albo zasięgu, taka informacja też jest cenna. Pokazuje, jak lokalna mowa przechodzi między pokoleniami i gdzie zaczyna zanikać.",
      ],
    },
    {
      heading: "Etyka zbierania opowieści",
      paragraphs: [
        "Projekt językowy powinien szanować rozmówców. Nie każda rodzinna opowieść musi być publiczna, a nie każde nazwisko powinno pojawić się przy haśle. Dlatego dobrze rozdzielać materiał do publikacji od notatek roboczych i zawsze pytać o zgodę.",
        "Najważniejsze jest zachowanie tonu: lokalna mowa nie jest błędem ani ciekawostką do wyśmiania. Jest sposobem, w jaki wspólnota opisywała świat, pracę, relacje i miejsce.",
      ],
    },
  ],
};

const articleQuestions = {
  "lokacja-miasta-na-prawie-magdeburskim": [
    ["Kiedy lokowano Lelów?", "Najczęściej wskazuje się lata 1340/41 i inicjatywę Kazimierza Wielkiego."],
    ["Czy Lelów istniał przed lokacją?", "Tak. Starszy ośrodek wiąże się ze Staromieściem i wzmianką z 1193 roku."],
  ],
  "stary-lelow": [
    ["Gdzie szukać Starego Lelowa?", "Temat wiąże się z dzisiejszym Staromieściem oraz wcześniejszym zapleczem osadniczym."],
    ["Dlaczego 1193 rok jest ważny?", "To najstarsza znana wzmianka, która wskazuje na zorganizowany ośrodek z funkcjami gospodarczymi."],
  ],
  "zamek-lelowski": [
    ["Czy zamek w Lelowie jeszcze istnieje?", "Nie jako czytelna ruina. Jego historię trzeba odtwarzać przez źródła, teren i opracowania."],
    ["Kiedy rozebrano zamek?", "Lokalne opracowania wiążą rozbiórkę z latami 1804-1805."],
  ],
  "mury-miejskie-lelowa": [
    ["Co jest najważniejszym śladem murów?", "Jednym z kluczowych tropów są relikty Bramy Nakielskiej odkryte podczas badań archeologicznych."],
    ["Czy można dziś łatwo zobaczyć obwód murów?", "Nie w pełni. Przebieg trzeba rekonstruować z archeologii, map i układu przestrzeni."],
  ],
  "rynek-w-lelowie": [
    ["Dlaczego rynek był tak ważny?", "Był centrum handlu, administracji i codziennego życia miasta lokacyjnego."],
    ["Co odkryto w rejonie rynku?", "Między innymi bruk, relikty jatek, monety i ceramikę z różnych okresów."],
  ],
  "dawne-szlaki-lelowa": [
    ["Czy współczesne drogi pokrywają się ze średniowiecznymi?", "Czasem mogą zachowywać starsze kierunki, ale każdy przypadek wymaga porównania źródeł."],
    ["Dlaczego drogi były ważne dla Lelowa?", "Wzmacniały handel, pobór opłat, ruch przybyszów i administracyjne znaczenie miasta."],
  ],
  "mowimy-po-swojemu": [
    ["Co można zgłaszać do projektu?", "Słowa, powiedzenia, wymowę nazw miejscowych, przykłady użycia i krótkie opowieści rodzinne."],
    ["Czy trzeba znać naukową definicję słowa?", "Nie. Wystarczy pamięć użycia, kontekst i informacja, kto lub gdzie tak mówił."],
  ],
};

const pages = {
  "/": {
    file: "index.html",
    title: "Szymon Rokicki | Historia Lelowa, mapy i lokalne dziedzictwo",
    description:
      "Autorska strona Szymona Rokickiego o historii Lelowa, dawnych mapach, lokalnym dziedzictwie, projektach społecznych i źródłach.",
    h1: "Nazywam się Szymon Rokicki",
    type: "website",
    image: "/assets/images/social-preview.jpg",
    lastmod: modified,
  },
  "/historia-lelowa/": {
    file: "historia-lelowa/index.html",
    title: "Historia Lelowa: średniowieczne miasto, zamek, mapy i źródła | Szymon Rokicki",
    description:
      "Historia Lelowa w jednym miejscu: Stary Lelów, lokacja miasta, zamek, rynek, mury miejskie, dawne szlaki, mapy i źródła.",
    h1: "Historia Lelowa",
    type: "website",
    image: "/assets/images/proba-rekonstrucji-lelow-sr.jpg",
    lastmod: modified,
  },
  "/mapa-interaktywna/": {
    file: "mapa-interaktywna/index.html",
    title: "Interaktywna mapa Lelowa: dawne punkty, oś czasu i lokalizacje | Szymon Rokicki",
    description:
      "Interaktywna mapa Lelowa z punktami historycznymi, osią czasu i lokalizacjami związanymi ze Starym Lelowem, rynkiem i zamkiem.",
    h1: "Interaktywna mapa Lelowa",
    type: "website",
    image: "/assets/images/social-preview.jpg",
    lastmod: modified,
  },
  "/galeria-map/": {
    file: "galeria-map/index.html",
    title: "Galeria map Lelowa: dawne mapy miasta i regionu | Szymon Rokicki",
    description:
      "Galeria dawnych map Lelowa i regionu: skany lokalne, mapy województwa krakowskiego, warstwy porównawcze i archiwalne źródła.",
    h1: "Galeria map Lelowa",
    type: "website",
    image: "/assets/mapy/mapa-lelow-1792.jpg",
    lastmod: modified,
  },
  "/kalendarium/": {
    file: "kalendarium/index.html",
    title: "Kalendarium historii Lelowa: najważniejsze daty i wydarzenia | Szymon Rokicki",
    description:
      "Kalendarium historii Lelowa od Starego Lelowa i lokacji miasta po zamek, mury, czasy nowożytne i współczesną pamięć miejsca.",
    h1: "Kalendarium historii Lelowa",
    type: "website",
    image: "/assets/images/social-preview.jpg",
    lastmod: modified,
  },
  "/zrodla-i-bibliografia/": {
    file: "zrodla-i-bibliografia/index.html",
    title: "Źródła i bibliografia do historii Lelowa | Szymon Rokicki",
    description:
      "Źródła do historii Lelowa: słowniki historyczne, opracowania, mapy, archeologia, materiały online i bibliografia artykułów.",
    h1: "Źródła i bibliografia",
    type: "website",
    image: "/assets/images/social-preview.jpg",
    lastmod: modified,
  },
  "/o-mnie/": {
    file: "o-mnie/index.html",
    title: "O mnie | Szymon Rokicki",
    description:
      "Poznaj Szymona Rokickiego, autora strony o historii Lelowa, dawnych mapach, lokalnym dziedzictwie i projektach społecznych.",
    h1: "Kim jestem?",
    type: "profile",
    image: "/assets/images/social-preview.jpg",
    lastmod: modified,
  },
  "/projekty/": {
    file: "projekty/index.html",
    title: "Projekty historyczne, regionalne i społeczne | Szymon Rokicki",
    description:
      "Projekty Szymona Rokickiego: historia Lelowa, lokalna mowa, działania społeczne, mapy, źródła i inicjatywy regionalne.",
    h1: "Moje projekty",
    type: "website",
    image: "/assets/images/social-preview.jpg",
    lastmod: modified,
  },
  "/kontakt/": {
    file: "kontakt/index.html",
    title: "Kontakt | Szymon Rokicki",
    description:
      "Skontaktuj się w sprawie historii Lelowa, źródeł, map, współpracy regionalnej, projektów społecznych lub uwag do strony.",
    h1: "Skontaktuj się ze mną",
    type: "website",
    image: "/assets/images/social-preview.jpg",
    lastmod: modified,
  },
  "/podziekowania/": {
    file: "podziekowania/index.html",
    title: "Podziękowania | Szymon Rokicki",
    description:
      "Podziękowania dla osób wspierających prace nad tekstami, źródłami, mapami i lokalną pamięcią historii Lelowa.",
    h1: "Podziękowania",
    type: "website",
    image: "/assets/images/social-preview.jpg",
    lastmod: modified,
  },
  "/wesprzyj/": {
    file: "wesprzyj/index.html",
    title: "Wesprzyj stronę o historii Lelowa | Szymon Rokicki",
    description:
      "Wesprzyj utrzymanie strony szymonrokicki.pl, rozwój opracowań o historii Lelowa, map, źródeł i projektów lokalnych.",
    h1: "Wesprzyj tę stronę",
    type: "website",
    image: "/assets/images/social-preview.jpg",
    lastmod: modified,
  },
  "/regulamin/": {
    file: "regulamin/index.html",
    title: "Regulamin serwisu | Szymon Rokicki",
    description:
      "Regulamin korzystania z serwisu szymonrokicki.pl, zasad publikacji treści, odpowiedzialności i korzystania z materiałów.",
    h1: "Regulamin serwisu",
    type: "website",
    image: "/assets/images/social-preview.jpg",
    lastmod: modified,
  },
  "/polityka-prywatnosci/": {
    file: "polityka-prywatnosci/index.html",
    title: "Polityka prywatności | Szymon Rokicki",
    description:
      "Polityka prywatności serwisu szymonrokicki.pl: dane, formularze, zewnętrzne zasoby, mapa OpenStreetMap i prawa użytkownika.",
    h1: "Polityka prywatności",
    type: "website",
    image: "/assets/images/social-preview.jpg",
    lastmod: modified,
  },
};

const landingPages = [
  {
    path: "/zamek-w-lelowie/",
    file: "zamek-w-lelowie/index.html",
    title: "Zamek w Lelowie: przewodnik po historii i źródłach | Szymon Rokicki",
    description:
      "Krótki przewodnik po zamku w Lelowie: historia warowni, funkcje królewskie, położenie, rozbiórka i link do pełnego opracowania.",
    h1: "Zamek w Lelowie",
    eyebrow: "Przewodnik tematyczny",
    image: "/assets/images/lelowzamek.jpg",
    sections: [
      {
        heading: "Najkrócej",
        text: "Zamek w Lelowie był elementem królewskiego miasta i zapleczem administracji. Dziś temat wymaga czytania przez źródła pisane, układ terenu, mapy i lokalną pamięć.",
      },
      {
        heading: "Czytaj dalej",
        text: 'Pełne opracowanie znajdziesz w artykule <a href="/artykul/zamek-lelowski/">Zamek w Lelowie: historia, położenie i źródła</a>.',
      },
    ],
    links: ["zamek-lelowski", "mury-miejskie-lelowa", "rynek-w-lelowie"],
  },
  {
    path: "/mury-miejskie-lelowa/",
    file: "mury-miejskie-lelowa/index.html",
    title: "Mury miejskie Lelowa: Brama Nakielska i obwód miasta | Szymon Rokicki",
    description:
      "Strona tematyczna o murach miejskich Lelowa, Bramie Nakielskiej, obwodzie obronnym i odkryciach archeologicznych.",
    h1: "Mury miejskie Lelowa",
    eyebrow: "Przewodnik tematyczny",
    image: "/assets/images/proba-rekonstrucji-lelow-sr.jpg",
    sections: [
      {
        heading: "Najkrócej",
        text: "Mury Lelowa porządkowały przestrzeń lokacyjnego miasta, kontrolowały ruch przez bramy i pomagały odróżnić centrum miejskie od przedmieść.",
      },
      {
        heading: "Czytaj dalej",
        text: 'Pełne opracowanie znajdziesz w artykule <a href="/artykul/mury-miejskie-lelowa/">Mury miejskie Lelowa</a>.',
      },
    ],
    links: ["mury-miejskie-lelowa", "rynek-w-lelowie", "dawne-szlaki-lelowa"],
  },
  {
    path: "/stary-lelow/",
    file: "stary-lelow/index.html",
    title: "Stary Lelów: Staromieście i początki miejscowości | Szymon Rokicki",
    description:
      "Stary Lelów i Staromieście jako przedlokacyjny ośrodek: wzmianka z 1193 roku, targ, karczma, archeologia i translokacja.",
    h1: "Stary Lelów",
    eyebrow: "Przewodnik tematyczny",
    image: "/assets/mapy/mapa-lelow-1787.jpg",
    sections: [
      {
        heading: "Najkrócej",
        text: "Stary Lelów to wcześniejszy ośrodek związany ze Staromieściem. Bez niego nie da się dobrze zrozumieć późniejszej lokacji miasta.",
      },
      {
        heading: "Czytaj dalej",
        text: 'Pełne opracowanie znajdziesz w artykule <a href="/artykul/stary-lelow/">Stary Lelów</a>.',
      },
    ],
    links: ["stary-lelow", "lokacja-miasta-na-prawie-magdeburskim", "dawne-szlaki-lelowa"],
  },
  {
    path: "/rynek-w-lelowie/",
    file: "rynek-w-lelowie/index.html",
    title: "Rynek w Lelowie: centrum miasta lokacyjnego | Szymon Rokicki",
    description:
      "Rynek w Lelowie jako centrum miasta lokacyjnego: handel, bruk, jatki, układ ulic, archeologia i dawna przestrzeń miejska.",
    h1: "Rynek w Lelowie",
    eyebrow: "Przewodnik tematyczny",
    image: "/assets/mapy/mapa-lelow-1792.jpg",
    sections: [
      {
        heading: "Najkrócej",
        text: "Rynek był centrum handlu, administracji i życia codziennego lokacyjnego Lelowa. To od niego warto zaczynać czytanie układu miasta.",
      },
      {
        heading: "Czytaj dalej",
        text: 'Pełne opracowanie znajdziesz w artykule <a href="/artykul/rynek-w-lelowie/">Rynek w Lelowie</a>.',
      },
    ],
    links: ["rynek-w-lelowie", "lokacja-miasta-na-prawie-magdeburskim", "mury-miejskie-lelowa"],
  },
  {
    path: "/sredniowieczny-lelow/",
    file: "sredniowieczny-lelow/index.html",
    title: "Średniowieczny Lelów: lokacja, zamek, mury i szlaki | Szymon Rokicki",
    description:
      "Hub o średniowiecznym Lelowie: Stary Lelów, lokacja, prawo magdeburskie, zamek, mury miejskie, rynek i dawne drogi.",
    h1: "Średniowieczny Lelów",
    eyebrow: "Hub tematyczny",
    image: "/assets/images/proba-rekonstrucji-lelow-sr.jpg",
    sections: [
      {
        heading: "Od czego zacząć",
        text: "Najlepiej czytać średniowieczny Lelów jako system: starszy ośrodek, lokacja, rynek, zamek, mury i szlaki nie są osobnymi ciekawostkami, tylko częściami jednej struktury.",
      },
      {
        heading: "Najważniejsze tematy",
        text: "Poniżej znajdziesz teksty, które prowadzą od Staromieścia do miasta lokacyjnego i jego przestrzeni obronno-handlowej.",
      },
    ],
    links: ["stary-lelow", "lokacja-miasta-na-prawie-magdeburskim", "zamek-lelowski", "mury-miejskie-lelowa", "rynek-w-lelowie", "dawne-szlaki-lelowa"],
  },
  {
    path: "/mapy-lelowa/",
    file: "mapy-lelowa/index.html",
    title: "Mapy Lelowa: dawne plany, skany i mapa interaktywna | Szymon Rokicki",
    description:
      "Hub Mapy Lelowa: galeria dawnych skanów, mapa interaktywna, porównywanie układu miasta, dróg, rynku i okolic.",
    h1: "Mapy Lelowa",
    eyebrow: "Hub map",
    image: "/assets/mapy/mapa-lelow-1792.jpg",
    sections: [
      {
        heading: "Dawny Lelów na mapach",
        text: 'Mapy pomagają zobaczyć relację rynku, dróg, Staromieścia i dawnego zaplecza miasta. Zacznij od <a href="/galeria-map/">galerii map</a>, a potem porównaj punkty na <a href="/mapa-interaktywna/">mapie interaktywnej</a>.',
      },
      {
        heading: "Jak korzystać",
        text: "Najbezpieczniej porównywać kilka epok naraz: pojedyncza mapa jest źródłem, ale dopiero seria map pokazuje trwałość albo zmianę układu.",
      },
    ],
    links: ["dawne-szlaki-lelowa", "rynek-w-lelowie", "stary-lelow"],
  },
  {
    path: "/zrodla-do-historii-lelowa/",
    file: "zrodla-do-historii-lelowa/index.html",
    title: "Źródła do historii Lelowa: bibliografia, mapy i opracowania | Szymon Rokicki",
    description:
      "Hub źródeł do historii Lelowa: bibliografia, Słownik historyczno-geograficzny, mapy, archeologia i materiały do dalszej kwerendy.",
    h1: "Źródła do historii Lelowa",
    eyebrow: "Hub źródeł",
    image: "/assets/images/social-preview.jpg",
    sections: [
      {
        heading: "Co tu znajdziesz",
        text: 'To punkt startu do dalszej kwerendy: <a href="/zrodla-i-bibliografia/">bibliografia</a>, mapy, opracowania, źródła online i materiały pomocnicze do tekstów o Lelowie.',
      },
      {
        heading: "Jak czytać źródła",
        text: "Najlepszy efekt daje zestawienie źródeł pisanych, archeologii i kartografii. Każda grupa materiałów odpowiada na inne pytania.",
      },
    ],
    links: ["lokacja-miasta-na-prawie-magdeburskim", "stary-lelow", "zamek-lelowski"],
  },
  {
    path: "/co-zobaczyc-w-lelowie/",
    file: "co-zobaczyc-w-lelowie/index.html",
    title: "Co zobaczyć w Lelowie: historia, rynek, mapy i miejsca pamięci | Szymon Rokicki",
    description:
      "Co zobaczyć w Lelowie, jeśli interesuje Cię historia: rynek, Stary Lelów, miejsce zamku, dawne szlaki, mapy i źródła.",
    h1: "Co zobaczyć w Lelowie",
    eyebrow: "Lokalny przewodnik",
    image: "/assets/images/lelowzamek.jpg",
    sections: [
      {
        heading: "Historyczna trasa w skrócie",
        text: "Zacznij od rynku, potem przejdź myślą do miejsca zamku, murów i bram, a na koniec zestaw centrum z wcześniejszym Staromieściem. To pozwala zobaczyć Lelów nie jako pojedynczy punkt, ale jako dawny układ miejski.",
      },
      {
        heading: "Przed wyjściem w teren",
        text: 'Otwórz <a href="/mapa-interaktywna/">mapę interaktywną</a> i <a href="/galeria-map/">galerię map</a>. Dzięki temu łatwiej porównasz współczesny układ z historycznymi tropami.',
      },
    ],
    links: ["rynek-w-lelowie", "zamek-lelowski", "stary-lelow", "mury-miejskie-lelowa"],
  },
  {
    path: "/dawny-lelow-na-mapach/",
    file: "dawny-lelow-na-mapach/index.html",
    title: "Dawny Lelów na mapach: jak czytać stare plany i skany | Szymon Rokicki",
    description:
      "Dawny Lelów na mapach: jak porównywać skany z różnych epok, czytać drogi, rynek, Staromieście i kontekst regionu.",
    h1: "Dawny Lelów na mapach",
    eyebrow: "Przewodnik kartograficzny",
    image: "/assets/mapy/mapa-lelow-1792.jpg",
    sections: [
      {
        heading: "Dlaczego mapy są ważne",
        text: "Mapy nie zastępują dokumentów, ale pomagają zobaczyć relacje przestrzenne: gdzie prowadziły drogi, jak układało się centrum i jak Lelów łączył się z regionem.",
      },
      {
        heading: "Gdzie zacząć",
        text: 'Najpierw obejrzyj <a href="/galeria-map/">galerię map Lelowa</a>, później porównaj konkretne punkty na <a href="/mapa-interaktywna/">mapie interaktywnej</a>.',
      },
    ],
    links: ["dawne-szlaki-lelowa", "rynek-w-lelowie", "stary-lelow"],
  },
  {
    path: "/lelow-historia-miasta/",
    file: "lelow-historia-miasta/index.html",
    title: "Lelów historia miasta: przewodnik po najważniejszych tematach | Szymon Rokicki",
    description:
      "Lelów historia miasta: przewodnik po Starym Lelowie, lokacji, rynku, zamku, murach miejskich, dawnych drogach, mapach i źródłach.",
    h1: "Lelów - historia miasta",
    eyebrow: "Przewodnik od początku",
    image: "/assets/images/proba-rekonstrucji-lelow-sr.jpg",
    sections: [
      {
        heading: "Najkrótsza ścieżka",
        text: "Jeśli chcesz zrozumieć historię miasta, zacznij od Starego Lelowa, potem przejdź do lokacji na prawie magdeburskim, rynku, zamku, murów i szlaków.",
      },
      {
        heading: "Pełny spis",
        text: 'Zobacz hub <a href="/historia-lelowa/">Historia Lelowa</a> oraz przewodnik <a href="/sredniowieczny-lelow/">Średniowieczny Lelów</a>.',
      },
    ],
    links: ["stary-lelow", "lokacja-miasta-na-prawie-magdeburskim", "rynek-w-lelowie", "zamek-lelowski"],
  },
  {
    path: "/o-projekcie-historia-lelowa/",
    file: "o-projekcie-historia-lelowa/index.html",
    title: "O projekcie Historia Lelowa: cel, metoda i źródła | Szymon Rokicki",
    description:
      "O projekcie Historia Lelowa: po co powstała strona, jak są oznaczane źródła, hipotezy, mapy i dalsze kierunki pracy.",
    h1: "O projekcie Historia Lelowa",
    eyebrow: "Metoda i cel",
    image: "/assets/images/social-preview.jpg",
    sections: [
      {
        heading: "Cel projektu",
        text: "Projekt porządkuje wiedzę o Lelowie w jednym miejscu: łączy teksty popularnonaukowe, bibliografię, mapy, przypisy i robocze hipotezy dotyczące przestrzeni miasta.",
      },
      {
        heading: "Zasada pracy",
        text: "Każdy temat powinien oddzielać informacje źródłowe od interpretacji. Tam, gdzie potrzebna jest dalsza kwerenda, teksty jasno to sygnalizują.",
      },
      {
        heading: "Jak pomóc",
        text: 'Jeżeli masz zdjęcia, dokumenty, wspomnienia albo poprawki, skorzystaj ze strony <a href="/kontakt/">Kontakt</a>.',
      },
    ],
    links: ["lokacja-miasta-na-prawie-magdeburskim", "stary-lelow", "dawne-szlaki-lelowa"],
  },
];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function write(file, content) {
  const full = path.join(root, file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content.replace(/[ \t]+$/gm, ""), "utf8");
}

function escapeAttr(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function stripHtml(value) {
  return String(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function absUrl(url) {
  return url.startsWith("http") ? url : `${site}${url}`;
}

function pageUrl(pathname) {
  return `${site}${pathname}`;
}

function formatDate(date) {
  const [y, m, d] = date.split("-");
  return `${d}.${m}.${y}`;
}

function dateTime(date) {
  return `${date}T12:00:00+02:00`;
}

function wordCount(html) {
  const text = stripHtml(html);
  const words = text.match(/[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż0-9]+(?:-[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż0-9]+)?/g);
  return words ? words.length : 0;
}

function imageDimensions(src) {
  const rel = src.replace(/^\//, "");
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) return null;
  const buffer = fs.readFileSync(file);
  if (buffer.length < 32) return null;

  if (buffer.slice(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) {
    return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
  }

  if (buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset < buffer.length) {
      if (buffer[offset] !== 0xff) {
        offset += 1;
        continue;
      }
      const marker = buffer[offset + 1];
      if (marker === 0xd9 || marker === 0xda) break;
      const length = buffer.readUInt16BE(offset + 2);
      if (
        [
          0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf,
        ].includes(marker)
      ) {
        return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) };
      }
      offset += 2 + length;
    }
  }

  return null;
}

function imageAttrs(src, options = {}) {
  const dims = imageDimensions(src);
  const attrs = [];
  if (dims) attrs.push(`width="${dims.width}" height="${dims.height}"`);
  attrs.push('decoding="async"');
  if (options.loading) attrs.push(`loading="${options.loading}"`);
  if (options.fetchpriority) attrs.push(`fetchpriority="${options.fetchpriority}"`);
  if (options.srcset !== false) attrs.push(`srcset="${escapeAttr(src)} ${dims?.width || 1200}w"`);
  if (options.sizes) attrs.push(`sizes="${escapeAttr(options.sizes)}"`);
  return attrs.join(" ");
}

function globalSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Szymon Rokicki",
        url: site,
        image: absUrl("/assets/images/social-preview.jpg"),
        knowsAbout: ["historia Lelowa", "dziedzictwo lokalne", "mapy historyczne", "źródła regionalne"],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site,
        name: "Szymon Rokicki",
        inLanguage: "pl-PL",
        publisher: { "@id": personId },
        potentialAction: {
          "@type": "SearchAction",
          target: `${site}/szukaj/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.href),
    })),
  };
}

function articleSchema(article, html) {
  const url = pageUrl(`/artykul/${article.slug}/`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.h1,
    description: article.description,
    image: [absUrl(article.image)],
    author: { "@id": personId, "@type": "Person", name: "Szymon Rokicki" },
    publisher: {
      "@type": "Organization",
      name: "Szymon Rokicki",
      logo: { "@type": "ImageObject", url: absUrl("/assets/images/sr-logo.png") },
    },
    datePublished: dateTime(article.datePublished),
    dateModified: dateTime(modified),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: article.articleSection,
    keywords: article.keywords.join(", "),
    wordCount: wordCount(html),
    inLanguage: "pl-PL",
  };
}

function scriptJson(data) {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

function headMeta(page) {
  const canonical = page.canonical || pageUrl(page.path);
  const image = absUrl(page.image);
  const twitterTitle = page.title;
  return `    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="${escapeAttr(page.description)}">
    <meta name="author" content="Szymon Rokicki">
    <meta name="robots" content="${page.robots || "index, follow"}">
    <meta name="theme-color" content="#11100d">
    <meta property="og:title" content="${escapeAttr(page.title)}">
    <meta property="og:description" content="${escapeAttr(page.description)}">
    <meta property="og:url" content="${escapeAttr(canonical)}">
    <meta property="og:type" content="${page.type || "website"}">
    <meta property="og:site_name" content="Szymon Rokicki">
    <meta property="og:locale" content="pl_PL">
    <meta property="og:image" content="${escapeAttr(image)}">
    <meta property="og:image:alt" content="${escapeAttr(page.imageAlt || page.h1 || page.title)}">
    ${page.article ? `<meta property="article:author" content="Szymon Rokicki">
    <meta property="article:published_time" content="${dateTime(page.article.datePublished)}">
    <meta property="article:modified_time" content="${dateTime(modified)}">` : ""}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeAttr(twitterTitle)}">
    <meta name="twitter:description" content="${escapeAttr(page.description)}">
    <meta name="twitter:image" content="${escapeAttr(image)}">
    <link rel="canonical" href="${escapeAttr(canonical)}">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&display=swap">
    ${page.preloadHero ? '<link rel="preload" href="/assets/images/hero-bg.jpg" as="image" fetchpriority="high">' : ""}
    <link rel="preload" href="/assets/css/public.min.css" as="style">
    <link rel="stylesheet" href="/assets/css/public.min.css">
    <link rel="stylesheet" href="/assets/css/print.css" media="print">
    ${page.extraHead || ""}`.replace(/\n\s+\n/g, "\n");
}

function header(active = "") {
  const nav = [
    ["/", "Strona główna", "home"],
    ["/o-mnie/", "O mnie", "about"],
    ["/projekty/", "Projekty", "projects"],
    ["/historia-lelowa/", "Historia Lelowa", "history"],
    ["/kontakt/", "Kontakt", "contact"],
  ];
  return `<a class="skip-link" href="#main-content">Przejdź do treści</a>
<header class="site-header">
    <div class="container header-flex">
        <div class="logo">
            <a href="/" aria-label="Szymon Rokicki">
                <img src="/assets/images/sr-logo.png" alt="Szymon Rokicki" class="logo-img ornamented">
            </a>
        </div>

        <button class="menu-toggle" type="button" aria-label="Otwórz menu" aria-controls="site-navigation" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <nav id="site-navigation" class="navigation" aria-label="Główne menu">
            <ul>
                ${nav
                  .map(([href, label, key]) => `<li><a href="${href}" class="${active === key ? "active" : ""}">${label}</a></li>`)
                  .join("\n                ")}
                <li class="nav-support"><a href="/wesprzyj/" class="${active === "support" ? "active" : ""}">Wesprzyj</a></li>
            </ul>
        </nav>
    </div>
</header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="container footer-grid">
        <div>
            <p class="scribe-footer">&copy; 2026 Szymon Rokicki - Historia. Tożsamość. Działanie.</p>
            <p class="footer-note">Autorskie teksty, szkice i opracowania o historii Lelowa oraz lokalnym dziedzictwie.</p>
        </div>
        <nav class="footer-links" aria-label="Linki w stopce">
            <a href="/sredniowieczny-lelow/">Średniowieczny Lelów</a>
            <a href="/mapy-lelowa/">Mapy Lelowa</a>
            <a href="/zrodla-do-historii-lelowa/">Źródła</a>
            <a href="/o-projekcie-historia-lelowa/">O projekcie</a>
            <a href="/szukaj/">Szukaj</a>
            <a href="/regulamin/">Regulamin</a>
            <a href="/polityka-prywatnosci/">Polityka prywatności</a>
            <a href="/kontakt/">Kontakt</a>
        </nav>
    </div>
</footer>`;
}

function layout({ page, active, main, extraScripts = "", schemas = [] }) {
  return `<!DOCTYPE html>
<html lang="pl">
<head>
${headMeta(page)}
    ${scriptJson(globalSchema())}
    ${schemas.map(scriptJson).join("\n    ")}
    <script type="module" src="/assets/js/public.js"></script>
    <title>${page.title}</title>
</head>
<body class="site-body" data-app-base="">
${header(active)}
${main}
${extraScripts}
${footer()}
</body>
</html>
`;
}

function breadcrumbsHtml(items) {
  return `<nav class="breadcrumbs no-print" aria-label="Okruszki">
            ${items
              .map((item, index) =>
                index === items.length - 1
                  ? `<span aria-current="page">${item.name}</span>`
                  : `<a href="${item.href}">${item.name}</a>`
              )
              .join('<span aria-hidden="true">/</span>')}
        </nav>`;
}

function figureHtml(article) {
  return `<figure class="article-figure article-figure-lead">
                <a href="${article.image}" target="_blank" rel="noopener noreferrer">
                    <img src="${article.image}" alt="${escapeAttr(article.imageAlt)}" ${imageAttrs(article.image, {
                      fetchpriority: "high",
                      sizes: "(max-width: 900px) 100vw, 820px",
                    })}>
                </a>
                <figcaption>${article.imageCaption}</figcaption>
            </figure>`;
}

function glossaryHtml() {
  return `<section class="mini-glossary" aria-labelledby="mini-glossary-heading">
                <h2 id="mini-glossary-heading" class="medieval-heading">Mini-słownik pojęć</h2>
                <dl>
                    ${glossaryTerms
                      .map((item) => `<div><dt>${item.term}</dt><dd>${item.definition}</dd></div>`)
                      .join("\n                    ")}
                </dl>
            </section>`;
}

function relatedHtml(article) {
  return `<section class="related-articles no-print" aria-labelledby="related-${article.slug}">
            <h2 id="related-${article.slug}" class="medieval-heading">Powiązane teksty</h2>
            <div class="related-grid">
                ${article.related
                  .map((slug) => {
                    const related = articles[slug];
                    return `<a href="/artykul/${slug}/" class="related-card">
                    <span>${related.articleSection}</span>
                    <strong>${related.h1}</strong>
                    <small>${related.description}</small>
                </a>`;
                  })
                  .join("\n                ")}
            </div>
        </section>`;
}

function articleBodyHtml(article) {
  const extras = deepSections[article.slug] || [];
  const questions = articleQuestions[article.slug] || [];
  return `<section class="article-summary" aria-labelledby="w-skrocie-${article.slug}">
                <h2 id="w-skrocie-${article.slug}" class="medieval-heading">W skrócie</h2>
                <ul class="medieval-list">
                    ${article.summary.map((item) => `<li>${item}</li>`).join("\n                    ")}
                </ul>
            </section>
            <p class="article-paragraph">${article.lead}</p>
            ${figureHtml(article)}
            ${article.body
              .map((section) => {
                const content = section.list
                  ? `<ul class="medieval-list">\n                    ${section.list.map((item) => `<li>${item}</li>`).join("\n                    ")}\n                </ul>`
                  : section.paragraphs.map((p) => `<p class="article-paragraph">${p}</p>`).join("\n            ");
                return `<h2 class="medieval-heading">${section.heading}</h2>
            ${content}`;
              })
              .join("\n            ")}
            ${extras
              .map(
                (section) => `<h2 class="medieval-heading">${section.heading}</h2>
            ${section.paragraphs.map((p) => `<p class="article-paragraph">${p}</p>`).join("\n            ")}`
              )
              .join("\n            ")}
            ${
              questions.length
                ? `<section class="article-faq" aria-labelledby="faq-${article.slug}">
                <h2 id="faq-${article.slug}" class="medieval-heading">Najczęstsze pytania</h2>
                <dl>
                    ${questions.map(([q, a]) => `<div><dt>${q}</dt><dd>${a}</dd></div>`).join("\n                    ")}
                </dl>
            </section>`
                : ""
            }
            <div class="notice-box">${article.note}</div>
            ${glossaryHtml()}`;
}

function renderArticle(slug) {
  const article = articles[slug];
  const pathName = `/artykul/${slug}/`;
  const body = articleBodyHtml(article);
  const page = {
    path: pathName,
    canonical: pageUrl(pathName),
    title: article.title,
    description: article.description,
    h1: article.h1,
    type: "article",
    image: article.image,
    imageAlt: article.imageAlt,
    article,
  };
  const breadcrumbs = [
    { name: "Strona główna", href: "/" },
    { name: "Historia Lelowa", href: "/historia-lelowa/" },
    { name: article.h1, href: pathName },
  ];
  const schemas = [breadcrumbSchema(breadcrumbs), articleSchema(article, body)];
  const main = `<main id="main-content" class="content-page article-page">
    <article class="container article-container reveal">
        ${breadcrumbsHtml(breadcrumbs)}
        <header class="article-header">
            <p class="eyebrow">${article.eyebrow}</p>
            <h1 class="medieval-heading article-title">${article.h1}</h1>
            <p class="article-lead">${article.lead}</p>
            <div class="article-meta">
                <span class="article-meta-pill">Autor: Szymon Rokicki</span>
                <span class="article-meta-pill"><time datetime="${article.datePublished}">${formatDate(article.datePublished)}</time></span>
                <span class="article-meta-pill">Aktualizacja: <time datetime="${modified}">${formatDate(modified)}</time></span>
                <span class="article-meta-pill">${article.readingTime}</span>
            </div>
            <div class="article-tools no-print">
                <button type="button" class="btn btn-small btn-ghost" onclick="window.print()">Drukuj artykuł</button>
                <button type="button" class="btn btn-small btn-ghost" data-copy-text="${pageUrl(pathName)}">Kopiuj URL</button>
            </div>
        </header>
        <div class="article-content">
            ${body}
        </div>
        <section class="article-references" aria-labelledby="article-references-heading-${slug}">
            <h2 id="article-references-heading-${slug}" class="medieval-heading">Przypisy i bibliografia</h2>
            <ol class="references-list">
                ${article.references.map((item) => `<li>${item}</li>`).join("\n                ")}
            </ol>
        </section>
        ${relatedHtml(article)}
        <nav class="article-footer-nav no-print" aria-label="Nawigacja po artykule">
            <p>Tekst autorski - Szymon Rokicki</p>
            <a href="/historia-lelowa/" class="btn btn-ghost btn-small">Wszystkie teksty o Lelowie</a>
        </nav>
    </article>
</main>`;
  return layout({ page, active: "history", main, schemas });
}

function renderHistoryPage() {
  const page = pages["/historia-lelowa/"];
  const breadcrumbs = [
    { name: "Strona główna", href: "/" },
    { name: "Historia Lelowa", href: "/historia-lelowa/" },
  ];
  const articleCards = articleOrder
    .filter((slug) => slug !== "mowimy-po-swojemu")
    .map((slug) => {
      const article = articles[slug];
      return `<article class="history-box reveal">
                <h3 class="medieval-heading"><a href="/artykul/${slug}/">${article.h1}</a></h3>
                <p class="script-text">${article.description}</p>
            </article>`;
    })
    .join("\n            ");
  const main = `<main id="main-content" class="history-page">
    <div class="container narrow editable-page-content">
        ${breadcrumbsHtml(breadcrumbs)}
        <h1 class="medieval-heading reveal">Historia Lelowa</h1>
        <p class="script-text initial-letter reveal">Historia Lelowa to opowieść o starszym Staromieściu, lokacji na prawie magdeburskim, królewskim zamku, rynku, murach, szlakach i źródłach, które pozwalają odtworzyć dawną logikę miasta.</p>
        <div class="notice-box reveal">Część tekstów zawiera tezy i hipotezy autorskie. Są one oznaczane osobnymi blokami redakcyjnymi i odsyłają do źródeł.</div>

        <section class="history-tools-grid" aria-label="Mapy i narzędzia">
            <a href="/sredniowieczny-lelow/" class="history-tool-card reveal">
                <span class="card-kicker">Hub</span>
                <h2 class="medieval-heading">Średniowieczny Lelów</h2>
                <p>Najkrótsza ścieżka przez lokację, zamek, rynek, mury i dawne drogi.</p>
            </a>
            <a href="/mapy-lelowa/" class="history-tool-card reveal">
                <span class="card-kicker">Mapy</span>
                <h2 class="medieval-heading">Mapy Lelowa</h2>
                <p>Galeria, mapa interaktywna i przewodnik po czytaniu dawnych skanów.</p>
            </a>
            <a href="/zrodla-do-historii-lelowa/" class="history-tool-card reveal">
                <span class="card-kicker">Źródła</span>
                <h2 class="medieval-heading">Źródła do historii Lelowa</h2>
                <p>Bibliografia, opracowania, mapy i materiały do dalszej kwerendy.</p>
            </a>
            <a href="/o-projekcie-historia-lelowa/" class="history-tool-card reveal">
                <span class="card-kicker">Projekt</span>
                <h2 class="medieval-heading">O projekcie Historia Lelowa</h2>
                <p>Cel, metoda, oznaczanie hipotez i sposób pracy ze źródłami.</p>
            </a>
        </section>

        <section class="article-list" aria-label="Artykuły o historii Lelowa">
            ${articleCards}
        </section>

        ${glossaryHtml()}
    </div>
</main>`;
  return layout({ page: { path: "/historia-lelowa/", ...page }, active: "history", main, schemas: [breadcrumbSchema(breadcrumbs)] });
}

function renderLandingPage(config) {
  const breadcrumbs = [
    { name: "Strona główna", href: "/" },
    { name: "Historia Lelowa", href: "/historia-lelowa/" },
    { name: config.h1, href: config.path },
  ];
  const page = {
    path: config.path,
    canonical: pageUrl(config.path),
    title: config.title,
    description: config.description,
    h1: config.h1,
    type: "website",
    image: config.image,
  };
  const linkCards = config.links
    .map((slug) => {
      const article = articles[slug];
      return `<a href="/artykul/${slug}/" class="related-card">
                    <span>${article.articleSection}</span>
                    <strong>${article.h1}</strong>
                    <small>${article.description}</small>
                </a>`;
    })
    .join("\n                ");
  const figure = `<figure class="article-figure article-figure-lead">
                <a href="${config.image}" target="_blank" rel="noopener noreferrer">
                    <img src="${config.image}" alt="${escapeAttr(config.h1)}" ${imageAttrs(config.image, {
                      fetchpriority: "high",
                      sizes: "(max-width: 900px) 100vw, 820px",
                    })}>
                </a>
                <figcaption>${config.h1} - punkt startowy do dalszego czytania na szymonrokicki.pl.</figcaption>
            </figure>`;
  const main = `<main id="main-content" class="content-page article-page hub-page">
    <article class="container article-container reveal">
        ${breadcrumbsHtml(breadcrumbs)}
        <header class="article-header">
            <p class="eyebrow">${config.eyebrow}</p>
            <h1 class="medieval-heading article-title">${config.h1}</h1>
            <p class="article-lead">${config.description}</p>
        </header>
        <div class="article-content">
            <section class="article-summary">
                <h2 class="medieval-heading">W skrócie</h2>
                <p class="article-paragraph">${config.sections[0].text}</p>
            </section>
            ${figure}
            ${config.sections
              .slice(1)
              .map(
                (section) => `<h2 class="medieval-heading">${section.heading}</h2>
            <p class="article-paragraph">${section.text}</p>`
              )
              .join("\n            ")}
            ${glossaryHtml()}
        </div>
        <section class="related-articles no-print" aria-labelledby="landing-related-${config.file.replaceAll("/", "-")}">
            <h2 id="landing-related-${config.file.replaceAll("/", "-")}" class="medieval-heading">Powiązane teksty</h2>
            <div class="related-grid">
                ${linkCards}
            </div>
        </section>
    </article>
</main>`;
  return layout({ page, active: "history", main, schemas: [breadcrumbSchema(breadcrumbs)] });
}

function searchIndexItems() {
  const items = [
    {
      title: pages["/historia-lelowa/"].title,
      url: "/historia-lelowa/",
      description: pages["/historia-lelowa/"].description,
      section: "Historia",
    },
    {
      title: "Galeria map Lelowa",
      url: "/galeria-map/",
      description: pages["/galeria-map/"].description,
      section: "Mapy",
    },
    {
      title: "Interaktywna mapa Lelowa",
      url: "/mapa-interaktywna/",
      description: pages["/mapa-interaktywna/"].description,
      section: "Mapy",
    },
    {
      title: "Źródła i bibliografia",
      url: "/zrodla-i-bibliografia/",
      description: pages["/zrodla-i-bibliografia/"].description,
      section: "Źródła",
    },
    ...articleOrder.map((slug) => ({
      title: articles[slug].h1,
      url: `/artykul/${slug}/`,
      description: articles[slug].description,
      section: articles[slug].articleSection,
    })),
    ...landingPages.map((page) => ({
      title: page.h1,
      url: page.path,
      description: page.description,
      section: page.eyebrow,
    })),
  ];
  return items;
}

function renderSearchPage() {
  const pathname = "/szukaj/";
  const page = {
    path: pathname,
    canonical: pageUrl(pathname),
    title: "Szukaj w serwisie | Szymon Rokicki",
    description:
      "Wyszukiwarka treści na szymonrokicki.pl: artykuły o historii Lelowa, mapy, źródła, przewodniki i projekty lokalne.",
    h1: "Szukaj w serwisie",
    type: "website",
    image: "/assets/images/social-preview.jpg",
  };
  const breadcrumbs = [
    { name: "Strona główna", href: "/" },
    { name: "Szukaj", href: pathname },
  ];
  const items = searchIndexItems();
  const cards = items
    .map(
      (item) => `<a href="${item.url}" class="related-card" data-search-item data-title="${escapeAttr(item.title.toLowerCase())}" data-description="${escapeAttr(item.description.toLowerCase())}" data-section="${escapeAttr(item.section.toLowerCase())}">
                    <span>${item.section}</span>
                    <strong>${item.title}</strong>
                    <small>${item.description}</small>
                </a>`
    )
    .join("\n                ");
  const main = `<main id="main-content" class="content-page article-page hub-page search-page">
    <article class="container article-container reveal">
        ${breadcrumbsHtml(breadcrumbs)}
        <header class="article-header">
            <p class="eyebrow">Wyszukiwarka</p>
            <h1 class="medieval-heading article-title">Szukaj w serwisie</h1>
            <p class="article-lead">Wpisz temat, np. zamek, rynek, mapy, Staromieście, prawo magdeburskie albo źródła.</p>
        </header>
        <div class="article-content">
            <form class="site-search" role="search" action="/szukaj/" method="get">
                <label for="site-search-query">Szukana fraza</label>
                <div>
                    <input id="site-search-query" name="q" type="search" autocomplete="off" placeholder="np. zamek w Lelowie">
                    <button class="btn" type="submit">Szukaj</button>
                </div>
            </form>
            <section class="related-articles" aria-labelledby="search-results-heading">
                <h2 id="search-results-heading" class="medieval-heading">Wyniki</h2>
                <p class="script-text" data-search-count>Najważniejsze treści w serwisie.</p>
                <div class="related-grid" data-search-results>
                ${cards}
                </div>
            </section>
        </div>
    </article>
</main>`;
  const script = `<script>
(() => {
  const input = document.querySelector("#site-search-query");
  const cards = Array.from(document.querySelectorAll("[data-search-item]"));
  const counter = document.querySelector("[data-search-count]");
  if (!input || !cards.length) return;
  const params = new URLSearchParams(window.location.search);
  const initial = params.get("q") || "";
  input.value = initial;
  const normalize = (value) => value.toLocaleLowerCase("pl-PL").trim();
  const apply = () => {
    const query = normalize(input.value);
    let shown = 0;
    cards.forEach((card) => {
      const haystack = [card.dataset.title, card.dataset.description, card.dataset.section].join(" ");
      const visible = !query || haystack.includes(query);
      card.hidden = !visible;
      if (visible) shown += 1;
    });
    if (counter) counter.textContent = query ? "Znaleziono: " + shown : "Najważniejsze treści w serwisie.";
  };
  input.addEventListener("input", apply);
  apply();
})();
</script>`;
  return layout({ page, active: "", main, extraScripts: script, schemas: [breadcrumbSchema(breadcrumbs)] });
}

function injectStandardHead(file, config, active = "") {
  if (!fs.existsSync(path.join(root, file))) return;
  let html = read(file);
  const pathname = Object.entries(pages).find(([, page]) => page.file === file)?.[0] || "/";
  const page = { path: pathname, ...config };
  const schemaItems = [scriptJson(globalSchema())];
  if (pathname !== "/") {
    const crumbs = [
      { name: "Strona główna", href: "/" },
      { name: config.h1 || config.title.split("|")[0].trim(), href: pathname },
    ];
    schemaItems.push(scriptJson(breadcrumbSchema(crumbs)));
  }
  const extraHead = file === "mapa-interaktywna/index.html"
    ? '    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">'
    : "";
  const head = `<head>\n${headMeta({ path: pathname, ...config, preloadHero: file === "index.html", extraHead })}\n    ${schemaItems.join("\n    ")}\n    <script type="module" src="/assets/js/public.js"></script>\n    <title>${config.title}</title>\n</head>`;
  html = html.replace(/<head>[\s\S]*?<\/head>/, head);
  html = updateFooter(html);
  html = addImageDimensions(html);
  write(file, html);
}

function updateFooter(html) {
  return html.replace(/<footer class="site-footer">[\s\S]*?<\/footer>/, footer());
}

function addImageDimensions(html) {
  return html.replace(/<img\b([^>]*?)>/g, (match, attrs) => {
    if (/\bwidth=/.test(attrs) && /\bheight=/.test(attrs)) return match;
    const src = (attrs.match(/\bsrc="([^"]+)"/) || [])[1];
    if (!src || src.startsWith("http") || src.startsWith("data:")) return match;
    const dims = imageDimensions(src);
    if (!dims) return match;
    let next = attrs.trim();
    next = next.replace(/\s+decoding="[^"]*"/g, "");
    if (!/\bloading=/.test(next) && /thumbs\//.test(src)) next += ' loading="lazy"';
    if (!/\bdecoding=/.test(next)) next += ' decoding="async"';
    if (!/\bsrcset=/.test(next) && !src.endsWith(".ico")) next += ` srcset="${escapeAttr(src)} ${dims.width}w"`;
    if (!/\bsizes=/.test(next) && !src.includes("sr-logo")) next += ' sizes="(max-width: 900px) 100vw, 820px"';
    return `<img ${next} width="${dims.width}" height="${dims.height}">`;
  });
}

function updateInternalArticleLinksInFile(file) {
  if (!fs.existsSync(path.join(root, file))) return;
  let html = read(file);
  for (const slug of articleOrder) {
    html = html.replaceAll(`/artykul/${slug}"`, `/artykul/${slug}/"`);
    html = html.replaceAll(`${site}/artykul/${slug}"`, `${site}/artykul/${slug}/"`);
  }
  write(file, html);
}

function renderSitemap() {
  const urls = [];
  const add = (loc, lastmod, priority = "0.6", changefreq = "monthly", images = []) => {
    urls.push({ loc: pageUrl(loc), lastmod, priority, changefreq, images });
  };

  add("/", modified, "1.0", "weekly", ["/assets/images/social-preview.jpg", "/assets/images/hero-bg.jpg"]);
  add("/historia-lelowa/", modified, "0.9", "weekly", ["/assets/images/proba-rekonstrucji-lelow-sr.jpg"]);
  add("/sredniowieczny-lelow/", modified, "0.8", "monthly", ["/assets/images/proba-rekonstrucji-lelow-sr.jpg"]);
  add("/mapy-lelowa/", modified, "0.8", "monthly", ["/assets/mapy/mapa-lelow-1792.jpg"]);
  add("/zrodla-do-historii-lelowa/", modified, "0.7", "monthly");
  add("/o-projekcie-historia-lelowa/", modified, "0.6", "monthly");
  add("/szukaj/", modified, "0.4", "monthly");
  add("/co-zobaczyc-w-lelowie/", modified, "0.7", "monthly", ["/assets/images/lelowzamek.jpg"]);
  add("/dawny-lelow-na-mapach/", modified, "0.7", "monthly", ["/assets/mapy/mapa-lelow-1792.jpg"]);
  add("/lelow-historia-miasta/", modified, "0.8", "monthly", ["/assets/images/proba-rekonstrucji-lelow-sr.jpg"]);
  add("/o-mnie/", modified, "0.6", "monthly");
  add("/projekty/", modified, "0.6", "monthly");
  add("/mapa-interaktywna/", modified, "0.6", "monthly");
  add("/galeria-map/", modified, "0.7", "monthly", ["/assets/mapy/mapa-lelow-1792.jpg", "/assets/mapy/mapa-lelow-1787.jpg"]);
  add("/kalendarium/", modified, "0.6", "monthly");
  add("/zrodla-i-bibliografia/", modified, "0.6", "monthly");
  add("/kontakt/", modified, "0.4", "yearly");
  add("/wesprzyj/", modified, "0", "monthly");
  add("/podziekowania/", modified, "0.4", "yearly");
  add("/regulamin/", modified, "0.2", "yearly");
  add("/polityka-prywatnosci/", modified, "0.2", "yearly");
  for (const slug of articleOrder) {
    const article = articles[slug];
    add(`/artykul/${slug}/`, modified, slug === "mowimy-po-swojemu" ? "0.6" : "0.8", "monthly", [article.image]);
  }
  add("/zamek-w-lelowie/", modified, "0.7", "monthly", ["/assets/images/lelowzamek.jpg"]);
  add("/mury-miejskie-lelowa/", modified, "0.7", "monthly", ["/assets/images/proba-rekonstrucji-lelow-sr.jpg"]);
  add("/stary-lelow/", modified, "0.7", "monthly", ["/assets/mapy/mapa-lelow-1787.jpg"]);
  add("/rynek-w-lelowie/", modified, "0.7", "monthly", ["/assets/mapy/mapa-lelow-1792.jpg"]);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls
    .map(
      (url) => `    <url>
        <loc>${url.loc}</loc>
        <lastmod>${url.lastmod}</lastmod>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
${url.images
  .map(
    (image) => `        <image:image>
            <image:loc>${absUrl(image)}</image:loc>
        </image:image>`
  )
  .join("\n")}
    </url>`
    )
    .join("\n")}\n</urlset>\n`;
  write("sitemap.xml", xml);
}

function renderRobots() {
  write(
    "robots.txt",
    `User-agent: *
Allow: /
Disallow: /generator/
Disallow: /szablony/
Disallow: /assets/images/uploads/

Sitemap: ${site}/sitemap.xml
`
  );
}

function renderHeaders() {
  write(
    "_headers",
    `/assets/*
  Cache-Control: public, max-age=31536000

/sitemap.xml
  Cache-Control: public, max-age=3600

/robots.txt
  Cache-Control: public, max-age=3600
`
  );
}

function renderPrintCss() {
  write(
    "assets/css/print.css",
    `@media print {
  body {
    color: #111 !important;
    background: #fff !important;
  }

  .site-header,
  .site-footer,
  .reading-bar,
  .back-link,
  .breadcrumbs,
  .no-print,
  .article-tools,
  .footer-links {
    display: none !important;
  }

  .container,
  .article-container {
    width: 100% !important;
    max-width: none !important;
    padding: 0 !important;
    margin: 0 !important;
    border: 0 !important;
    box-shadow: none !important;
    background: #fff !important;
  }

  .article-content,
  .article-content p,
  .script-text,
  .article-meta,
  .article-references,
  .article-summary,
  .mini-glossary {
    color: #111 !important;
  }

  .article-meta-pill,
  .article-summary,
  .mini-glossary,
  .notice-box {
    border-color: #111 !important;
    background: transparent !important;
    color: #111 !important;
  }

  .article-lead {
    color: #111 !important;
  }

  a {
    color: #111 !important;
    text-decoration: none !important;
  }

  .article-image,
  .article-figure,
  .article-summary,
  .mini-glossary {
    page-break-inside: avoid;
  }
}
`
  );
}

function updateHtaccess() {
  if (!fs.existsSync(path.join(root, ".htaccess"))) return;
  const content = `# Statyczna wersja szymonrokicki.pl
# Kodowanie i strona błędu
AddDefaultCharset UTF-8
ErrorDocument 404 /404.html
DirectoryIndex index.html

<IfModule mod_rewrite.c>
    RewriteEngine On

    # Kanoniczne adresy katalogów artykułów mają końcowy ukośnik.
    RewriteRule ^artykul/([^/.]+)$ /artykul/$1/ [R=301,L]
</IfModule>

<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 30 days"
    ExpiresByType application/javascript "access plus 30 days"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/avif "access plus 1 year"
    ExpiresByType image/x-icon "access plus 1 year"
</IfModule>
`;
  write(".htaccess", content);
}

function updateCss() {
  let css = read("assets/css/public.css");
  css = css.replace(/@media print \{[\s\S]*?\n\}\n\n\/\* ============================================================\n   MEDIEVAL VISUAL REFRESH/, "/* ============================================================\n   MEDIEVAL VISUAL REFRESH");
  if (!css.includes(".breadcrumbs")) {
    css += `

/* ============================================================
   SEO CONTENT STRUCTURE
   ============================================================ */
.breadcrumbs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  margin: 0 0 1rem;
  color: var(--text-muted);
  font-family: var(--font-head);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.breadcrumbs a {
  color: var(--gold-light);
  text-decoration: none;
}

.breadcrumbs span[aria-hidden="true"] {
  color: rgba(231, 201, 114, 0.45);
}

.article-summary,
.mini-glossary,
.related-articles {
  margin: 1.4rem 0;
  padding: clamp(1rem, 2vw, 1.35rem);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: rgba(0, 0, 0, 0.18);
}

.article-summary .medieval-heading,
.mini-glossary .medieval-heading,
.related-articles .medieval-heading {
  margin-top: 0;
}

.article-figure {
  margin: 1rem 0;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: rgba(0, 0, 0, 0.24);
}

.article-figure img {
  width: 100%;
  max-height: 540px;
  object-fit: cover;
}

.article-figure figcaption {
  padding: 0.75rem 0.95rem;
  border-top: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.45;
  background: rgba(0, 0, 0, 0.18);
}

.mini-glossary dl {
  display: grid;
  gap: 0.8rem;
  margin-top: 0.9rem;
}

.mini-glossary div {
  display: grid;
  gap: 0.22rem;
}

.mini-glossary dt {
  color: var(--gold-light);
  font-family: var(--font-head);
  font-weight: 700;
}

.mini-glossary dd {
  color: var(--text-soft);
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 0.85rem;
  margin-top: 1rem;
}

.related-card {
  display: grid;
  gap: 0.35rem;
  min-height: 100%;
  padding: 0.9rem;
  border: 1px solid rgba(231, 201, 114, 0.24);
  border-radius: var(--radius);
  color: var(--text-soft);
  background: rgba(239, 224, 189, 0.045);
  text-decoration: none;
}

.related-card:hover {
  border-color: var(--border-strong);
  color: var(--parchment);
  background: rgba(231, 201, 114, 0.09);
}

.related-card span {
  color: var(--text-muted);
  font-family: var(--font-head);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.related-card strong {
  color: var(--gold-light);
  font-family: var(--font-head);
  line-height: 1.25;
}

.related-card small {
  color: var(--text-soft);
  font-size: 0.92rem;
  line-height: 1.45;
}

.hub-page .article-summary p {
  margin: 0;
}

@media (max-width: 760px) {
  .breadcrumbs {
    font-size: 0.72rem;
  }

  .article-figure img {
    max-height: 360px;
  }
}
`;
  }
  if (!css.includes(".site-search")) {
    css += `

.site-search {
  display: grid;
  gap: 0.65rem;
  margin: 1.4rem 0;
  padding: clamp(1rem, 2vw, 1.35rem);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: rgba(0, 0, 0, 0.18);
}

.site-search label {
  color: var(--gold-light);
  font-family: var(--font-head);
  font-weight: 700;
}

.site-search > div {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.site-search input {
  flex: 1 1 240px;
  min-height: 2.65rem;
  padding: 05rem 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text-main);
  background: rgba(0, 0, 0, 0.24);
}

.related-card[hidden] {
  display: none;
}
`;
  }
  if (!css.includes(".article-faq")) {
    css += `

.article-faq {
  margin: 1.4rem 0;
  padding: clamp(1rem, 2vw, 1.35rem);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: rgba(0, 0, 0, 0.18);
}

.article-faq .medieval-heading {
  margin-top: 0;
}

.article-faq dl {
  display: grid;
  gap: 0.9rem;
  margin-top: 0.9rem;
}

.article-faq div {
  display: grid;
  gap: 0.25rem;
}

.article-faq dt {
  color: var(--gold-light);
  font-family: var(--font-head);
  font-weight: 700;
}

.article-faq dd {
  color: var(--text-soft);
}
`;
  }
  write("assets/css/public.css", css);
}

function updateHomeLinks() {
  let html = read("index.html");
  html = html.replaceAll('/artykul/lokacja-miasta-na-prawie-magdeburskim"', '/artykul/lokacja-miasta-na-prawie-magdeburskim/"');
  html = html.replaceAll('/artykul/stary-lelow"', '/artykul/stary-lelow/"');
  html = html.replaceAll('/artykul/zamek-lelowski"', '/artykul/zamek-lelowski/"');
  html = html.replaceAll('/artykul/mury-miejskie-lelowa"', '/artykul/mury-miejskie-lelowa/"');
  const insertion = `                <a href="/sredniowieczny-lelow/" class="summary-item reveal">
                    <span class="tile-kicker">Przewodnik</span>
                    <h3>Średniowieczny Lelów</h3>
                    <p>Przejdź przez Stary Lelów, lokację, zamek, rynek, mury i dawne drogi.</p>
                </a>
                <a href="/mapy-lelowa/" class="summary-item reveal">
                    <span class="tile-kicker">Kartografia</span>
                    <h3>Mapy Lelowa</h3>
                    <p>Dawne skany, mapa interaktywna i przewodnik po porównywaniu epok.</p>
                </a>`;
  if (!html.includes('/sredniowieczny-lelow/')) {
    html = html.replace(
      /(\s+<a href="\/kontakt\/" class="summary-item reveal">)/,
      `\n${insertion}$1`
    );
  }
  write("index.html", html);
}

function updateAllStandardPages() {
  for (const [pathname, config] of Object.entries(pages)) {
    if (pathname === "/historia-lelowa/") continue;
    const active =
      pathname === "/" ? "home" :
      pathname === "/o-mnie/" ? "about" :
      pathname === "/projekty/" ? "projects" :
      pathname === "/kontakt/" ? "contact" :
      pathname === "/wesprzyj/" ? "support" : "";
    injectStandardHead(config.file, { path: pathname, ...config }, active);
  }
}

function run() {
  for (const slug of articleOrder) {
    write(`artykul/${slug}/index.html`, renderArticle(slug));
  }

  write("historia-lelowa/index.html", renderHistoryPage());
  for (const landing of landingPages) {
    write(landing.file, renderLandingPage(landing));
  }
  write("szukaj/index.html", renderSearchPage());

  updateAllStandardPages();
  updateHomeLinks();

  const htmlFiles = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
      const rel = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if ([".git", "tools"].includes(entry.name)) continue;
        walk(rel);
      } else if (entry.name.endsWith(".html")) {
        htmlFiles.push(rel.replaceAll("\\", "/"));
      }
    }
  };
  walk(".");
  for (const file of htmlFiles) {
    if (file.startsWith("szablony/") || file.startsWith("generator/")) continue;
    updateInternalArticleLinksInFile(file);
    let html = read(file);
    html = updateFooter(html);
    html = addImageDimensions(html);
    write(file, html);
  }

  renderSitemap();
  renderRobots();
  renderHeaders();
  renderPrintCss();
  updateHtaccess();
  updateCss();
}

run();
