var Commands = require("./Commands.js");
var Counter = require("../../src/Counter.js");
var Increment = require("./Increment.js");
var Decrement = require("./Decrement.js");
var Get = require("./Get.js");

export default class CounterCommands {
   getNewSut(state) {
      return new Counter(state);
   }

   getInitialState() {
      return Math.floor(Math.random() * 1000);
   }

   genCommand(state) {
      var idx = Math.floor(Math.random() * 3);

      switch(idx) {
         case 0: return new Increment();
         case 1: return new Get();
         case 2: return new Decrement();
      };
   }
}
