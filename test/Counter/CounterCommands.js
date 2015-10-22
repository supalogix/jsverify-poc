var Commands = require("./Commands.js");
var Counter = require("../../src/Counter.js");
var Increment = require("./Increment.js");
var Decrement = require("./Decrement.js");
var Get = require("./Get.js");

function CounterCommands() {}

CounterCommands.prototype = new Commands();


CounterCommands.prototype.getNewSut = function(state) {
   return new Counter(state);
};

CounterCommands.prototype.getInitialState = function() {
   return Math.floor(Math.random() * 1000);
};

CounterCommands.prototype.genCommand = function(state) {
   var idx = Math.floor(Math.random() * 3);
   switch(idx) {
      case 0: return new Increment();
      case 1: return new Get();
      case 2: return new Decrement();
   };
   return (idx === 0) ? new Increment() : new Get();
};

module.exports = CounterCommands;
