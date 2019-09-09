let num = parseFloat(process.argv[2]);

console.log("****\tThis program converts US Dollars to British Pounds and Euros.****\n");

console.log("The amount you entered in US Dollars: " + num);
console.log(num + " US Dollars in British Pounds: " + (num * .76));
console.log(num + " US Dollars in Euros: " + (num * 0.88));