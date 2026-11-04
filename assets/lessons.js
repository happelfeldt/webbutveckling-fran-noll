window.ANTON_LESSONS = [
  {
    "id": 1,
    "topic": "HTML",
    "title": "Min första webbsida",
    "goal": "Förstå att HTML är text som webbläsaren visar.",
    "steps": [
      "Klicka på fliken HTML.",
      "Hitta raden som börjar med <h1>.",
      "Ändra rubriken till Min första webbsida.",
      "Tryck på Visa resultat."
    ],
    "tryThis": "Ändra bara texten mellan <h1> och </h1>.",
    "expected": "En stor rubrik med texten ”Min första webbsida”.",
    "hint": "Titta efter texten Hej! i koden. Ta bort Hej! och skriv den nya texten.",
    "why": "<h1> är rubriken. Texten mellan taggarna visas på sidan.",
    "starter": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Hej!</h1>\n  <p>Min sida.</p>\n</body>\n</html>",
      "css": "",
      "js": ""
    },
    "solution": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min första webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n</body>\n</html>",
      "css": "",
      "js": ""
    },
    "checks": [
      {
        "label": "Rubriken är ändrad",
        "tab": "html",
        "pattern": "<h1>Min första webbsida</h1>"
      }
    ],
    "tab": "html"
  },
  {
    "id": 2,
    "topic": "HTML",
    "title": "Rubrik och text",
    "goal": "Kunna skilja på rubrik och vanlig text.",
    "steps": [
      "Öppna fliken HTML.",
      "Byt rubriken till Min egen webbsida.",
      "Låt stycket med <p> vara kvar.",
      "Tryck på Visa resultat."
    ],
    "tryThis": "Ändra bara rubrikens text.",
    "expected": "Rubriken visar ”Min egen webbsida”.",
    "hint": "Rubrikens text står på samma rad som <h1>.",
    "why": "<h1> är rubrik. <p> är vanlig text. </h1> och </p> avslutar taggarna.",
    "starter": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min första webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n</body>\n</html>",
      "css": "",
      "js": ""
    },
    "solution": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min egen webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n</body>\n</html>",
      "css": "",
      "js": ""
    },
    "checks": [
      {
        "label": "Ny rubrik finns",
        "tab": "html",
        "pattern": "<h1>Min egen webbsida</h1>"
      },
      {
        "label": "Ett stycke finns",
        "tab": "html",
        "pattern": "<p>"
      }
    ],
    "tab": "html"
  },
  {
    "id": 3,
    "topic": "HTML",
    "title": "Lägg till ett avsnitt",
    "goal": "Kunna lägga in innehåll ovanför </body>.",
    "steps": [
      "Öppna HTML.",
      "Hitta raden </body> nära slutet.",
      "Skriv kodraderna som står under Din uppgift precis ovanför </body>.",
      "Tryck Visa resultat."
    ],
    "tryThis": "<h2>Om mig</h2>\n<p>Jag går på gymnasiet och lär mig webb.</p>",
    "expected": "En underrubrik ”Om mig” och en ny mening.",
    "hint": "All kod som ska synas på sidan ligger mellan <body> och </body>.",
    "why": "<h2> är en underrubrik. Den är ett steg under <h1>.",
    "starter": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min egen webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n</body>\n</html>",
      "css": "",
      "js": ""
    },
    "solution": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min egen webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n  <h2>Om mig</h2>\n  <p>Jag går på gymnasiet och lär mig webb.</p>\n</body>\n</html>",
      "css": "",
      "js": ""
    },
    "checks": [
      {
        "label": "Underrubrik finns",
        "tab": "html",
        "pattern": "<h2>Om mig</h2>"
      },
      {
        "label": "Ny text finns",
        "tab": "html",
        "pattern": "Jag går på gymnasiet"
      }
    ],
    "tab": "html"
  },
  {
    "id": 4,
    "topic": "HTML",
    "title": "Gör en lista",
    "goal": "Kunna göra en punktlista med tre rader.",
    "steps": [
      "Öppna HTML.",
      "Gå till raden före </body>.",
      "Klistra in koden under Din uppgift.",
      "Visa resultatet."
    ],
    "tryThis": "<h2>Tre saker jag gillar</h2>\n<ul>\n  <li>Datorer</li>\n  <li>Musik</li>\n  <li>Spel</li>\n</ul>",
    "expected": "En lista med tre punkter.",
    "hint": "En lista börjar med <ul> och slutar med </ul>. Varje punkt börjar med <li>.",
    "why": "<ul> betyder punktlista. <li> betyder en punkt.",
    "starter": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min egen webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n  <h2>Om mig</h2>\n  <p>Jag går på gymnasiet och lär mig webb.</p>\n</body>\n</html>",
      "css": "",
      "js": ""
    },
    "solution": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min egen webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n  <h2>Om mig</h2>\n  <p>Jag går på gymnasiet och lär mig webb.</p>\n  <h2>Tre saker jag gillar</h2>\n  <ul>\n    <li>Datorer</li>\n    <li>Musik</li>\n    <li>Spel</li>\n  </ul>\n</body>\n</html>",
      "css": "",
      "js": ""
    },
    "checks": [
      {
        "label": "Listan börjar",
        "tab": "html",
        "pattern": "<ul>"
      },
      {
        "label": "Listan har minst en punkt",
        "tab": "html",
        "pattern": "<li>"
      },
      {
        "label": "Listan avslutas",
        "tab": "html",
        "pattern": "</ul>"
      }
    ],
    "tab": "html"
  },
  {
    "id": 5,
    "topic": "HTML",
    "title": "Lägg in en länk",
    "goal": "Kunna skapa en klickbar länk.",
    "steps": [
      "Öppna HTML.",
      "Hitta </body>.",
      "Skriv in länken under Din uppgift strax ovanför.",
      "Visa resultatet."
    ],
    "tryThis": "<p><a href=\"https://www.wikipedia.org/\">Öppna Wikipedia</a></p>",
    "expected": "En klickbar länk med texten ”Öppna Wikipedia”.",
    "hint": "Glöm inte href och citationstecknen runt webbadressen.",
    "why": "<a> gör länkar. href talar om vart länken går. Själva länken behöver internet för att öppnas.",
    "starter": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min egen webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n  <h2>Om mig</h2>\n  <p>Jag går på gymnasiet och lär mig webb.</p>\n  <h2>Tre saker jag gillar</h2>\n  <ul>\n    <li>Datorer</li>\n    <li>Musik</li>\n    <li>Spel</li>\n  </ul>\n</body>\n</html>",
      "css": "",
      "js": ""
    },
    "solution": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min egen webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n  <h2>Om mig</h2>\n  <p>Jag går på gymnasiet och lär mig webb.</p>\n  <h2>Tre saker jag gillar</h2>\n  <ul>\n    <li>Datorer</li>\n    <li>Musik</li>\n    <li>Spel</li>\n  </ul>\n  <p><a href=\"https://www.wikipedia.org/\">Öppna Wikipedia</a></p>\n</body>\n</html>",
      "css": "",
      "js": ""
    },
    "checks": [
      {
        "label": "Länktagg finns",
        "tab": "html",
        "pattern": "<a href="
      },
      {
        "label": "Rätt text finns",
        "tab": "html",
        "pattern": "Öppna Wikipedia"
      }
    ],
    "tab": "html"
  },
  {
    "id": 6,
    "topic": "HTML",
    "title": "Visa en bild",
    "goal": "Kunna lägga in en bild och beskriva den med alt-text.",
    "steps": [
      "Öppna HTML.",
      "Lägg raden under Din uppgift före </body>.",
      "Tryck på Visa resultat.",
      "Om bilden inte syns, kontrollera stavningen av bild.jpg."
    ],
    "tryThis": "<img src=\"bild.jpg\" alt=\"En bild med kod\" width=\"320\">",
    "expected": "En bild visas under länken.",
    "hint": "Bildfilen följer med paketet. Den heter exakt bild.jpg.",
    "why": "src är bildens filnamn. alt är en kort text som beskriver bilden.",
    "starter": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min egen webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n  <h2>Om mig</h2>\n  <p>Jag går på gymnasiet och lär mig webb.</p>\n  <h2>Tre saker jag gillar</h2>\n  <ul>\n    <li>Datorer</li>\n    <li>Musik</li>\n    <li>Spel</li>\n  </ul>\n  <p><a href=\"https://www.wikipedia.org/\">Öppna Wikipedia</a></p>\n</body>\n</html>",
      "css": "",
      "js": ""
    },
    "solution": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min egen webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n  <h2>Om mig</h2>\n  <p>Jag går på gymnasiet och lär mig webb.</p>\n  <h2>Tre saker jag gillar</h2>\n  <ul>\n    <li>Datorer</li>\n    <li>Musik</li>\n    <li>Spel</li>\n  </ul>\n  <p><a href=\"https://www.wikipedia.org/\">Öppna Wikipedia</a></p>\n  <img src=\"bild.jpg\" alt=\"En bild med kod\" width=\"320\">\n</body>\n</html>",
      "css": "",
      "js": ""
    },
    "checks": [
      {
        "label": "Bildfilen används",
        "tab": "html",
        "pattern": "src=\"bild.jpg\""
      },
      {
        "label": "Bildbeskrivning finns",
        "tab": "html",
        "pattern": "alt="
      }
    ],
    "tab": "html"
  },
  {
    "id": 7,
    "topic": "CSS",
    "title": "Ge sidan färg",
    "goal": "Förstå att CSS styr färger och utseende.",
    "steps": [
      "Klicka på fliken CSS.",
      "Klistra in koden under Din uppgift.",
      "Tryck på Visa resultat.",
      "Se om bakgrunden och rubriken får nya färger."
    ],
    "tryThis": "body {\n  background-color: #eef5ff;\n  color: #1e293b;\n  font-family: Arial, sans-serif;\n}\n\nh1 {\n  color: #155e75;\n}",
    "expected": "Ljusblå bakgrund och mörkblå rubrik.",
    "hint": "Kopiera hela CSS-koden. Varje regel har { och }.",
    "why": "HTML säger vad som ska finnas. CSS säger hur det ska se ut.",
    "starter": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min egen webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n  <h2>Om mig</h2>\n  <p>Jag går på gymnasiet och lär mig webb.</p>\n  <h2>Tre saker jag gillar</h2>\n  <ul>\n    <li>Datorer</li>\n    <li>Musik</li>\n    <li>Spel</li>\n  </ul>\n  <p><a href=\"https://www.wikipedia.org/\">Öppna Wikipedia</a></p>\n  <img src=\"bild.jpg\" alt=\"En bild med kod\" width=\"320\">\n</body>\n</html>",
      "css": "",
      "js": ""
    },
    "solution": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min egen webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n  <h2>Om mig</h2>\n  <p>Jag går på gymnasiet och lär mig webb.</p>\n  <h2>Tre saker jag gillar</h2>\n  <ul>\n    <li>Datorer</li>\n    <li>Musik</li>\n    <li>Spel</li>\n  </ul>\n  <p><a href=\"https://www.wikipedia.org/\">Öppna Wikipedia</a></p>\n  <img src=\"bild.jpg\" alt=\"En bild med kod\" width=\"320\">\n</body>\n</html>",
      "css": "body {\n  background-color: #eef5ff;\n  color: #1e293b;\n  font-family: Arial, sans-serif;\n}\n\nh1 {\n  color: #155e75;\n}",
      "js": ""
    },
    "checks": [
      {
        "label": "Bakgrundsfärg finns",
        "tab": "css",
        "pattern": "background-color: #eef5ff"
      },
      {
        "label": "Rubrikens färg finns",
        "tab": "css",
        "pattern": "color: #155e75"
      }
    ],
    "tab": "css"
  },
  {
    "id": 8,
    "topic": "CSS",
    "title": "Skapa luft på sidan",
    "goal": "Förstå margin, padding och max-width.",
    "steps": [
      "Öppna fliken CSS.",
      "Hitta body { högst upp.",
      "Lägg till tre rader inne i body-regeln enligt uppgiften.",
      "Tryck på Visa resultat."
    ],
    "tryThis": "max-width: 680px;\nmargin: 40px auto;\npadding: 24px;",
    "expected": "Sidan blir smalare och får luft runt texten.",
    "hint": "Sätt koden före den första } i CSS.",
    "why": "max-width begränsar bredden. margin är utsida. padding är insida.",
    "starter": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min egen webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n  <h2>Om mig</h2>\n  <p>Jag går på gymnasiet och lär mig webb.</p>\n  <h2>Tre saker jag gillar</h2>\n  <ul>\n    <li>Datorer</li>\n    <li>Musik</li>\n    <li>Spel</li>\n  </ul>\n  <p><a href=\"https://www.wikipedia.org/\">Öppna Wikipedia</a></p>\n  <img src=\"bild.jpg\" alt=\"En bild med kod\" width=\"320\">\n</body>\n</html>",
      "css": "body {\n  background-color: #eef5ff;\n  color: #1e293b;\n  font-family: Arial, sans-serif;\n}\n\nh1 {\n  color: #155e75;\n}",
      "js": ""
    },
    "solution": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min egen webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n  <h2>Om mig</h2>\n  <p>Jag går på gymnasiet och lär mig webb.</p>\n  <h2>Tre saker jag gillar</h2>\n  <ul>\n    <li>Datorer</li>\n    <li>Musik</li>\n    <li>Spel</li>\n  </ul>\n  <p><a href=\"https://www.wikipedia.org/\">Öppna Wikipedia</a></p>\n  <img src=\"bild.jpg\" alt=\"En bild med kod\" width=\"320\">\n</body>\n</html>",
      "css": "body {\n  background-color: #eef5ff;\n  color: #1e293b;\n  font-family: Arial, sans-serif;\n  max-width: 680px;\n  margin: 40px auto;\n  padding: 24px;\n}\n\nh1 {\n  color: #155e75;\n}\n\np {\n  line-height: 1.6;\n}",
      "js": ""
    },
    "checks": [
      {
        "label": "Maxbredd finns",
        "tab": "css",
        "pattern": "max-width: 680px"
      },
      {
        "label": "Luft inuti finns",
        "tab": "css",
        "pattern": "padding: 24px"
      }
    ],
    "tab": "css"
  },
  {
    "id": 9,
    "topic": "HTML + CSS",
    "title": "Markera en viktig text",
    "goal": "Förstå att en klass kopplar HTML till CSS.",
    "steps": [
      "Öppna HTML och lägg till raden under Din uppgift.",
      "Byt till fliken CSS.",
      "Lägg till den lilla CSS-regeln som står nedanför.",
      "Tryck på Visa resultat."
    ],
    "tryThis": "HTML: <p class=\"viktigt\">Jag kan bygga en webbsida!</p>\n\nCSS:\n.viktigt {\n  background-color: #d9f1f4;\n  border-left: 4px solid #087f8c;\n  padding: 12px;\n}",
    "expected": "En färgad ruta med meddelandet.",
    "hint": "Klassen heter viktigt på båda ställena. I CSS börjar klassnamnet med punkt.",
    "why": "En klass kan återanvändas för att ge samma utseende till flera element.",
    "starter": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min egen webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n  <h2>Om mig</h2>\n  <p>Jag går på gymnasiet och lär mig webb.</p>\n  <h2>Tre saker jag gillar</h2>\n  <ul>\n    <li>Datorer</li>\n    <li>Musik</li>\n    <li>Spel</li>\n  </ul>\n  <p><a href=\"https://www.wikipedia.org/\">Öppna Wikipedia</a></p>\n  <img src=\"bild.jpg\" alt=\"En bild med kod\" width=\"320\">\n</body>\n</html>",
      "css": "body {\n  background-color: #eef5ff;\n  color: #1e293b;\n  font-family: Arial, sans-serif;\n  max-width: 680px;\n  margin: 40px auto;\n  padding: 24px;\n}\n\nh1 {\n  color: #155e75;\n}\n\np {\n  line-height: 1.6;\n}",
      "js": ""
    },
    "solution": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min egen webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n  <h2>Om mig</h2>\n  <p>Jag går på gymnasiet och lär mig webb.</p>\n  <h2>Tre saker jag gillar</h2>\n  <ul>\n    <li>Datorer</li>\n    <li>Musik</li>\n    <li>Spel</li>\n  </ul>\n  <p><a href=\"https://www.wikipedia.org/\">Öppna Wikipedia</a></p>\n  <img src=\"bild.jpg\" alt=\"En bild med kod\" width=\"320\">\n  <p class=\"viktigt\">Jag kan bygga en webbsida!</p>\n</body>\n</html>",
      "css": "body {\n  background-color: #eef5ff;\n  color: #1e293b;\n  font-family: Arial, sans-serif;\n  max-width: 680px;\n  margin: 40px auto;\n  padding: 24px;\n}\n\nh1 {\n  color: #155e75;\n}\n\np {\n  line-height: 1.6;\n}\n\n.viktigt {\n  background-color: #d9f1f4;\n  border-left: 4px solid #087f8c;\n  padding: 12px;\n}",
      "js": ""
    },
    "checks": [
      {
        "label": "HTML använder klassen",
        "tab": "html",
        "pattern": "class=\"viktigt\""
      },
      {
        "label": "CSS har klassen",
        "tab": "css",
        "pattern": ".viktigt"
      }
    ],
    "tab": "html"
  },
  {
    "id": 10,
    "topic": "CSS",
    "title": "Fungerar på mobil",
    "goal": "Förstå hur en bild kan anpassas till skärmens bredd.",
    "steps": [
      "Öppna fliken CSS.",
      "Lägg till regeln under Din uppgift längst ner.",
      "Visa resultatet.",
      "Gör webbläsarfönstret smalare och kontrollera bilden."
    ],
    "tryThis": "img {\n  max-width: 100%;\n  height: auto;\n}",
    "expected": "Bilden blir inte bredare än sidan när fönstret är smalt.",
    "hint": "Skriv hela img-regeln utanför andra klammerparenteser.",
    "why": "max-width: 100% betyder att bilden får använda högst tillgänglig bredd.",
    "starter": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min egen webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n  <h2>Om mig</h2>\n  <p>Jag går på gymnasiet och lär mig webb.</p>\n  <h2>Tre saker jag gillar</h2>\n  <ul>\n    <li>Datorer</li>\n    <li>Musik</li>\n    <li>Spel</li>\n  </ul>\n  <p><a href=\"https://www.wikipedia.org/\">Öppna Wikipedia</a></p>\n  <img src=\"bild.jpg\" alt=\"En bild med kod\" width=\"320\">\n  <p class=\"viktigt\">Jag kan bygga en webbsida!</p>\n</body>\n</html>",
      "css": "body {\n  background-color: #eef5ff;\n  color: #1e293b;\n  font-family: Arial, sans-serif;\n  max-width: 680px;\n  margin: 40px auto;\n  padding: 24px;\n}\n\nh1 {\n  color: #155e75;\n}\n\np {\n  line-height: 1.6;\n}\n\n.viktigt {\n  background-color: #d9f1f4;\n  border-left: 4px solid #087f8c;\n  padding: 12px;\n}",
      "js": ""
    },
    "solution": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min egen webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n  <h2>Om mig</h2>\n  <p>Jag går på gymnasiet och lär mig webb.</p>\n  <h2>Tre saker jag gillar</h2>\n  <ul>\n    <li>Datorer</li>\n    <li>Musik</li>\n    <li>Spel</li>\n  </ul>\n  <p><a href=\"https://www.wikipedia.org/\">Öppna Wikipedia</a></p>\n  <img src=\"bild.jpg\" alt=\"En bild med kod\" width=\"320\">\n  <p class=\"viktigt\">Jag kan bygga en webbsida!</p>\n</body>\n</html>",
      "css": "body {\n  background-color: #eef5ff;\n  color: #1e293b;\n  font-family: Arial, sans-serif;\n  max-width: 680px;\n  margin: 40px auto;\n  padding: 24px;\n}\n\nh1 {\n  color: #155e75;\n}\n\np {\n  line-height: 1.6;\n}\n\n.viktigt {\n  background-color: #d9f1f4;\n  border-left: 4px solid #087f8c;\n  padding: 12px;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}",
      "js": ""
    },
    "checks": [
      {
        "label": "Bildbredd anpassas",
        "tab": "css",
        "pattern": "max-width: 100%"
      },
      {
        "label": "Höjden anpassas",
        "tab": "css",
        "pattern": "height: auto"
      }
    ],
    "tab": "css"
  },
  {
    "id": 11,
    "topic": "JavaScript · Bonus",
    "title": "En knapp som reagerar",
    "goal": "Se vad JavaScript gör när man klickar.",
    "steps": [
      "Öppna fliken HTML och lägg till knappen och det tomma stycket.",
      "Öppna fliken JavaScript.",
      "Skriv JavaScript-koden under Din uppgift.",
      "Tryck Visa resultat och sedan på knappen i förhandsvisningen."
    ],
    "tryThis": "HTML:\n<button id=\"hejKnapp\">Tryck här</button>\n<p id=\"svar\"></p>\n\nJavaScript:\nconst knapp = document.querySelector(\"#hejKnapp\");\nconst svar = document.querySelector(\"#svar\");\nknapp.addEventListener(\"click\", () => {\n  svar.textContent = \"Det fungerar!\";\n});",
    "expected": "När du klickar på knappen visas ”Det fungerar!”.",
    "hint": "Var noga med att hejKnapp och svar stavas exakt likadant i HTML och JavaScript.",
    "why": "JavaScript kan få en webbsida att reagera. addEventListener lyssnar efter klick.",
    "starter": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min egen webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n  <h2>Om mig</h2>\n  <p>Jag går på gymnasiet och lär mig webb.</p>\n  <h2>Tre saker jag gillar</h2>\n  <ul>\n    <li>Datorer</li>\n    <li>Musik</li>\n    <li>Spel</li>\n  </ul>\n  <p><a href=\"https://www.wikipedia.org/\">Öppna Wikipedia</a></p>\n  <img src=\"bild.jpg\" alt=\"En bild med kod\" width=\"320\">\n  <p class=\"viktigt\">Jag kan bygga en webbsida!</p>\n</body>\n</html>",
      "css": "body {\n  background-color: #eef5ff;\n  color: #1e293b;\n  font-family: Arial, sans-serif;\n  max-width: 680px;\n  margin: 40px auto;\n  padding: 24px;\n}\n\nh1 {\n  color: #155e75;\n}\n\np {\n  line-height: 1.6;\n}\n\n.viktigt {\n  background-color: #d9f1f4;\n  border-left: 4px solid #087f8c;\n  padding: 12px;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}",
      "js": ""
    },
    "solution": {
      "html": "<!DOCTYPE html>\n<html lang=\"sv\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Min webbsida</title>\n</head>\n<body>\n  <h1>Min egen webbsida</h1>\n  <p>Jag lär mig HTML.</p>\n  <h2>Om mig</h2>\n  <p>Jag går på gymnasiet och lär mig webb.</p>\n  <h2>Tre saker jag gillar</h2>\n  <ul>\n    <li>Datorer</li>\n    <li>Musik</li>\n    <li>Spel</li>\n  </ul>\n  <p><a href=\"https://www.wikipedia.org/\">Öppna Wikipedia</a></p>\n  <img src=\"bild.jpg\" alt=\"En bild med kod\" width=\"320\">\n  <p class=\"viktigt\">Jag kan bygga en webbsida!</p>\n  <button id=\"hejKnapp\">Tryck här</button>\n  <p id=\"svar\"></p>\n</body>\n</html>",
      "css": "body {\n  background-color: #eef5ff;\n  color: #1e293b;\n  font-family: Arial, sans-serif;\n  max-width: 680px;\n  margin: 40px auto;\n  padding: 24px;\n}\n\nh1 {\n  color: #155e75;\n}\n\np {\n  line-height: 1.6;\n}\n\n.viktigt {\n  background-color: #d9f1f4;\n  border-left: 4px solid #087f8c;\n  padding: 12px;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}",
      "js": "const knapp = document.querySelector(\"#hejKnapp\");\nconst svar = document.querySelector(\"#svar\");\n\nknapp.addEventListener(\"click\", () => {\n  svar.textContent = \"Det fungerar!\";\n});"
    },
    "checks": [
      {
        "label": "Knapp finns",
        "tab": "html",
        "pattern": "id=\"hejKnapp\""
      },
      {
        "label": "Lyssnar på klick",
        "tab": "js",
        "pattern": "addEventListener"
      },
      {
        "label": "Text visas",
        "tab": "js",
        "pattern": "textContent"
      }
    ],
    "tab": "js"
  }
];
