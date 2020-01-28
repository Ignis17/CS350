'''
Joel Turbi
Dr. Zavala
CS 350 - Progamming Language Paradigms
Homework Assignment 9
11/27/2019
'''

people = [
{ "bmi":0,"name": "Amy", "pounds_weight": 152,  "inches_height": 63 },
{ "bmi":0, "name": "Joe", "pounds_weight": 120, "inches_height": 64 },
{ "bmi":0, "name": "Tom", "pounds_weight": 210, "inches_height": 78 },
{ "bmi":0, "name": "Jim", "pounds_weight": 180, "inches_height": 68 },
{ "bmi":0, "name": "Jen", "pounds_weight": 120, "inches_height": 62 },
{ "bmi":0, "name": "Ann", "pounds_weight": 252, "inches_height": 63 },
{ "bmi":0, "name": "Ben", "pounds_weight": 240, "inches_height": 72 }]

# Converts from pounds /to kilogram.
poundstokg = lambda kilogram: kilogram / 2.205

# Converts from inches to meters.
inchestometers = lambda meters: meters / 39.37

# BMI function definition: Calculates bmi
def addbmi(person):
    for x in person:
        bmi = lambda pound = poundstokg(x["pounds_weight"]),  meter = inchestometers(x["inches_height"]): pound / (meter**2)
        x["bmi"] = bmi()
    return person

# isOverweight function definition: Determines if user is overweight
def isOverweight(person):
        if (person["bmi"] >= 25) and (person["bmi"] < 30):
            return True
        else:
            return False

# isObese function definition: Determines if user is obesed.
def isObese(person):
        if person["bmi"] >= 30:
            return True
        else:
            return False

# Aplies map and filter to overweight_people
overweight_people = list(map(lambda x: x, filter(lambda x: isOverweight(x),addbmi(people))))
print("Overweight people:")
print(overweight_people)
#Applies map and filter to obese_people
obese_people = list(map(lambda  x: x, filter(lambda x: isObese(x),addbmi(people))))
print("\nObesed people:")
print(obese_people)
