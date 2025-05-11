# Create a list of squares
# Generate a list containing the squares of numbers from 1 to 10.
print([x*x for x in range(1,11)])
# Filter even numbers
# From a list of numbers 1 to 20, create a new list with only the even numbers.
print([i for i in range(1,20,2)])
# Convert to uppercase
# Given a list of lowercase words, make a new list with all the words in uppercase.
lower = ["david","luka"]
print([i.upper() for i in lower])
# Get lengths of words
# From a list of words, create a list containing the length of each word.
words = ["hello","good","bed","bad"]
print([len(i) for i in words])
# Add 5 to each number
# Given a list of numbers, make a new list where 5 is added to each number.
nums = [1,2,3,4,5]
print([i+5 for i in nums])
# Get first letters
# From a list of strings, make a list containing only the first letter of each string.
print([i[0] for i in words])
# Double each number
# Create a list where each number in a given list is multiplied by 2.
print([i*2 for i in nums])