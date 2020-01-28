/*
Joel Turbi
Dr. Zavala
CS 350 - Progamming Language Padigms
Lab Assignment 8
10/30/2019
*/

// Converts from pounds to kilogram.
let poundstokg = (pounds) => pounds / 2.205;
// Converts frominchesto meters.
let inchestometers = (inches) => inches / 39.37;
/* An array of person objects, each representing a person
   (name,weight in pounds, and height in inches).*/
let people = [
    { name: "Amy", pounds_weight: 152, inches_height: 63 },
    { name: "Joe", pounds_weight: 120, inches_height: 64 },
    { name: "Tom", pounds_weight: 210, inches_height: 78 },
    { name: "Jim", pounds_weight: 180, inches_height: 68 },
    { name: "Jen", pounds_weight: 120, inches_height: 62 },
    { name: "Ann", pounds_weight: 252, inches_height: 63 },
    { name: "Ben", pounds_weight: 240, inches_height: 72 },
];

// Used to calculate the BMI of a person
function addbmi(person){
    let BMI = poundstokg(person.pounds_weight)/Math.pow(inchestometers(person.inches_height),2);
    person.bmi =  BMI;
    return person;
}

function isOverweight(person){
    console.log(person.bmi)
    if(person.bmi >= 25 && person.bmi < 30)
        return true;
    else
        return false;
}
addbmi(people[0])
console.log(isOverweight(people[5]))
function isObese(person){
    if (person.bmi >= 30)
        return true;
    else
        return false;
}

// Test 1
//console.log(addbmi(people[0]));

// Test 2
people.map(addbmi);
//console.log(people);
console.log(isOverweight(people[0]));
//console.log(isObese(people[0]));

// Assigns
// var overweight_people = people.map(addbmi).filter(isOverweight);
//
// var obese_people = people.map(addbmi).filter(isObese);
// //console.log(overweight_people);
// console.log(obese_people);
