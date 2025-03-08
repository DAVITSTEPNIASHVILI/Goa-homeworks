# We need a function that returns a string to a number
def string_to_number(s):
    return int(s)

# Grasshopper - Summation
def summation(num):
    result = 0
    for i in range(1,num+1):
        result += i
    return result

# Function 1 - "hello world!"
def greet():
    return "hello world!"
# Counting Sheep
def find_True(sheep):
    return sheep.count(True)
# Remove String Spaces
def no_space(x):
    return x.replace(" " , "")
#You can't
def double_integer(i):
    return i*2
# Returning Strings
def greet(name):
    return f"Hello, {name} how are you doing today?"
# Convert a Boolean to a string
def boolean_to_string(b):
    return str(b)
# Calculator
def basic_op(operator, value1, value2):
    if operator == "+":
        return value1 + value2
    elif operator == "-":
        return value1 - value2
    elif operator == "*":
        return value1 * value2
    else:
        return value1 / value2
# Keep Hydrated
def litres(time):
    return time(int(0.5))
    # return time // 2

# Century from year
def century(year):
    if year%100 == 0:
        return int(year / 100)
    else:
        return int(year / 100) + 1
# Convert number to reversed array of digits
def digitize(n):
    str_number = str(n)
    rev_number = str_number[::-1]

    new_list = []
    for number in rev_number:
        new_list.append(int(number))

    return new_list
