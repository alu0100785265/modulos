var getArea = require("../shape.js");
var triangle = require('../triangle.js');
var rectangle = require('../rectangle.js');
var square = require('../square.js');
describe("getArea", function() {
  it("must compute the triangle area correctly", function() {
    var result = getArea.r_figura('Triangle',  { width: 100, height: 100 });
    /* There is a white space between consecutive columns */
    result.should.equal(5000);
  })
   it("must compute the rectangle area correctly", function() {
    var result = getArea.r_figura('Rectangle',  { width: 100, height: 100 });
    /* There is a white space between consecutive columns */
    result.should.match(/^5000$/);
  })
   it("must compute the square area correctly", function() {
    var result = getArea.r_figura('Square',  { width: 100, height: 100 });
    /* There is a white space between consecutive columns */
    result.should.equal(10000);
  })
   it("must compute the triangle area correctly", function() {
    var result = getArea.r_figura('Triangle',  { width: 100, height: 100 });
    /* There is a white space between consecutive columns */
    result.should.not.equal(500);
  })
   it("must compute the rectangle area correctly", function() {
    var result = getArea.r_figura('Rectangle',  { width: 100, height: 100 });
    /* There is a white space between consecutive columns */
    result.should.not.equal(5000);
  })
   it("must compute the square area correctly", function() {
    var result = getArea.r_figura('Square',  { width: 100, height: 100 });
    /* There is a white space between consecutive columns */
    result.should.not.equal(1000);
  })
});
