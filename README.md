# Mattesteg

Første prototype for gratis øving i grunnleggende matematikk. Åpne `dist/index.html` direkte, eller kjør `node preview.cjs` og åpne http://localhost:4173.

Seks temaer, seks oppgaver per økt, kort kartlegging, visuell hjelp, hint, opplesning, enklere oppgaver, søkbart forklaringsbibliotek og foresattevisning. Fornavn, figur og fremgang lagres i localStorage på enheten; én elevprofil foreløpig. Ingen eksterne biblioteker, fonter eller analyseverktøy.

Riktige førstesvar uten bilde/hint regnes som selvstendige svar. Feilsvar gjør resten av oppgaven støttet. «Godt på vei» krever seks selvstendige svar fordelt på to spørsmålsvarianter; dette er en enkel progresjonsindikator, ikke dokumentert mestring. Kartleggingen gir bare ett innledende forslag med én oppgave per tema. Faglig kvalitetssikring og utprøving med elever gjenstår.

Kjør `node checks.cjs` for kontroller av oppgavegeneratoren.

## Publisering på Vercel

Importer GitHub-repositoriet `RSTUV8/mattesteg` i Vercel og bruk `main` som produksjonsgren. La Root Directory være prosjektroten (ikke `dist`). `vercel.json` setter Framework Preset til Other, hopper over installasjon og bygging og publiserer filene i `dist`. Ingen miljøvariabler eller database er nødvendig for denne versjonen.

Appen bruker ikke Sites-innlogging; innloggingskravet i den private Sites-prototypen kommer fra vertstjenesten. Tilgang til Vercel-versjonen styres av Vercel-prosjektets egne innstillinger. Lokal fremgang følger nettadressen og nettleseren, og flyttes ikke automatisk fra Sites til Vercel.

Konfigurasjonsreferanse: https://vercel.com/docs/project-configuration/vercel-json

Neste utvikling: flere oppgavetyper (dra/plasser/bygg), feilanalyse og alternative forklaringer, repetisjon etter tid, flere lokale elevprofiler, kvalitetssikret innhold koblet til LK20 og senere semesterprøver. Publisert prototype er privat; det planlagte læringsverktøyet skal være gratis for elever.
