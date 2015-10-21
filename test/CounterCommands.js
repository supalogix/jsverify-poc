var Commands = require("./Commands.js");
var Counter = require("./Counter.js");
var Increment = require("./Increment.js");
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
   var idx = Math.floor(Math.random() * 2);
   return (idx === 0) ? new Increment() : new Get();
};

module.exports = CounterCommands;
