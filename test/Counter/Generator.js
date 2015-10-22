var CounterCommands = require("./CounterCommands.js");
var jsv = require("jsverify");

export default class Generator {
   static getCounterCommands() {
      var generator = () => {
         var counterCommands = new CounterCommands();
         var initialState = counterCommands.getInitialState();
         var sut = counterCommands.getNewSut( initialState );

         var commands = [];

         var limit = Math.floor(Math.random() * 100);

         for( var i = 0; i < limit; i++ ) {
            var command = counterCommands.genCommand();
            commands.push( command );
         }

         var json = {
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
