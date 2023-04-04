// Shape Class - Parent
class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}
// Circle Class
class Circle extends Shape {
    render() {
        // Code from instructor via resources slack channel
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
// Triangle Class
class Triangle extends Shape {
    render() {
        // Code from challenge readme example test
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

// Square Class
class Square extends Shape {
    render() {
        // Modified from https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
        return `<rect x="90" y="40" width="200" height="200" fill="${this.color}" />`
    }
}

module.exports = {Circle, Triangle, Square};