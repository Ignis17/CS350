/*
Joel Turbi
Dr. Zavala
CS 350 - Programming Language Paradigms
Homework Assignment 7 - Odd Numbers
11/8/2019
*/

// Odd numbers Generator.
function oddNumbers() {
    let n = -1;
    return function (){
        n +=2;
        return n;
    }
}

// Stores the function into a variable.
var odd = oddNumbers();
// Generates the first 10 odd numbers.
for (var i = 0; i < 10; i++){
    console.log(odd());
}

