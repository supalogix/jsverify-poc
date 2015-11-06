export default class Increment {
   constructor() {
      this.name = "Increment";
   }
   
   run(counter) {
      return counter.increment();
   }

   nextState(state) {
      return state + 1;
   }

   preCondition(state) {
      return true;
   }

   postCondition(state, result) {
      return result === ( state + 1 );
   }
}
