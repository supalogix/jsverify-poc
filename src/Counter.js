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

module.exports = Counter;
