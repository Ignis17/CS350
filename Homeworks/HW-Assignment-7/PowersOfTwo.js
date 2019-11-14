/*
Joel Turbi
Dr. Zavala
CS 350 - Programming Language Paradigms
Homework Assignment 7 - Powers of two.
11/8/2019
*/

// Powers of two Generator.
function powersOfTwo(){
    // Needs to be -1 in order to get the first value of 2^0=1.
    // Otherwise it skips it. 
    var num = -1;
    return function(){
        num++;
        return Math.pow(2,num);
    }
}

// Stores the function into a variable.
var power = powersOfTwo();
// Generates the first 10 powers of 2.
for (var i = 0; i <= 10; i++)
    console.log(power());
