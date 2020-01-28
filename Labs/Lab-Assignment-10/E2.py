'''
Joel Turbi
Dr. Zavala
CS350 - Programming Language Paradigms
Lab Assignment 10
11/20/2019
'''

movies = {
    "2018, Bohemian Rhapsody": ["Rami Malek","Ben Hardy","Mike Myers","Lucy Bynton"],
    "2017, Get Out": ["Daniel Kaluuya", "Allison Williams", "Catherine Keener"],
    "2017 Logan": ["Hugh Jackman", "Boyd Holbrook", "Patrick Stewart"],
    "2018, Black Panther": ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
    "2016, Doctor Strange": ["Benedict Cumberbatch", "Rachel McAdams", "Ch. Ejiofor"],
    "2016, La La Land": ["Emma Stone", "Ryan Gosling", "John Legend"]
    }

out = ["\n"+x+str(movies[x]) for x in movies if x[0:4] == "2016"]
print(*out)