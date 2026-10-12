# Mattesteg

[![CI](https://github.com/RSTUV8/mattesteg/actions/workflows/ci.yml/badge.svg)](https://github.com/RSTUV8/mattesteg/actions/workflows/ci.yml)

Forfatter: **GeirR.**

Første prototype for gratis øving i grunnleggende matematikk. Åpne `dist/index.html` direkte, eller kjør `node preview.cjs` og åpne http://localhost:4173.

Seks temaer, seks oppgaver per økt, kort kartlegging, visuell hjelp, hint, opplesning, enklere oppgaver, søkbart forklaringsbibliotek og foresattevisning. Fornavn, figur og fremgang lagres i localStorage på enheten; én elevprofil foreløpig. Ingen eksterne biblioteker, fonter eller analyseverktøy.

Riktige førstesvar uten bilde/hint regnes som selvstendige svar. Feilsvar gjør resten av oppgaven støttet. «Godt på vei» krever seks selvstendige svar fordelt på to spørsmålsvarianter; dette er en enkel progresjonsindikator, ikke dokumentert mestring. Kartleggingen gir bare ett innledende forslag med én oppgave per tema. Faglig kvalitetssikring og utprøving med elever gjenstår.

Kjør `node checks.cjs` for kontroller av oppgavegeneratoren.

## Publisering på Vercel

Importer GitHub-repositoriet `RSTUV8/mattesteg` i Vercel og bruk `main` som produksjonsgren. La Root Directory være prosjektroten (ikke `dist`). `vercel.json` setter Framework Preset til Other, hopper over installasjon, kjører `node ci.cjs` som byggkommando og publiserer filene i `dist` bare dersom kontrollene består. Ingen miljøvariabler eller database er nødvendig for denne versjonen.

Appen bruker ikke Sites-innlogging; innloggingskravet i den private Sites-prototypen kommer fra vertstjenesten. Tilgang til Vercel-versjonen styres av Vercel-prosjektets egne innstillinger. Lokal fremgang følger nettadressen og nettleseren, og flyttes ikke automatisk fra Sites til Vercel.

Konfigurasjonsreferanse: https://vercel.com/docs/project-configuration/vercel-json

## CI/CD

GitHub Actions kjører `node ci.cjs` ved push til `main`, ved pull requests mot `main` og ved manuell oppstart. Kontrollen sjekker JavaScript-syntaks, 6 000 reproduserbare matematikkoppgaver, Vercel-konfigurasjonen og at startsidefilene finnes. Kjør samme kommando lokalt før push.

Vercels GitHub-integrasjon håndterer forhåndsvisninger og produksjonspublisering når repositoriet er koblet til et Vercel-prosjekt. Vercel kjører kontrollene selv, slik at en feilet kontroll stopper den aktuelle publiseringen også uten beskyttet gren i GitHub. Workflowen trenger ingen hemmeligheter eller Vercel-token. Actions-versjoner er festet til commit-SHA; Dependabot foreslår oppdateringer månedlig.

Anbefalt GitHub-regel for `main`: krev pull request og statuskontrollen **Kontroller Mattesteg** før sammenslåing. Regelen må aktiveres i repositoriets innstillinger; workflowfilen alene hindrer ikke direkte push eller sammenslåing. CI erstatter ikke faglig kvalitetssikring eller testing med elever.

Neste utvikling: flere oppgavetyper (dra/plasser/bygg), feilanalyse og alternative forklaringer, repetisjon etter tid, flere lokale elevprofiler, kvalitetssikret innhold koblet til LK20 og senere semesterprøver. Publisert prototype er privat; det planlagte læringsverktøyet skal være gratis for elever.
