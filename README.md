<!--
  Guaita Apps - Suite d'eines autònomes per a arquitectura, BIM i documentació.
  Copyright (c) 2026 Jordi Subirós · SBS BiM Consulting
  SPDX-License-Identifier: AGPL-3.0-only
-->
# guaitaCalc v0.6

[Català](#català) · [English](#english) · Llicència / License: **AGPL-3.0-only** · © SBS BiM Consulting, Jordi Subirós

---

## Català

Calculadora científica i de fórmules d'**arquitectura, estructures, urbanisme, CO₂, energia i economia**, de la suite *Guaita Apps*. Un sol fitxer HTML autònom (JavaScript pur, sense CDN, tipus de lletra incrustats), instal·lable com a **PWA** i funcional sense connexió. Tot el càlcul es fa localment al navegador.

### Característiques
- Calculadora algebraica i RPN, DEG/RAD/GRAD, teclats bàsic/científic/avançat, constants, memòria i cinta d'historial amb subtotal.
- **63 fórmules** en capítols desplegables amb cercador (`Ctrl+K`): Estructures (24), Economia i comptabilitat (20), Urbanisme (10), CO₂ i energia (5), Altres (4); capítol «CTE per DB».
- Unitats canviables, traça de càlcul (Markdown/LaTeX), sensibilitat, llibreta de càlculs (Markdown/JSON), preferides, còpia, exportació i impressió/PDF.
- Solucionador d'equacions i gràfica de funcions.
- Importació de factors de CO₂ (CSV, BC3); exemple: [`exemple_factors_CO2.csv`](exemple_factors_CO2.csv).
- Aspectes (skins), mode projector (`F8`), so de tecles, interfície **CA / EN**.
- Novetats v0.6 (CTE, opcionals i amb limitacions documentades): DB-HE5 potència FV mínima, DB-HE1 Ulim, vent qe (DB-SE-AE), DB-SUA 1 escales i rampes.

### Ús
- **Landing:** [`index.html`](index.html) (enllaça a la versió CAT i ENG i a les ajudes).
- **Català:** [`pagesCAT/guaitaCalc_0.6.html`](pagesCAT/guaitaCalc_0.6.html) · ajuda: [`pagesCAT/HLP guaitaCalc-ajuda.html`](pagesCAT/HLP%20guaitaCalc-ajuda.html)
- **PWA:** serveix el repositori per HTTPS (p. ex. GitHub Pages: *Settings › Pages › main / root*) i instal·la l'app des del navegador. Els manifests i els *service workers* són dins de `pagesCAT/` i `pagesENG/`.
- També es pot obrir directament el fitxer HTML des del disc (sense instal·lació PWA).

### Estructura
```
index.html                 landing (CAT/ENG)
README.md  LICENSE         documentació i llicència AGPL-3.0-only
pagesCAT/                  app, ajuda, manifest, sw.js i icones (català)
pagesENG/                  app, ajuda, manifest, sw.js i icones (anglès)
exemple_factors_CO2.csv    exemple d'importació de factors CO₂
```

### Limitacions normatives
Predimensionat **orientatiu**. Els valors CTE s'han llegit a través de resums i còpies de tercers, no dels PDF oficials. No inclou Klim, la taula de zones climàtiques (entrada manual), el DB-SE-AE vigent (s'usa la còpia del 2009) ni els canvis del DB-SUA de 2022 i 2024. Cada fórmula mostra la referència i les seves limitacions. Contrasta sempre amb el CTE vigent.

### Llicència i autoria
© 2026 **SBS BiM Consulting, Jordi Subirós**. Programari lliure sota la **GNU Affero General Public License v3.0 només** (`AGPL-3.0-only`, sense «o versions posteriors»). Text complet a [`LICENSE`](LICENSE). Si el serveixes per xarxa, l'AGPL §13 exigeix oferir el codi font als usuaris (l'app enllaça a aquest repositori des de «Quant a»).

> Guaita Apps es distribueix «tal com és», sense cap garantia. Les eines estan pensades desde la recerca i com a suport tècnic i educatiu; la verificació dels resultats i la responsabilitat derivada del seu ús recauen únicament sobre l'usuari final.

---

## English

Scientific calculator with formulas for **architecture, structures, urban planning, CO₂, energy and economics**, part of the *Guaita Apps* suite. A single self-contained HTML file (vanilla JavaScript, no CDN, embedded fonts), installable as a **PWA** and fully functional offline. All calculation runs locally in the browser.

### Features
- Algebraic and RPN calculator, DEG/RAD/GRAD, basic/scientific/advanced keypads, constants, memory and history tape with subtotal.
- **63 formulas** in collapsible chapters with search (`Ctrl+K`): Structures (24), Economics and accounting (20), Urban planning (10), CO₂ and energy (5), Other (4); “CTE by DB” chapter.
- Unit switching, calculation trace (Markdown/LaTeX), sensitivity, notebook (Markdown/JSON), favourites, copy, export and print/PDF.
- Equation solver and function plotter.
- CO₂ factor import (CSV, BC3); sample: [`exemple_factors_CO2.csv`](exemple_factors_CO2.csv).
- Skins, projector mode (`F8`), key sounds, **CA / EN** interface.
- New in v0.6 (CTE, optional, with documented limitations): DB-HE5 minimum PV power, DB-HE1 Ulim, wind qe (DB-SE-AE), DB-SUA 1 stairs and ramps.

### Usage
- **Landing:** [`index.html`](index.html) (links to the CAT and ENG versions and help).
- **English:** [`pagesENG/guaitaCalc_0.6.html`](pagesENG/guaitaCalc_0.6.html) · help: [`pagesENG/HLP guaitaCalc-ajuda.html`](pagesENG/HLP%20guaitaCalc-ajuda.html)
- **PWA:** serve the repository over HTTPS (e.g. GitHub Pages: *Settings › Pages › main / root*) and install the app from the browser. Manifests and service workers live inside `pagesCAT/` and `pagesENG/`.
- You can also open the HTML file directly from disk (no PWA install).

### Structure
```
index.html                 landing (CAT/ENG)
README.md  LICENSE         documentation and AGPL-3.0-only license
pagesCAT/                  app, help, manifest, sw.js and icons (Catalan)
pagesENG/                  app, help, manifest, sw.js and icons (English)
exemple_factors_CO2.csv    CO₂ factor import sample
```

### Regulatory limitations
**Indicative** preliminary sizing. CTE values were read from summaries and third-party copies, not from the official PDFs. Not included: Klim, the climatic-zone table (manual input), the current DB-SE-AE (a 2009 copy is used) and the 2022 and 2024 DB-SUA changes. Each formula shows its reference and limitations. Always check against the current code.

### License and authorship
© 2026 **SBS BiM Consulting, Jordi Subirós**. Free software under the **GNU Affero General Public License v3.0 only** (`AGPL-3.0-only`, no “or any later version”). Full text in [`LICENSE`](LICENSE). If you serve it over a network, AGPL §13 requires offering the source to users (the app links to this repository from “About”).

> Guaita Apps is distributed “as is”, without any warranty. The tools are designed from research and as technical and educational support; verification of the results and responsibility arising from their use rest solely with the end user.
