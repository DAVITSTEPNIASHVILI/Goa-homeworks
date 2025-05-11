# საკლასო დავალება
# Write a Python program that asks the user to input two numbers and then divides the first number by the second. Use exception handling to manage the following cases:

# ValueError — if the user enters something that isn’t a number.

# ZeroDivisionError — if the user tries to divide by zero.

# A general Exception to catch any other unexpected errors.
try:
    user1 = int(input("Enter number:"))
    user2 = int(input("Enter number:"))
    print(user1 / user2)
except ValueError:
    print("value error")
except ZeroDivisionError:
    print("Zero division error")
except:
    print("Error")

# საკლასო დავალება 2
try: print("try")
except:print("except")