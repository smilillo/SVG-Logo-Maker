const inquirer = require('inquirer');
const Circle = require('./shapes.js');
const Triangle = require('./shapes.js');
const Square = require('./shapes.js');
const SVG = require('./svg.js');


class CLI {
    run () {
        return inquirer.prompt([
            {
                type: "input",
                message: "Enter logo text. Must not exceed 3 characters.",
                name: "text",
                // validate text is not more than 3 characters
            },
            {
                type: "input",
                message: "Enter color keyword or hexadecimal for text color.",
                name: "textColor",
                // validate hexadecimal/color keyword
            },
            {
                type: "list",
                message: "Choose a logo shape from list.",
                name: "shapeType",
                choices: [
                    "Circle",
                    "Triangle",
                    "Square"
                ]
            },
            {
                type: "input",
                message: "Enter color keyword or hexadecimal for shape color.",
                name: "shapeColor",
                // validate hexadecimal/color keyword
            },
        ])
        .then(({text, textColor, shapeType, shapeColor}) => {
            let shape;
            // code for each shape type
            shape.setColor(shapeColor);
            // set text and textColor in SVG Object
            const svg = new SVG();
            svg.setText(text, textColor);
            // set shape in SVG Object
            svg.setShape(shape);
            // writeFile
            return writeFile("logo.svg", svg.render());
        })
        .then(() => {console.log("Generated logo.svg");})
        
    }
}

module.exports = CLI;