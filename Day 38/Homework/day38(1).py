def print_hello ():
    print("Hello world")

print_hello()

def print_sum(num1,num2):
    print(num1 + num2)

print_sum(7,9)

def return1():
    input1 = int(input("Enter number: "))
    input2 = input1 * 10
    return input2

return2 = return1()
print(return2)

def greet(name):
    if name == "":
        print("Hello Guest")
    else:
        print(f"Hello {name}")

greet(input("Enter name here: "))

def greet(name):
    def better_greet(user_name,user_surname):
        return "hello",user_name,user_surname
    
    result9 =  better_greet(name,"orientadze")
    return result9

print(greet("David"))



def check_even_odd(numbers):
    numbers = [1, 2, 3, 4, 5, 6]
    for numbers in numbers:
        if numbers == range(0,7,2):
            print(f"{numbers} is even")
        elif numbers == range(1,7,2):
            print(f"{numbers} is odd")
        print(numbers)
num1 = [1, 2, 3, 4, 5, 6]
check_even_odd(num1)

def find_max(numbers):
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    
    return max_num

numbers = [3, 1, 7, 2, 5]
print(find_max(numbers))

def positive_numbers(numbers):
    positive_numbers = []
    
    for num in numbers:
        if num > 0:
            positive_numbers.append(num)
    
    return positive_numbers

result6 = positive_numbers([8, -1, 5, -2, 10])
print(result6)

def sum():
    total_sum = 0 
    for i in range(total_sum,100,3):
        print(i)
    
    return total_sum

result = sum()
print(result)