class SVG {
    constructor() {
        this.textEl = "";
        this.shapeEl = "";
    }
// Render SVG
render() {
    // Code modified from https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
}

setText(text, textColor) {
    if (text.length > 3 || text.length < 1) {
        throw new Error("Text must be at least 1 character and no greater than 3 characters")
    }
    this.textEl = `<text x="150" y="125" font-size="60px" text-anchor="middle" fill="${textColor}">${text}</text>`;
}

setShape(shape) {
    // Renders shape from shapes.js
    this.shapeEl = shape.render();
}

}

module.exports = SVG;