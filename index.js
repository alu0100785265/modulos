var figura = require('./shape.js');
var triangle = require('./triangle.js');
var rectangle = require('./square.js');
var rectangle = require('./rectangle.js');

  "use strict"

try {
  var t = figura.r_figura('Triangle',  { width: 100, height: 100 });
  console.log(t);
  var s = figura.r_figura('Square',    { width: 100 });
  console.log(s);
  var r = figura.r_figura('Rectangle', { width: 100, height: 100 });
  console.log(r);
  //var b = figura.r_figura('Bogus');
}
catch (e) {
  console.log(e);
}
