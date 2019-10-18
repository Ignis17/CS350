/*
    Joel Turbi
    Dr. Zavala
    CS350 - Programming Language Paradigms
    Lab Assignment 5
    Due: 9/23/2019    
*/

const square = (x) => {return x*x};
const cube = (x) => {return x*x*x};
const perfectSquares = (N) => {return each(sequence(N),square)};
const perfectCubes = (N) => {return each(sequence(N),cube)};
const perfectPower = (N,P) => {return each(sequence(N),power(P))};
const power = (P) => X =>{ return Math.pow(X,P)};

function each(A, func) {
    for (var i = 0; i < A.length; i++) {
        A[i] = func(A[i]);
    }
    return A;
}

function sequence(N) {
    return Array(N).fill().map((_, idx) => idx +1)
}

console.log("square: " + square(2));
console.log("cube: " + cube(2));
console.log("perfectSquares: " + perfectSquares(6));
console.log("perfectCubes: " + perfectCubes(6));
console.log("perfectPowers: " + perfectPower(6,2));