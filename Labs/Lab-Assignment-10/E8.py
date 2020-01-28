'''
Joel Turbi
Dr. Zavala
CS350 - Programming Language Paradigms
Lab Assignment 10
11/20/2019
'''

# Used a generator instead since otherwise, a comprehension list would not have gicen me the same results are the original code. 
perfect_squares = [x*x for x in range(1,1000)]
for i in range(6):
    print((perfect_squares))