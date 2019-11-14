/*
Joel Turbi
Dr. Zavala
CS 350 - Programming Language Paradigms 
Homework Assignment 7 - Fibonacci Sequence
11/8/2019
*/

// Fibonacci Sequence Generator. 
function fibonacci() {
    var a = 1, b = 0, temp;
    return function(){
        temp = a;
        a += b;
        b = temp;
        return b;
    }
}

// Stores the function into a variable.
var fib = fibonacci();

// Generates the first 10 fibonacci numbers.
for(var i= 0; i <= 10; i++)
    console.log(fib());
