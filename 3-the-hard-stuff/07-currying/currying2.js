
//
// Code Moves - Currying - Sample code 2
//

function curryAdd(a) {
    return function(b) { 
      return function(c) {
        return a + b +c;  
      }
    }
}

let result = curryAdd(1)(2)(3);
console.log(result);
