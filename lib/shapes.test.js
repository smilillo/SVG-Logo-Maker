const { Circle, Triangle, Square } = require("./shapes.js");

// Test for Circle Class
describe('Circle', () => {
    test('renders circle logo correctly', () => {
        const shape = new Circle();
        let color = 'red';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
    })
});

// Test for Triangle Class
describe('Triangle', () => {
    test('renders triangle logo correctly', () => {
        const shape = new Triangle();
        let color = 'red';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="red" />`);
    })
});

// Test for Square Class
describe('Square', () => {
    test('renders square logo correctly', () => {
        const shape = new Square();
        let color = 'red';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="90" y="40" width="120" height="120" fill="red" />`);
    })
});