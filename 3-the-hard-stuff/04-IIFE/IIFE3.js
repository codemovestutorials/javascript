//
// Code Moves - Immediately Invoked Function Expressions - Sample code 3
//

let countUp = (function() {
  let counter = 0;

  return function() {
    counter++;
    return counter;
  };
})(); 

countUp();
countUp();
countUp();
