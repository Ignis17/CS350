'''
Joel Turbi
Dr. Zavala
CS350 - Programming Language Paradigms
Lab Assignment 10
11/20/2019
'''

def getDigits(word):
    num = [x for x in word if x.isdigit()]
    print(num)

getDigits("Hello 12345 World")