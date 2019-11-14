/*

Joel Turbi  
Dr. Zavala
CS350 - Programming Language Paradigms
Homework Assignment #6
11/2/2019

*/

function getNameLengthGenerator(str){
    var name = (str.length)-1;
    var twice = 0;
    var cond = true;

    return function(){
        if(cond){
            twice = name;
            cond = false;
            return name;
        }
        twice *= 2;
        return twice;
    }
}

var next = getNameLengthGenerator("Joel Turbi");
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());


