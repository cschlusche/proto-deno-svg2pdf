import { jsPDF } from 'npm:jspdf@2.5.1'
import 'svg2pdf.js_deno'
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

// SVG data to be converted into PDF document
const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="red" />
<circle cx="150" cy="100" r="80" fill="green" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`;

// Create HTML document and embed the SVG element to meet the API of svg2pdf.js
const dom = new DOMParser().parseFromString(`<html><head></head><body></body></html>`, 'text/html');
const svgElement = dom.createElement('svg')
svgElement.innerHTML = svg

// Initialize jsPDF document
const doc = new jsPDF(
    {
        orientation:'landscape',
        unit:'mm',
        format: [85, 54],
        putOnlyUsedFonts: true,
    }
    );
    
    // Parse SVG elements and convert into instructions for jsPDF
    doc.svg(svgElement, {x:0, y:0, width:85, height:54, loadExternalStyleSheets: false, compressBitmaps: 'FAST'})  // (compressBitmaps parameter still specific to fork)
    .then(() => {
        let exportPath = 'product.pdf'
        doc.save(exportPath)
        
        console.log(`Look at ${exportPath}`)
    })
    .catch((error) => {
        console.error(`${error.name}`)
        console.error(`${error.message}`)
        console.error(`${error.stack}`)
    });