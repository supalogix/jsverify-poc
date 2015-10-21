var Command = require("./Command.js");

function Get() {
}

Get.prototype = new Command();

Get.prototype.run = function( counter ) {
   return counter.get();
};

Get.prototype.nextState = function( state ) {
   return state;
};

Get.prototype.preCondition = function( state ) {
   return true;
};

Get.prototype.postCondition = function( state, result ) {
   return result === state;
};

module.exports = Get;
