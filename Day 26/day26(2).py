num1=int(input("Enter number: "))
num2=int(input("Enter number: "))
num3=int(input("Enter number: "))

if num1>num2 and num1>num3:
    print(num1)
elif num2>num1 and num2>num3:
    print(num2)
elif num3>num1 and num3>num2:
    print(num3)


correct_password = "Goa best"
count = 0
user_pass=input("Enter Password: ")
while user_pass != correct_password:
    count += 1
    user_pass = input("Enter password: ")
print("Correct password")
print("You needed " + str(count) + " tries!")

num1=int(input("Enter number: "))
num2=int(input("Enter number 2: "))
operator=input("Choose the operator: +, -, *, /.")

if operator == "+":print(num1+num2)
elif operator == "-":print(num1-num2)
elif operator == "*":print(num1*num2)
elif operator == "/":
    if num2 != 0:
        print(num1/num2)
    else:print("ნულზე გაყოფა არ შეიძლება")
else:print("არასწორი ოპერატორი")