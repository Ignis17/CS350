/*
Joel Turbi
Dr. Zavala
CS 350 - Programming Language Paradigms
Lab assignment 7 - Quiz Fixes
10/28/2019
 */

var cart = [
    { "name": "Biscuits", "type": "regular", "category": "food", "price": 2.0 },
    { "name": "Monitor", "type": "prime", "category": "tech", "price": 120 },
    { "name": "Mouse", "type": "prime", "category": "tech", "price": 25 },
    { "name": "dress", "type": "regular", "category": "clothes", "price": 50 },
    { "name": "XL Monitor", "type": "prime", "category": "tech", "price": 160 },
    { "name": "Cookies", "type": "regular", "category": "food", "price": 16 },
];

function isPrime(item) {
    //WRITE THIS FUNCTION
    //should return true if the item’s type is “prime” and false otherwise
    return (item.type === "prime");
}
let isNotPrime = item => !isPrime(item);

let applyCoupon = (item) => {
    if (item.category === 'tech')
        item.price -= (item.price / 5);
    return item;
};
let applySalesTax = (item) => {
    const SALES_TAX = 6.00;
    item.price += (item.price / 100 * SALES_TAX);
    return item;
};
let applyShippingCost = (item) => {
    //WRITE THIS FUNCTION
    //it should add a $5 shipping cost to the item’s price
    item.price = (item.price + 5);
    return item;
};
function totalCost(cart) {
    return cart.reduce((accumulator, item) => {
        accumulator += item.price;
        return accumulator;
    }, 0);
}

// Displays applied shipping to all items.
//console.log(cart.map(applyShippingCost));

// Displays the total cost of all items without any costs or sales taxes.
//console.log(totalCost(cart));

// A single statement (chained filter's and map's) to get the total cost for prime items (should include the coupon discount if applicable and sales tax).
console.log(totalCost(cart.filter(isPrime).map(applyCoupon).map(applySalesTax)));

// A single statement to get the total cost for non-prime items (chained filter's and map's), (should include the coupon discount if applicable, shipping and sales tax).

console.log(totalCost(cart.filter(isNotPrime).map(applyCoupon).map(applyShippingCost).map(applySalesTax))); 

// Total cost for all items without applying any coupon or shipping discount (all items pay shipping cost and sales tax).
/* The reason the end result of the following statement gives off the wrong value is due to map array function changing the original values of cart. In order to fix this 
issue it may be needed to do a deep copy of cart instead.*/
console.log(totalCost(cart.map(applyShippingCost).map(applySalesTax)));