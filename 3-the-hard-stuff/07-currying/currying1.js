
//
// Code Moves - Currying - Sample code 1
//

function curryMultiply(x) {
    return function(y) { 
        return x * y;  
    }
}

let result = curryMultiply(2)(5);
console.log(result);
