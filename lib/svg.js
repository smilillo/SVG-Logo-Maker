class SVG {
    constructor() {
        this.textEl = "";
        this.shapeEl = "";
    }
}

// Render SVG
render() {
    // Code modified from https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
}

setText() {
    this.textEl = `<text x="" y="" font-size="" text-anchor="middle" fill=""></text>`
}

setShape() {
    // Renders shape from shapes.js
    this.shapeEl = shape.render();
}

module.exports = SVG;