"use strict"
var clase = require("./shape.js");
var Shape = clase.Shape;
 class Triangle extends Shape {

    constructor(options) {

      super(options)

    }


    getArea() {

      var res = .5 * this.width * this.height;
      return res;
    }
  }
  Shape.shapes.Triangle = Triangle;
  module.exports = { Triangle: Triangle};