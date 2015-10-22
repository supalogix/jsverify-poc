var Command = require("./Command.js");

function Increment() { }

Increment.prototype = new Command();

Increment.prototype.run = function(counter) {
   return counter.increment();
};

Increment.prototype.nextState = function(state) {
   return state + 1;
};

Increment.prototype.preCondition = function(state) {
   return true;  
};

Increment.prototype.postCondition = function( state, result ) {
   return result === ( state + 1 );
};

module.exports = Increment;
