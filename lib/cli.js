const inquirer = require('inquirer');

class CLI {
    run () {
        inquirer.prompt([
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
            // set text
            // set textColor
            // writeFile
        }
        )
    }
}