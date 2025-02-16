def check_lowercase(user_str):
    if user_str == user_str.islower():
        print(user_str)

text=input("enter text:")
check_lowercase(text)

def is_capitalize(user_str):
    if user_str == user_str[0].isupper() and user_str == user_str[1:].islower():
        print(True)
    else: 
        print(False)

text = input("enter text:")
is_capitalize(text)

def manual_isdigit(user_str):
    digits = "0123456789"
    valid = False
    for i in user_str:
        if i == digits:
            print("corect character")
        else:
            valid = False
            print("incorrect character")
    print(valid)

manual_isdigit("user_str")

def split_sentecses(user_str):
    list1 = ["heidhu","jdihfeid","ujd"]
    list2 = list1.split(" ")
    print(list2)

text5 = input("enter text: ")
split_sentecses(text5)