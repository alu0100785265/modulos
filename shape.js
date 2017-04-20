"use strict"

class Shape {
    constructor(options) {
    
     Object.assign(this, options);
    }
    getArea(shape,options){
    
        return this.area();
    }
 
 
}

Shape.shapes = Shape.shapes || {};




   function r_figura(shape, options) {

      var muestra = new Shape.shapes[shape](options)
      var salida = muestra.getArea();
        return salida;

  }

  
module.exports = {Shape: Shape,
r_figura:r_figura
    
}



