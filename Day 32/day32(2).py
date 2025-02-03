input1 = int(input("Enter number 1: "))
input2 = int(input("Enter number 2: "))
print(input1 + input2)

input3 = "dog"
print(input3[::-1])

def Find_maximum(user_list):
    maximum = user_list[0]

    for i in user_list:
        if i > maximum:
            maximum = i
    print(maximum)
Find_maximum([26367,67338,4783])