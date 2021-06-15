/*
Joel Turbi
Dr. Zavala
CS350 - Programming Language Paradigms
Homework Assignment 5
10/18/2019
*/


//The cart is an array of objects like this:
var cart=[
  {"name":"Biscuits","type":"regular","category":"food","price": 2.00},
  {"name":"Monitor","type":"prime","category":"tech","price": 119.99},
  {"name":"Mouse","type":"prime", "category":"tech", "price": 25.50},
  {"name":"dress", "type":"regular", "category":"clothes", "price": 49.90},
  {"name": "chair", "type": "regular", "category": "office", "price": 90.50 },
  {"name": "pancakes", "type": "regular", "category": "food", "price": 12.30 },
  {"name": "Dumbells", "type": "regular", "category": "Exercise", "price": 60.00 },
  {"name": "SSD", "type": "prime", "category": "tech", "price": 70.00 },
  {"name": "Cooling Pad", "type": "prime", "category": "tech", "price": 10.00 },
  {"name": "Lamp", "type": "prime", "category": "office", "price": 22.00}];

const _ = require('underscore'); // needed to have support for the reject function

function isPrime(item) {
    return (item.type === 'prime');
}
function primeItems(cart) {
    // write your code here
    return cart.filter(isPrime);
}

function notPrimeItems(cart) {
    // write your code here
    return _.reject(cart,isPrime);
}

function applyCoupon(cart) {
    return cart.filter(x=>x.category === 'tech').map(x => x.price - (x.price * 0.20).toFixed(2));
}

function totalCost(cart) {
    // write your code here
    const total = [];
    // applies a shipping cost of $2 to all non "prime" items.
    const shipping = notPrimeItems(cart).map(x => x.price + 2).reduce((x, y) => x + y);
    // Calculates the percentage discount for items that are tech related.
    const discount = applyCoupon(cart).reduce((x, y) => x + y);
    total.push(discount + shipping);
    // calculates tax sales for all items
    const tax = total.map(x=> x * 0.06).reduce((x,y)=> x+y);
    // Adds  tax sales for all items to total [] array.
    total.push(tax);
    
    return total.map(x => x).reduce((x, y) => x + y).toFixed(2);
}


console.log(totalCost(cart));