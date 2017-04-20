"use strict"
var clase = require("./shape.js");
var Shape = clase.Shape;

class Rectangle extends Shape {
 constructor (options) {
     super(options)
     
     
     
 }
    getArea () {
        
        var res  =this.width * this.height
         return  res;
    }
}
Shape.shapes.Rectangle = Rectangle;
module.exports = {
    Rectangle : Rectangle
}