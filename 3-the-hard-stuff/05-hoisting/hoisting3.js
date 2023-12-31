
//
// Code Moves - Hoisting - Sample code 3
//

func();   // This will give an error

let func = function() { 
  console.log("I am not hoisted"); 
}

// func();  // must be called here
