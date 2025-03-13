# Function 1 - "hello world!"
def greet():
    return "hello world!"

# 1. ჩვენ ვქმნით ფუნქციას სახელად greet-ს
# 2. ჩვენი დავალებაა რომ ფუნქციას დავაბრუნებინოთ "hello world!"
# 3. ვწერთ დაბრუნებას და ბრჭყალებში იმ ტექსტს რომელიც გვინდა რომ დაგვიბრუნებს, ანუ "hello world!"
# 4. ეს ფუნქცია ჩვენ დაგვიბრუნებს "hello world!"


# Beginner - Lost Without a Map
def maps(a):
    return [x * 2 for x in a]
# Opposites Attract
def lovefunc( flower1, flower2 ):
    return (flower1 % 2) != (flower2 % 2)
# Sum Arrays
def sum_array(a):
    return sum(a)
# Beginner Series #1 School Paperwork
def paperwork(n, m):
    if n<0:
        return 0
    elif m<0:
        return 0
    return n*m
# MakeUpperCase
def make_upper_case(s):
    return s.upper()