function add2(n) {
  var two = 2;
  return (two + n); }
const inputN = parseInt(process.argv[2]);
const result = add2(inputN);
console.log(result);