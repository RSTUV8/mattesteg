# Mattesteg

Første prototype for gratis øving i grunnleggende matematikk. Åpne `dist/index.html` direkte, eller kjør `node preview.cjs` og åpne http://localhost:4173.

Seks temaer, seks oppgaver per økt, kort kartlegging, visuell hjelp, hint, opplesning, enklere oppgaver, søkbart forklaringsbibliotek og foresattevisning. Fornavn, figur og fremgang lagres i localStorage på enheten; én elevprofil foreløpig. Ingen eksterne biblioteker, fonter eller analyseverktøy.

Riktige førstesvar uten bilde/hint regnes som selvstendige svar. Feilsvar gjør resten av oppgaven støttet. «Godt på vei» krever seks selvstendige svar fordelt på to spørsmålsvarianter; dette er en enkel progresjonsindikator, ikke dokumentert mestring. Kartleggingen gir bare ett innledende forslag med én oppgave per tema. Faglig kvalitetssikring og utprøving med elever gjenstår.

Kjør `node checks.cjs` for kontroller av oppgavegeneratoren.

Neste utvikling: flere oppgavetyper (dra/plasser/bygg), feilanalyse og alternative forklaringer, repetisjon etter tid, flere lokale elevprofiler, kvalitetssikret innhold koblet til LK20 og senere semesterprøver. Publisert prototype er privat; det planlagte læringsverktøyet skal være gratis for elever.
