var assert = require("assert");
var _ = require("underscore");

function Checker() {
}

Checker.getChecker = function() {
   return checker;
}

function checker(props) {
   var sut = props.sut;
   var initialState = props.initialState;
   var commands = props.commands;

   if( commands.length > 0 ) {
      var command = commands[0];
      var result = command.preCondition();
   }
   
   commands.forEach(function(command) {
      var lastState = sut.get();

      command.run(sut);
      assert( command.postCondition( lastState, sut.get() ) );
   });

   return true;
}

module.exports = Checker;
