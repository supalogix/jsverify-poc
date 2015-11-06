export default class Counter {
   constructor(n) {
      this.n = n;
   }

   increment() {
      this.n = this.n + 1;
      return this.n;
   }

   decrement() {
      this.n = this.n - 1;
      return this.n;
   }

   get() {
      return this.n;
   }
}

module.exports = Counter;
