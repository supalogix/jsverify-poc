var CounterCommands = require("./CounterCommands.js");
var Increment = require("./Increment.js");
var Decrement = require("./Decrement.js");
var Get = require("./Get.js");

var jsv = require("jsverify");

export default class Generator {
   static getCounterCommands() {
      function* commandsGenerator(limit) {
         for(let i = 0; i < limit; i ++) {
            var idx = Math.floor(Math.random() * 3);

            switch(idx) {
               case 0: yield new Increment();
               case 1: yield new Get();
               case 2: yield new Decrement();
            };
         }
      }

      let generator = () => {
         let counterCommands = new CounterCommands();
         let initialState = counterCommands.getInitialState();
         let sut = counterCommands.getNewSut( initialState );

         let commands = [];

         let limit = Math.floor(Math.random() * 100);

         for( let command of commandsGenerator(limit) )
            commands.push( command );

         let json = {
            "sut": sut,
            "state": initialState,
            "commands": commands
         };

         return json;
      };

      return jsv.bless({
         generator: generator
      });
   }
}
