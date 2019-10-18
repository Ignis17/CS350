/* 
    Joel Turbi
    Dr. Zavala
    CS350 - Programming Language Paradigms
    Homework Assignment 3
    9/21/2019
*/

// Added new items to data[] to have a total amount of 12 elements: of 6 dogs and 6 cats. 
data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
        {
        name: 'Ziggy',
        age: 4,
        type: 'dog'
    },
    {
        name: 'Larry',
        age: 5,
        type: 'dog'
    },
        {
        name: 'Joey',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Rawly',
        age: 7,
        type: 'dog'
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat'
    },
    {
        name: 'Zilla',
        age: 4,
        type: 'cat'
    },
    {
        name: 'Hazel',
        age: 1,
        type: 'cat'
    },
    {
        name: 'Azure',
        age: 3,
        type: 'cat'
    },
    {
        name: 'Palick',
        age: 2,
        type: 'cat'
    },
    {
        name: 'Laly',
        age: 5,
        type: 'cat'
    },
];

let isDog = (animal) => {
    return animal.type === 'dog';
}

let dogYears = (animal) => {
    return animal.age * 7;
}

// Created isCat() and catYears() functions. 
let isCat = (animal) => {
    return animal.type === 'cat';
}

let catYears = (animal) => {
    return animal.age * 10;
}

let sum = (sum, animal) => {
    return sum + animal;
}

let ages = data
    .filter(isDog)
    .map(dogYears)
    .reduce(sum); 

let ages2 = data
    .filter(isCat)
    .map(catYears)
    .reduce(sum);


console.log("****************\nDog years: " + ages + " *\nCat years: " + ages2 + " *\n****************");
