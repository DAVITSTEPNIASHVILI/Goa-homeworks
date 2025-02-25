def greet(name,surname,age,academy,favourite_color,city):
    return f"Hello, my name is {name}, my surname is {surname}. I am {age} years old", "I study in {academy}. My favourite color is {favourite_color}. I live in {city}"

result = greet("David","Stefniashvili","11","Goa","blue","Tbilisi")
print(result)

# Convert number to a string
def number_to_string(num):
    return str(num)

# 
def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"
    
# 
def solution(string):
    return string[::-1]
# 
def make_negative( number ):
    if number > 0:
        return number * -1
    else:
        return number
#
def opposite(number):
    return number * -1
#
def bool_to_word(boolean):
    if boolean == True:
        return "Yes"
    else:
        return "No"