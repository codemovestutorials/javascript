
//
// Code Moves - Lexical Scope - Sample code 1
//

let a = 1;

function print_a() { 
    console.log(a);
}

function hello() {
    let a = 5;
    console.log(a);
    print_a();
}

hello();