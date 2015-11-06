let Counter = require("../../src/Counter.js");
let Increment = require("./Increment.js");
let Decrement = require("./Decrement.js");
let Get = require("./Get.js");

let jsv = require("jsverify");

export default function() {
   let initialState = randomInt(100); 
   let sut = new Counter(initialState);

   let history = [];

   let limit = randomInt(100); 

   var generator = commandsGenerator(limit);

   let json = {
      "sut": sut,
      "state": initialState,
      "history": history,
      "commands": generator
   };

   return json;
}

function commandsGenerator(limit) {
   return function*(){
      for(let i = 0; i < limit; i ++) {
         var idx = Math.floor(Math.random() * 3);

         switch(idx) {
            case 0: yield new Increment();
            case 1: yield new Get();
            case 2: yield new Decrement();
         };
      }
   }
}

function randomInt(limit) {
   return Math.floor(Math.random() * limit);
}
