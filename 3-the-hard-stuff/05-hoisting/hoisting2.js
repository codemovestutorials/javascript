
//
// Code Moves - Hoisting - Sample code 2
//

function sayHello() {
  runMe();
  function runMe() {
    console.log("I ran");
  }
}

sayHello();
