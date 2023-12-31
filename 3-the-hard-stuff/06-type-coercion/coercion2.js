//
// Code Moves - Type Coercion - Sample code 2
//

let result = '5' + 2;   // implicit conversion
console.log(result);    // '52'  Concatinates as string

result = '5' - 2;       // implicit conversion
console.log(result);    // 3  Subtracts as number


result = Number('5') + 2;   // explicit conversion -  Number() converted string '5' to number 5
console.log(result);        // 7  

result = parseFloat('5.3') + 2;   // explicit conversion -  parseFloat() converted string '5.3' to number 5.3
console.log(result);              // 7.3  

result = String(5.3) + 2;   // explicit conversion - String() converted the number 5.3 to string '5.3'
console.log(result);        // '5.32'

