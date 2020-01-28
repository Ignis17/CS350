'''
Joel Turbi
Dr. Zavala
CS350 - Programming Language Paradigms
Lab Assignment 10
11/20/2019
'''
getDigits = "Hello 12345 World"
n = (x for x in getDigits if x.isdigit())
for i in range(5):
    print(next(n))
