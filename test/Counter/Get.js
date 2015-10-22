export default class Get {
   constructor() {
      this.name = "Get";
   }

   run(counter) {
      return counter.get()
   }

   nextState(state) {
      return state;
   }

   preCondition(state) {
      return true;
   }

   postCondition(state, result) {
      return result === state;
   }
}
