'''
Joel Turbi
Dr. Zavala
CS 350 - Programming Language Paradigms
Homework Assignment 8 - Exercise 3
11/16/2019
'''
import random

def pick5():
    usernumbers = []
    winningnumbers = []
    for i in range(0,5):
        randNum = random.randint(1,45)
        winningnumbers.append(randNum)
    for num in winningnumbers:
        print(num)
    print("**** Welcome to PICK5 lottery game ****\nPlease pick five numbers between 1 and 44:")
    for i in range(0,5):
        num = int(input())
        #winningnumbers.append(ranNum)
        usernumbers.append(num)
    print("The winning numbers are: ",*winningnumbers)
    # Because list will only check a if a value is equal to another list when sorted, the alternative is to use set().
    if(set(winningnumbers) == set(usernumbers)):
        print("CONGRATULATIONS! YOU WON THE LOTERRY!")
    else:
        print("Sorry, you do not win this time.")        
    
pick5()
