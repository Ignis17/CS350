'''
Joel Turbi
Dr. Zavala
CS350 - Programming language Paradimgs
Homework Assignment 10
12/05/2019
'''

import random

def getwords(text):
    stopletters = [".", ",", ";", ":", "'s", '"', "!", "?", "(",")", '“', '”']
    text = text.lower()
    text = "".join([letter for letter in text if letter not in stopletters])
    words = text.split()
    return words


def compute_bigrams(input_list):
    bigram_list = {}
    for i in range(len(input_list)-1):
        if input_list[i] in bigram_list:
            bigram_list[input_list[i]] = bigram_list[input_list[i]]+[input_list[i+1]]
        else:
            bigram_list[input_list[i]] = [input_list[i+1]]
    return bigram_list

# Change the filename when you run the program for a different file
filename = "sample1.txt"
file = open(filename, "r")
text = file.read()
words_list = getwords(text)

# Bigrams is the dictionary you will use for implementing the 2-grams approach
bigrams = compute_bigrams(words_list)
#print(bigrams)

# ADD YOUR CODE BELOW THIS POINT

def bigrams_paragraph(bigrams):
    result = []
    n = random.randint(0, len(words_list)-1)
    key = words_list[n]
    result.append(key)
    for x in range(40):
        words = bigrams[key]
        ran_word = random.randint(0, (len(words)-1))
        key = words[ran_word]
        result.append(key)
    return result


def random_paragraphs(words_list, num, npar):
    result = [[words_list[random.randint(0, (len(words_list)-1))] for i in range(num) ] for j in range(npar)]
    return result


for x in random_paragraphs(words_list,100,4):
    print(" ".join(x), "\n")

print(" ".join(bigrams_paragraph(bigrams)))
