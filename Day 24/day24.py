user_age=int(input("enter your age: "))
if user_age > 10:
    print("bigger than 10")
else:
    print("smaller than 10")

user_choice = input("Are you a student: ")
if user_choice == "yes" or user_choice == "Yes":
    is_student = True
else:
    is_student = False

print(is_student)