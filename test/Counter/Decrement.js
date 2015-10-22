export default class Decrement {
   run(counter) {
      return counter.decrement();
   }

   nextState(state) {
      return state - 1;
   }

   preCondition(state) {
      return true;
   }

   postCondition(state, result) {
      return result === ( state - 1 );
   }
}
