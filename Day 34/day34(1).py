def calclator(num1,num2, operator):
    if operator == "+":
        print(num1+num2)
    elif operator == "-":
        print(num1-num2)
    elif operator == "*":
        print(num1*num2)
    elif operator == "/":
        print(num1/num2)

calclator(5,9,"+")
calclator(2,38,"-")
calclator(93,83,"*")
calclator(43,63,"/")

def find_minimum(user_list):
    minimum = user_list[0]

    for i in user_list:
        if i < minimum:
            minimum = i

    print(minimum)
find_minimum([390,930])
find_minimum([390,382])
find_minimum([390,39])
find_minimum([390,29])
find_minimum([390,356])

def manual_capitalize(user_str):
    print(user_str[0].upper() + user_str[1:].lower())

str1 = input("Enter str: ")
manual_capitalize(str1)