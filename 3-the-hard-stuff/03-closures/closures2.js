
//
// Code Moves - Closures - Sample code 2
//

function myCounter() {
  let counter = 0;

  function increment() {
    counter++;
    console.log(counter);
  }
  return increment;
}

let countUp = myCounter();

countUp();
countUp();
countUp();