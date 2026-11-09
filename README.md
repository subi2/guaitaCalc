<!--
  Guaita Apps - Suite d'eines autònomes per a arquitectura, BIM i documentació.
  Copyright (c) 2026 Jordi Subirós · SBS BiM Consulting
  SPDX-License-Identifier: AGPL-3.0-only
-->
# guaitaCalc v0.7.1

[Català](#català) · [English](#english) · Llicència / License: **AGPL-3.0-only** · © SBS BiM Consulting, Jordi Subirós

---

## Català

Calculadora científica i de fórmules d'**arquitectura, estructures, urbanisme, CO₂, energia i economia**, de la suite *Guaita Apps*. Un sol fitxer HTML autònom (JavaScript pur, sense CDN, tipus de lletra incrustats), instal·lable com a **PWA** i funcional sense connexió. Tot el càlcul es fa localment al navegador.

### Característiques
- Calculadora algebraica i RPN, DEG/RAD/GRAD, teclats bàsic/científic/avançat, constants, memòria i cinta d'historial amb subtotal.
- **67 fórmules** en capítols desplegables amb cercador (`Ctrl+K`): Estructures (25), Economia i comptabilitat (20), Urbanisme (10), CO₂ i energia (7), Altres (5); capítol «CTE per DB».
- Unitats canviables, traça de càlcul (Markdown/LaTeX), sensibilitat, llibreta de càlculs (Markdown/JSON), preferides, còpia, exportació i impressió/PDF.
- Solucionador d'equacions i gràfica de funcions.
- Importació de factors de CO₂ (CSV, BC3); exemple: [`exemple_factors_CO2.csv`](exemple_factors_CO2.csv).
- Aspectes (skins), mode projector (`F8`), so de tecles, interfície **CA / EN**.
- Novetats v0.7: valors CTE verificats amb els PDF oficials; noves fórmules (zona climàtica Anejo B, DB-HE1 Klim, neu sk de capitals i qn, DB-SUA 1 barana); perfils IPN, HEA, HEM i UPN 320–400 (derivats del prontuari ArcelorMittal 2023); importació del CSV d'ÖKOBAUDAT 2024 (codificació Windows-1252); enllaç de patrocini a la pantalla de càlcul i a «Quant a»; v0.7.1: sense zoom per doble toc a iPhone.
- Des de la v0.6: DB-HE5 potència FV mínima, DB-HE1 Ulim, vent qe (DB-SE-AE), DB-SUA 1 escales i rampes.

### Ús
- **Landing:** [`index.html`](index.html) (enllaça a la versió CAT i ENG i a les ajudes).
- **Català:** [`pagesCAT/guaitaCalc_0.7.1.html`](pagesCAT/guaitaCalc_0.7.1.html) · ajuda: [`pagesCAT/HLP guaitaCalc-ajuda.html`](pagesCAT/HLP%20guaitaCalc-ajuda.html)
- **PWA:** serveix el repositori per HTTPS (p. ex. GitHub Pages: *Settings › Pages › main / root*) i instal·la l'app des del navegador. Els manifests i els *service workers* són dins de `pagesCAT/` i `pagesENG/`.
- També es pot obrir directament el fitxer HTML des del disc (sense instal·lació PWA).

### Estructura
```
index.html                 landing (CAT/ENG)
README.md  LICENSE         documentació i llicència AGPL-3.0-only
pagesCAT/                  app, ajuda, manifest, sw.js i icones (català)
pagesENG/                  app, ajuda, manifest, sw.js i icones (anglès)
SPONSORS.md CONTRIBUTING.md patrocini i contribucions
exemple_factors_CO2.csv    exemple d'importació de factors CO₂
```

### Limitacions normatives
Predimensionat **orientatiu**. Els valors CTE de la v0.7 s'han verificat amb els PDF subministrats (DB-HE 14/06/2022, DB-SE-AE d'abril de 2009 —no la vigent—, DB-SUA 2022/2024). Els perfils IPN, HEA, HEM i UPN 320–400 són derivats (Iy ≤ 1 %, Iz ≤ 3,3 %). No inclou la taula b de zones ni l'Annex E de neu. Cada fórmula mostra la referència i les seves limitacions. Contrasta sempre amb el CTE vigent.

### Patrocini i contribucions
♥ Si t'és útil, pots [patrocinar el projecte i contribuir-hi](SPONSORS.md). Vegeu també [`CONTRIBUTING.md`](CONTRIBUTING.md).

### Llicència i autoria
© 2026 **SBS BiM Consulting, Jordi Subirós**. Programari lliure sota la **GNU Affero General Public License v3.0 només** (`AGPL-3.0-only`, sense «o versions posteriors»). Text complet a [`LICENSE`](LICENSE). Si el serveixes per xarxa, l'AGPL §13 exigeix oferir el codi font als usuaris (l'app enllaça a aquest repositori des de «Quant a»).

> Guaita Apps es distribueix «tal com és», sense cap garantia. Les eines estan pensades desde la recerca i com a suport tècnic i educatiu; la verificació dels resultats i la responsabilitat derivada del seu ús recauen únicament sobre l'usuari final.

---

## English

Scientific calculator with formulas for **architecture, structures, urban planning, CO₂, energy and economics**, part of the *Guaita Apps* suite. A single self-contained HTML file (vanilla JavaScript, no CDN, embedded fonts), installable as a **PWA** and fully functional offline. All calculation runs locally in the browser.

### Features
- Algebraic and RPN calculator, DEG/RAD/GRAD, basic/scientific/advanced keypads, constants, memory and history tape with subtotal.
- **67 formulas** in collapsible chapters with search (`Ctrl+K`): Structures (25), Economics and accounting (20), Urban planning (10), CO₂ and energy (7), Other (5); “CTE by DB” chapter.
- Unit switching, calculation trace (Markdown/LaTeX), sensitivity, notebook (Markdown/JSON), favourites, copy, export and print/PDF.
- Equation solver and function plotter.
- CO₂ factor import (CSV, BC3); sample: [`exemple_factors_CO2.csv`](exemple_factors_CO2.csv).
- Skins, projector mode (`F8`), key sounds, **CA / EN** interface.
- New in v0.7: CTE values checked against the official PDFs; new formulas (Annex B climate zone, DB-HE1 Klim, snow sk of capitals and qn, DB-SUA 1 guard height); IPN, HEA, HEM and UPN 320–400 profiles (derived from the ArcelorMittal 2023 handbook); ÖKOBAUDAT 2024 CSV import (Windows-1252 encoding); sponsor link on the calculator screen and in About; v0.7.1: no double-tap zoom on iPhone.
- Since v0.6: DB-HE5 minimum PV power, DB-HE1 Ulim, wind qe (DB-SE-AE), DB-SUA 1 stairs and ramps.

### Usage
- **Landing:** [`index.html`](index.html) (links to the CAT and ENG versions and help).
- **English:** [`pagesENG/guaitaCalc_0.7.1.html`](pagesENG/guaitaCalc_0.7.1.html) · help: [`pagesENG/HLP guaitaCalc-ajuda.html`](pagesENG/HLP%20guaitaCalc-ajuda.html)
- **PWA:** serve the repository over HTTPS (e.g. GitHub Pages: *Settings › Pages › main / root*) and install the app from the browser. Manifests and service workers live inside `pagesCAT/` and `pagesENG/`.
- You can also open the HTML file directly from disk (no PWA install).

### Structure
```
index.html                 landing (CAT/ENG)
README.md  LICENSE         documentation and AGPL-3.0-only license
pagesCAT/                  app, help, manifest, sw.js and icons (Catalan)
pagesENG/                  app, help, manifest, sw.js and icons (English)
SPONSORS.md CONTRIBUTING.md sponsors and contributions
exemple_factors_CO2.csv    CO₂ factor import sample
```

### Regulatory limitations
**Indicative** preliminary sizing. CTE values in v0.7 were checked against the supplied PDFs (DB-HE 14/06/2022, DB-SE-AE April 2009 —not the current edition—, DB-SUA 2022/2024). IPN, HEA, HEM and UPN 320–400 profiles are derived (Iy ≤ 1 %, Iz ≤ 3.3 %). Table b of zones and the snow Annex E are not included. Each formula shows its reference and limitations. Always check against the current code.

### Sponsors and contributions
♥ If it is useful to you, you can [sponsor the project and contribute](SPONSORS.md). See also [`CONTRIBUTING.md`](CONTRIBUTING.md).

### License and authorship
© 2026 **SBS BiM Consulting, Jordi Subirós**. Free software under the **GNU Affero General Public License v3.0 only** (`AGPL-3.0-only`, no “or any later version”). Full text in [`LICENSE`](LICENSE). If you serve it over a network, AGPL §13 requires offering the source to users (the app links to this repository from “About”).

> Guaita Apps is distributed “as is”, without any warranty. The tools are designed from research and as technical and educational support; verification of the results and responsibility arising from their use rest solely with the end user.
