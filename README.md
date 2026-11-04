# Webbverkstaden – webbutveckling från noll

Ett nybörjarpaket på svenska med **10 korta HTML/CSS-pass, ett bonuspass i JavaScript och en PDF**.

**Kan köras lokalt, helt offline.** Ingen inloggning, installation, kodserver eller internetanslutning behövs för övningarna. Länkar till externa webbsidor kräver förstås internet för att öppnas.

## Kom igång på 30 sekunder

1. Ladda ned repot som ZIP: **Code → Download ZIP**.
2. Packa upp ZIP-filen (högerklicka → Extrahera alla).
3. Dubbelklicka på **`starta-har.html`**.
4. Välj **Pass 1**, läs ett steg och prova att ändra koden.
5. Klicka på **Visa resultat** och sedan **Kontrollera**.

Gör gärna bara ett pass i taget. Koden i den interaktiva verkstaden sparas i webbläsarens lokala lagring på samma dator, om den funktionen är tillgänglig. Om webbläsardata rensas kan koden försvinna. Använd **Spara min webbsida** för att behålla en separat HTML-fil.

## Vad finns i paketet?

| Fil/mapp | Vad den används till |
|---|---|
| `starta-har.html` | Interaktiv verkstad med kodruta och förhandsvisning |
| `pdf/Anton_webbutveckling_steg_for_steg.pdf` | Illustrerat steg-för-steg-häfte, 23 sidor |
| `min-webb/` | Enkel webbplats att redigera i t.ex. Visual Studio Code |
| `facit/` | Färdig webbplats med HTML, CSS och JavaScript |
| `assets/` | Filer som används av verkstaden |

## Arbeta med filerna i VS Code (alternativ till verkstaden)

1. Öppna mappen **`min-webb`** i VS Code.
2. Öppna `index.html` i webbläsaren genom att dubbelklicka på den.
3. Läs PDF-häftet och börja med pass 2; pass 1 är redan klart.
4. Ändra koden, tryck **Ctrl+S** (Mac: Cmd+S) och ladda om webbläsaren med **Ctrl+R** (Mac: Cmd+R).
5. Bilden `bild.jpg` finns redan i mappen till pass 6. Skapa själv `style.css` i pass 7 och `script.js` i bonuspasset.

Det går bra att testa i verkstaden först och sedan göra samma sak i filerna.

## Felsökning

- **Inget händer i verkstaden:** Öppna `starta-har.html`, inte bara någon fil i `assets`. Prova i en modern webbläsare som Chrome, Edge eller Firefox.
- **Jag ser ingen ändring:** Klicka på **Visa resultat**.
- **Det ser rätt ut men snabbkontrollen säger nej:** Kontrollera exakt stavning mot uppgiften. Snabbkontrollen är förenklad.
- **JavaScript-knappen fungerar inte:** Kontrollera att elementen i HTML har `id="hejKnapp"` och `id="svar"`.
- **Jag vill börja om på ett pass:** Klicka på **Börja om detta pass** längst ned på sidan. Du får tillbaka startkoden för det passet.

## Integritet och säkerhet

Koden körs i webbläsaren. Verkstaden skickar inte elevuppgifter till en server och använder inga externa JavaScript-bibliotek. Förhandsvisningen körs i en isolerad iframe. Övningspaketet innehåller inte personnummer, betyg eller andra känsliga elevuppgifter.

## Ladda ner från GitHub

Öppna [webbutveckling-fran-noll](https://github.com/happelfeldt/webbutveckling-fran-noll) och välj **Code → Download ZIP**. Packa upp filerna och dubbelklicka på `starta-har.html`.

Paketet är gratis att ladda ner och fungerar utan installation. Om du vill ändra övningarna kan du även öppna mappen `min-webb` i VS Code.
