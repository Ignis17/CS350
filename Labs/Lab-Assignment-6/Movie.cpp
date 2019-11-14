/*
Joel Turbi
Dr. Zavala
CS350 - Programming Language Paradigms
Lab Assignment 6
*/

#include <bits/stdc++.h>
using namespace std; 

class Movie{
    private:
    string name;
    int release_year;
    int ratings_count = 0, ratings1 = 0, ratings2 = 0, ratings3 = 0, ratings4 = 0, ratings5 = 0;
    
    public:
    Movie(string n, int y){
        name = n;
        release_year = y;
    }
    double averageRating() const{
        return ((ratings1+ratings2+ratings3+ratings4+ratings5)/ratings_count);
    }
    void addRating(int r){
        if(r == 1)ratings1 += r;
        else if(r == 2)ratings2 += r;
        else if(r == 3)ratings3 += r;
        else if(r == 4)ratings4 += r;
        else if(r == 5)ratings5 += r;
        ratings_count += 1;
    }
    friend ostream &operator<<( ostream &output, const Movie &M ){
        //OVERLOADED OUTPUT OPERATOR (do not modify)
        cout << M.name<< ", " << M.release_year <<endl;
        cout << "Avg Rating: " << M.averageRating()<<endl;
        cout << "Rated by : "<< M.ratings_count << " users" << endl;
        return output;
    }
};

int main()
{
    //Create Movie objects
    Movie lord1("Lord of the Rings: The Fellowship of the Ring", 2001);
    Movie lord2("Lord of the Rings: The Return of the King", 2003);
    Movie lord3("Alita: Battle Angel", 2019);
    Movie lord4("Avengers: Endgame", 2019);
    Movie lord5("Aquaman", 2018);
    //lord1 RATINGS
    //Add 5 ratings of 5stars to lord1 object
    for (int i = 1; i <= 5; i++)
        lord1.addRating(5);
    //Add 15 ratings of 4stars to lord1 object
    for (int i = 1; i <= 15; i++)
        lord1.addRating(4);
    //Add 5 ratings of 3stars to lord1 object
    for (int i = 1; i <= 5; i++)
        lord1.addRating(3);
    //Add 2 ratings of 2stars to lord1 object
    lord1.addRating(2);
    lord1.addRating(2);
    //lord2 RATINGS
    //Add 3 ratings of 4stars to lord2 object
    for (int i = 1; i <= 3; i++)
        lord2.addRating(4);
    //Add 1 ratings of 2stars to lord2 object
    lord2.addRating(2);
    //Add 1 ratings of 1stars to lord2 object
    lord2.addRating(1);
    //lord3 RATINGS
    //Add 2 ratings of 5stars to lord3 object
    for (int i = 1; i <= 2; i++)
        lord3.addRating(5);
    //Add 30 ratings of 4stars to lord3 object
    for (int i = 1; i <= 30; i++)
        lord3.addRating(4);
    //Add 3 ratings of 3stars to lord3 object
    for (int i = 1; i <= 3; i++)
        lord3.addRating(3);
    //Add 1 rating of 2stars to lord3 object
    lord3.addRating(2);
    // Add 2 rating of 1start to lord3 object 
    lord3.addRating(1);
    lord3.addRating(1);
        //lord3 RATINGS
    //Add 2 ratings of 5stars to lord3 object
    for (int i = 1; i <= 2; i++)
        lord3.addRating(5);
    //Add 20 ratings of 4stars to lord3 object
    for (int i = 1; i <= 20; i++)
        lord3.addRating(4);
    //Add 3 ratings of 3stars to lord3 object
    for (int i = 1; i <= 3; i++)
        lord3.addRating(3);
    //Add 1 rating of 2stars to lord3 object
    lord3.addRating(2);
    // Add 1 rating of 1start to lord3 object 
    lord3.addRating(1);
    //lord4 RATINGS
    //Add 20 ratings of 5stars to lord4 object
    for (int i = 1; i <= 20; i++)
        lord4.addRating(5);
    //Add 40 ratings of 4stars to lord4 object
    for (int i = 1; i <= 40; i++)
        lord4.addRating(4);
    //Add 10 ratings of 1stars to lord4 object
    for (int i = 1; i <= 10; i++)
        lord4.addRating(1);
    //lord5 RATINGS
    //Add 3 ratings of 5stars to lord5 object
    for (int i = 1; i <= 2; i++)
        lord5.addRating(3);
    //Add 100 ratings of 4stars to lord5 object
    for (int i = 1; i <= 100; i++)
        lord5.addRating(5);
    //Add 20 ratings of 2stars to lord5 object
    for (int i = 1; i <= 20; i++)
        lord5.addRating(2);
    //PRINT MOVIES AND AVERAGE RATINGS
    cout << "FIRST MOVIE" << endl << lord1 << endl << endl;
    cout << "SECOND MOVIE" << endl << lord2 << endl << endl;
    cout << "THIRD MOVIE" << endl << lord3 << endl << endl;
    cout << "FOURTH MOVIE" << endl << lord4 << endl << endl;
    cout << "FIFTH MOVIE" << endl << lord5 << endl << endl;
}