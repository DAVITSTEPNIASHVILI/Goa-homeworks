# Upper case
text = "hello world"
print(text.upper())

name = input("Please enter you name: ")
uppercase_name = name.upper()
print("Your name in Uppercase: ", uppercase_name)

def print_uppercase(strings):
    for string in strings:
        print(string.upper())

string_list = ["გამარჯობა", "სამყარო", "Python", "პროგრამირება"]
print_uppercase(string_list)

# Lower case
text2 = "Hello world"
print(text.lower())

email = input("Please enter you email: ")
lowercase_email = email.lower()
print("Your email in Lowercase: ", lowercase_email)

def get_string_and_print_it_lowercase():
    string1 = "HELLO"
    string1 = string1.lower()

    print(string1)

get_string_and_print_it_lowercase()

# Capitalize
input_name = input("Enter your name: ")
capitalize = input_name.capitalize()
print("your name in capitaze: ", capitalize)

def get_string_and_print_it_Capitalize():
    string2 = "HELLO"
    string2 = string2.capitalize()
    print(string2)

get_string_and_print_it_Capitalize()