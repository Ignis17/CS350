/*
Joel Turbi
Dr. Zavala
CS350 - Programming Language Paradigms
Lab Assignment 6 - Movie A
*/

const Movie = {
    name: "",
    release_year: 0,
    ratings_count: 0, ratings1: 0, ratings2: 0, ratings3: 0, ratings4: 0, ratings5: 0,
    averageRating() { return (this.ratings1 + this.ratings2 + this.ratings3 + this.ratings4 + this.ratings5) / this.ratings_count;},
    addRating(x){
        if(x == 1){this.ratings1 += x;}
        else if(x == 2){this.ratings2 += x;}
        else if (x == 3){this.ratings3 += x;}
        else if (x == 4){this.ratings4 += x;}
        else if (x == 5){this.ratings5 += x;}
        this.ratings_count += 1;
    }
};

// Creates a new object from prototype named Movie.
const lord1 = Object.create(Movie);
const lord2 = Object.create(Movie);
const lord3 = Object.create(Movie);
const lord4 = Object.create(Movie);
const lord5 = Object.create(Movie);

// Declare details for movie prototype. Object named lord1.
lord1.name = "Lord of the Rings: The Fellowship of the Ring";
lord1.release_year = 2001;
//Add 5 ratings of 5stars to lord1 object
for (let i = 1; i <= 5; i++)
    lord1.addRating(5);
//Add 15 ratings of 4stars to lord1 object
for (let i = 1; i <= 15; i++)
    lord1.addRating(4);
//Add 5 ratings of 3stars to lord1 object
for (let i = 1; i <= 5; i++)
    lord1.addRating(3);
//Add 2 ratings of 2stars to lord1 object
lord1.addRating(2);
lord1.addRating(2);

// Declare details for movie prototype. Object named lord2.
lord2.name = "Lord of the Rings: The Return of the King";
lord2.release_year = 2003;
//lord2 RATINGS
//Add 3 ratings of 4stars to lord2 object
for (let i = 1; i <= 3; i++)
lord2.addRating(4);
//Add 1 ratings of 2stars to lord2 object
lord2.addRating(2);
//Add 1 ratings of 1stars to lord2 object
lord2.addRating(1);

// Declare details for movie prototype. Object named lord3.
lord3.name = "Alita: Battle Angel";
lord3.release_year = 2019;
//lord3 RATINGS
//Add 2 ratings of 5stars to lord3 object
for (let i = 1; i <= 2; i++)
    lord3.addRating(5);
//Add 20 ratings of 4stars to lord3 object
for (let i = 1; i <= 20; i++)
    lord3.addRating(4);
//Add 3 ratings of 3stars to lord3 object
for (let i = 1; i <= 3; i++)
    lord3.addRating(3);
//Add 1 rating of 2stars to lord3 object
lord3.addRating(2);
// Add 1 rating of 1start to lord3 object 
lord3.addRating(1);

// Declare details for movie prototype. Object named lord4.
lord4.name = "Avengers: Endgame";
lord4.release_year = 2019;
//lord4 RATINGS
//Add 20 ratings of 5stars to lord4 object
for (let i = 1; i <= 20; i++)
    lord4.addRating(5);
//Add 40 ratings of 4stars to lord4 object
for (let i = 1; i <= 40; i++)
    lord4.addRating(4);
//Add 10 ratings of 1stars to lord4 object
for (let i = 1; i <= 10; i++)
    lord4.addRating(1);

// Declare details for movie prototype. Object named lord5.
lord5.name = "Aquaman";
lord5.release_year = 2018;
//lord5 RATINGS
//Add 3 ratings of 5stars to lord5 object
for (let i = 1; i <= 2; i++)
    lord5.addRating(3);
//Add 100 ratings of 4stars to lord5 object
for (let i = 1; i <= 100; i++)
    lord5.addRating(5);
//Add 20 ratings of 2stars to lord5 object
for (let i = 1; i <= 20; i++)
    lord5.addRating(2);

console.log("FIRST MOVIE \n" + lord1.name + ", " + lord1.release_year + "\n" + "Average Rating: " + ~~lord1.averageRating() + "\n" + "Rated By: " + lord1.ratings_count + "\n");
console.log("SECOND MOVIE \n" + lord2.name + ", " + lord2.release_year + "\n" + "Average Rating: " + ~~lord2.averageRating() + "\n" + "Rated By: " + lord2.ratings_count + "\n");
console.log("THIRD MOVIE \n" + lord3.name + ", " + lord3.release_year + "\n" + "Average Rating: " + ~~lord3.averageRating() + "\n" + "Rated By: " + lord3.ratings_count + "\n");
console.log("FOURTH MOVIE \n" + lord4.name + ", " + lord4.release_year + "\n" + "Average Rating: " + ~~lord4.averageRating() + "\n" + "Rated By: " + lord4.ratings_count + "\n");
console.log("FIFTH MOVIE \n" + lord5.name + ", " + lord5.release_year + "\n" + "Average Rating: " + ~~lord5.averageRating() + "\n" + "Rated By: " + lord5.ratings_count + "\n");
