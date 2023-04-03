const inquirer = require('inquirer');

class CLI {
    run () {
        inquirer.prompt([
            {
                type: "input",
                message: "Enter logo text. Must not exceed 3 characters.",
                name: "text",
            },
            {
                type: "input",
                message: "Enter color keyword or hexadecimal for text color.",
                name: "textColor",
            },
            {
                type: "list",
                message: "Choose a logo shape from list.",
                name: "shape",
            },
            {
                type: "input",
                message: "Enter color keyword or hexadecimal for shape color.",
                name: "shapeColor",
            },
        ])
        .then()
    }
}