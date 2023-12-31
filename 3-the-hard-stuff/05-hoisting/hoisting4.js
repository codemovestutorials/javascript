
//
// Code Moves - Hoisting - Sample code 4
//

                      // Temporal Dead Zone    
console.log(age);     // Temporal Dead Zone - ** Error **
                      // Temporal Dead Zone   
let age = 28;         // variable initialized
                      // End of Temporal Dead Zone ----
                      // End of Temporal Dead Zone ----
console.log(age);     // End of Temporal Dead Zone - ** OK **
