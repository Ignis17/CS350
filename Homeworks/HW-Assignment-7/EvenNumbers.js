/*
Joel Turbi
Dr. Zavala
CS 350 - Programming Language Paradigms
Homework Assignment 7 - Even Numbers
11/8/2019
*/

// Even numbers Generator.
function evenNumbers() {
    var n = -2;
    return function() {
        n += 2;
        return n;
    }
}

// Stores the function into a variable.
var even = evenNumbers();
// Generates the first 10 even numbers.
for (var i = 0; i < 10; i++){
    console.log(even());
}

