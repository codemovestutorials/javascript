//
// Code Moves - Immediately Invoked Function Expressions - Sample code 4
//

let Counter = (function() { 
  let counter = 0;
  function initialize() {
    counter = 0;
  }
  function increment() {
    counter++;
  }
  function decrement() {
    counter--;
  }
  return {
    init: initialize,
    inc:  increment,
    dec:  decrement,
    get:  ()=> counter 
  }
})();

Counter.init(); 
Counter.inc();
Counter.inc();
Counter.inc();
Counter.dec();

console.log(Counter.get());

