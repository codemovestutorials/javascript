//
// Code Moves - Currying - Sample code 3
//

const arrowAdd = a => b => c =>  a + b + c ;

let result = arrowAdd(1)(2)(3);
console.log(result);