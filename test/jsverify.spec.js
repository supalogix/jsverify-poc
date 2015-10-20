var assert = require("assert");
var jsc = require("jsverify");
var _ = require("underscore");

function Command() {
}

Command.prototype.run = function() {
   throw Error("override me");
}


function Get() {}

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

function Counter(n) {
   this.n = n;
}

Counter.prototype.increment = function() {
   this.n = this.n + 1;
   return this.n;
}

Counter.prototype.get = function() {
   return this.n;
}

function Commands() {}

Commands.prototype.newSut = function(state) {
   throw Error("override me");
};

Commands.prototype.destroySut = function(sut) {
   throw Error("override me");
};

Commands.prototype.genInitialState = function() {
   throw Error("override me");
};

Commands.prototype.genCommand = function(state) {
   throw Error("override me");
};

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
   var commands = [new Increment(), new Get()];
   return commands[idx];
}

function counterGenerator() {
   return jsc.bless({
      generator: generator
   });

   function generator() {
      var self = this;
      self.commands = [];

      var limit = Math.floor(Math.random() * 100);

      for( var i = 0; i < limit; i++ ) {
         var idx = Math.floor(Math.random() * 2);
         var commands = [new Increment(), new Get()];
         var command = commands[idx];
         self.commands.push( command );
      }

      return self.commands;
      
      return jsc.array( jsc.integer(1)).generator(100)
      return [1,2,3];
   }
}

describe("sort", function () {
   it("prints number", function() {
      var commands = new CounterCommands();
      var initialState = commands.getInitialState();
      var sut = commands.getNewSut( initialState );
      var command = commands.genCommand();

//      console.log(sut.get());
//      command.run(sut);
//      console.log(sut.get());

//      var elements = jsc.elements(["foo", "bar"]);
//      var l = jsc.array( jsc.integer()).generator(100)
//      console.log( l );
   });
   jsc.property("generator", counterGenerator(), function(commands) {
      var gen = new CounterCommands();
      var initialState = gen.getInitialState();
      var sut = gen.getNewSut( initialState );
      commands.forEach(function(command) {
         var lastState = sut.get();

         command.run(sut);
         assert( command.postCondition( lastState, sut.get() ) );
      });

      return true;
   });
});
