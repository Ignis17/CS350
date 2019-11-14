'''
Joel Turbi
Dr. Zavala
CS 350 - Programming Language Paradigms
Homework Assignment 8 - Exercise 1
11/16/2019
'''
import sys

num = int(sys.argv[1])

for c in range(1, num+1):
    for b in range(1, c):
        for a in range(1, b):
            if a * a + b * b == c * c:
                print('{}, {}, {}'.format(a,b,c))

if(len(sys.argv) != 2):
    sys.stderr.write("Exactly one argument is required.\n")
    sys.exit(1)