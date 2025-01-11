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
incorrect_count = 0

while True:
    password = input("Enter the password: ")
    if password == correct_password:
        print("სწორია.")
    else:
        incorrect_count += 1
        print("არასწორია. თავიდან ცადე.")
print(incorrect_count)

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


