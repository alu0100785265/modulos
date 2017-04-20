"use strict"
var clase = require("./shape.js");
var Shape = clase.Shape;

class Square extends Shape {
 constructor (options) {
     super(options)
    
}
    getArea () {
        var res = Math.pow(this.width, 2);
            return res;
    }
}
Shape.shapes.Square = Square;
module.exports = { Square: Square};