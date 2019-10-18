function add2(n) {
  var two = 2;
  return (two + n); }
/* 
  Needs to be parsed as an integer since JavaScript 
  does not distinguish the difference between an 
  integer and/or a string. 
*/
const inputN = parseInt(process.argv[2]);
const result = add2(inputN);
console.log(result);