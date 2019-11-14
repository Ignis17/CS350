/*
Joel Turbi
Dr. Zavala
CS 350 - Programming Language Paradigms
Homework Assignment 7 - Factorial Sequence
11/8/2019
*/

// Factorial Sequence Generator.
function Factorial(){
    var n = -1, total = 1;
    return () =>{
        n++;
        if (n === 0){
            return 1;
        }
        total *= n;
        return total;
    }
}

// Stores the function into a variable.
var fact = Factorial();
// Generates the first 10 factorials.
for (var i = 0; i <= 10; i++)
    console.log(fact());

