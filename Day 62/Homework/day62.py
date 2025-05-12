# Convert a list of strings to uppercase using map().
list1 = ["hello", "world"]
print(list(map(lambda i : i.upper(), list1)))
# Square each number in a given list of integers using map().
ints = [1,2,3,4,5,6,7,8,9,10]
print(list(map(lambda x: x**2,ints)))
# Add 5 to each element in a list of numbers using map().
print(list(map(lambda x: x+5,ints)))
# Convert a list of temperatures from Celsius to Fahrenheit using map().
# Temperature in degrees Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32.
temp = [23,22,16]
print(list(map(lambda i: i*9/5+32,temp)))
# Extract the first character from each word in a list of strings using map().
sentences = ["Hello World", "Python Programming", "Map Function"]
print(list(map(lambda s: [word[0] for word in s.split() if word], sentences)))
# Filter out all even numbers from a list of integers using filter().
print(list(filter(lambda x: x%2==0,ints)))
# Keep only strings longer than 5 characters from a list of words using filter().
words = ["apple", "banana", "cherry", "fig", "grapes"]
print(list(filter(lambda word: len(word) > 5, words)))
# Filter out negative numbers from a list using filter().
numbers = [-10, 5, -3, 8, 0, -1, 12]
print(list(filter(lambda x: x >= 0, numbers)))
# Select names starting with the letter 'A' from a list of names using filter().
names = ["Anastasia","David","Anano"]
print(list(filter(lambda x: x[0] == "A",names)))
# Keep only numbers divisible by 3 in a given list using filter().
print(list(filter(lambda x: x % 3 == 0, numbers)))