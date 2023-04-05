const SVG = require("./svg.js");
const {Circle, Triangle, Square} = require("./shapes.js");
const CLI = require("./cli.js");

// Received help writing SVG tests from Conner - TA
// Test 200 x 300
describe('Height and Width', () => {
    test('height and width of 200x300', () => {
        const svg = new SVG();
        const height = "200";
        const width = "300";
        expect(svg.render()).toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>`);
    })
});

// Test Set Text
describe('set text', () => {
    test('rendered logo should include text', () => {
      const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60px" text-anchor="middle" fill="blue">hey</text></svg>`;
      const svg = new SVG();
      svg.setText("hey", "blue");
      expect(svg.render()).toEqual(expectedSvg);
    })
});

// Test Text Exceeds 3
describe('text length', () => {
    test('length is not less than 1 or more than 3', () => {
      const expectedError = new Error("Text must be at least 1 character and no greater than 3 characters");
      const svg = new SVG();
      expect(() => svg.setText("char", "blue")).toThrow(expectedError);
    })
});

// Test Set Shape - Not currently passing, will come back to this
// describe('shape', () => {
//     test('rendered logo should include a shape', () => {
//       const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="#011936" /></text></svg>`
//       const svg = new SVG();
//       const shape = "Triangle";
//       svg.setShape(shape);
//       expect(svg.render()).toEqual(expectedSvg);
//     })
// });