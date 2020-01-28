'''
Joel Turbi
Dr. Zavala
CS350 - Programming Language Paradigms
Lab Assignment 10
11/20/2019
'''

# a)
# Output: 
#          -> ['2018, Black Panter', '2018: Bohemian Rhapsody', '2017: GetOut', '2017: Logan', 'REMOVED FROM LIBRARY -2016: La La Land', 'REMOVED FROM LIBRARY -2016: Doctor Strange']


# b)
movies = ["2018, Black Panter", "2018: Bohemian Rhapsody", "2017: GetOut", "2017: Logan", "2016: La La Land", "2016: Doctor Strange"]

new_list =  ["REMOVED FROM LIBRARY - " + x if x[0:4]=="2016" else x for x in movies]
print(new_list)