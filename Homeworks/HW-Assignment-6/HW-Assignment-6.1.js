/*

Joel Turbi  
Dr. Zavala
CS350 - Programming Language Paradigms
Homework Assignment #6
11/2/2019

*/

function getNameLengthGenerator(str){
    return {
        name: (str.length)-1,
        twice: 0,
        cond: true,
        next: function(){
            if(this.cond){       
                this.twice = this.name;
                this.cond = false;
                return this.name;
            }
            this.twice *= 2;
            return this.twice;
        }
    }

}

var generator = getNameLengthGenerator("Joel Turbi");
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


