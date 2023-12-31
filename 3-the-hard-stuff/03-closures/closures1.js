
//
// Code Moves - Closures - Sample code 1
//

function myFunction() {
  let name = "Jane Black";
  function printName() {
    // do some stuff here
    console.log(name);
  }
  return printName;
}

let func = myFunction();
func();
