An example illustrating the challenges on how to convert SVG to PDF on a Deno server:
The environment is not a browser but a Deno server.
We use svg2pdf.js (extends jsPDF) to generate and store the resulting PDF document.

## Dependencies:
- [jsPDF](https://github.com/parallax/jsPDF)
- [svg2pdf.js](https://github.com/yWorks/svg2pdf.js), made work-in-progress modifications to run on Deno [feat-context-deno](https://github.com/cschlusche/svg2pdf.js/blob/feat-context-deno/dist/svg2pdf.es.js) (compiled JS only)
- [Deno DOM](https://github.com/b-fuze/deno-dom), made work-in-progress modifications to read SVG namespace [feat-namespace-svg](https://github.com/cschlusche/deno-dom/tree/feat-namespace-svg)

## Running the script:
```
deno run --allow-all main.ts
```