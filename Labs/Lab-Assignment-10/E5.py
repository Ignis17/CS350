'''
Joel Turbi
Dr. Zavala
CS350 - Programming Language Paradigms
Lab Assignment 10
11/20/2019
'''

powersofThree = (3**x for x in range(7))
for i in range(7):
    print(next(powersofThree))