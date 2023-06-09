const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shapes.js');
const SVG = require('./svg.js');
const { writeFile } = require("fs/promises");


class CLI {
    run () {
        return inquirer.prompt([
            {
                type: "input",
                message: "Enter logo text. Must not exceed 3 characters.",
                name: "text",
                // validate text is not more than 3 characters
                validate: (input) => {
                    if ((input.length > 3) || (input.length < 1)) { 
                        return "Text must be at least 1 character and no greater than 3 characters"}
                    else {return true}
                }
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
            // code for each shape type - modified from https://www.w3schools.com/js/js_switch.asp
            switch(shapeType) {
                case "Square":
                  shape = new Square();
                  break;
                case "Triangle":
                  shape = new Triangle();
                  break;
                default:
                  shape = new Circle();
              }
              console.log(shape, shapeType);
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
        .catch((err) => {
            console.log(err);
            console.log('Oops. Something went wrong.');
          });
        
    }
}

module.exports = CLI;