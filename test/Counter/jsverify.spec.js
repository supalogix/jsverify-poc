var jsv = require("jsverify");
var Generator = require("./Generator.js");
var Checker = require("./Checker.js");

describe("Counter", function () {

   jsv.property("check properties #1", 
      jsv.bless({
         generator: Generator }), 
      Checker);

});
