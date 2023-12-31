//
// Code Moves - Type Coercion - Sample code 3
//

if ('12' == 12) {           // "==" does implicit conversion
  console.log('Equal');     // prints Equal
} else {
  console.log('Not Equal');
}

if ('12' === 12) {          // "===" does not convert
  console.log('Equal');
} else {
  console.log('Not Equal'); // prints Not Equal
}
