/*
Joel Turbi
Dr. Zavala
CS350 - Programming Language Paradigms
Lab Assignment 6 - Movie B
*/

class Movie {
    name = "";
    release_year;
    ratings_count = 0;
    ratings1 = 0;
    ratings2 = 0;
    ratings3 = 0; 
    ratings4 = 0; 
    ratings5 = 0;
    constructor(n, y){
        this.name = n;
        this.release_year = y;
    }
    averageRating() { return (this.ratings1 + this.ratings2 + this.ratings3 + this.ratings4 + this.ratings5) / this.ratings_count; }
    addRating(x) {
        if (x == 1) { this.ratings1 += x; }
        else if (x == 2) { this.ratings2 += x; }
        else if (x == 3) { this.ratings3 += x; }
        else if (x == 4) { this.ratings4 += x; }
        else if (x == 5) { this.ratings5 += x; }
        this.ratings_count += 1;
    }
};

// Creates a new object from class named Movie.
const lord1 = new Movie("Lord of the Rings: The Fellowship of the Ring",2001);
const lord2 = new Movie("Lord of the Rings: The Return of the King",2003);
const lord3 = new Movie("Alita: Battle Angel",2019);
const lord4 = new Movie("Avengers: Endgame",2019);
const lord5 = new Movie("Aquaman",2018);

//lord1 RATINGS
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

//lord2 RATINGS
//Add 3 ratings of 4stars to lord2 object
for (let i = 1; i <= 3; i++)
    lord2.addRating(4);
//Add 1 ratings of 2stars to lord2 object
lord2.addRating(2);
//Add 1 ratings of 1stars to lord2 object
lord2.addRating(1);

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
