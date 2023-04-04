const SVG = require("./svg.js");
const {Circle, Triangle, Square} = require("./shapes.js");

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
      const svg = new SVG();
      let text = "hey";
      svg.setText(text);
      expect(svg.render()).toEqual(`<text x="150" y="100" font-size="60px" text-anchor="middle" fill="">hey</text>`);
    })
});

// Test Set Text Color
describe('set text color', () => {
    test('rendered logo should include colored text', () => {
      const svg = new SVG();
      let textColor = "blue";
      svg.setText(textColor);
      expect(svg.render()).toEqual(`<text x="150" y="100" font-size="60px" text-anchor="middle" fill="blue"></text>`);
    })
});

// Test Text Exceeds 3
// describe('text length', () => {
//     test('length is not less than 1 or more than 3', () => {
//       expect().toEqual();
//     })
// });

// Test Set Shape
// describe('shape', () => {
//     test('rendered logo should include a shape', () => {
//       expect().toEqual();
//     })
// });