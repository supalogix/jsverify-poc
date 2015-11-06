let assert = require("assert");

export default function( props ) {
   let sut = props.sut;
   let initialState = props.initialState;
   let history = props.history;
   let commands = props.commands;

   for(let command of commands() ) {
      let lastState = sut.get();
      command.run(sut);
      assert( command.postCondition( lastState, sut.get() ) );

      props.history.push(command);
   }

   return true;
}
