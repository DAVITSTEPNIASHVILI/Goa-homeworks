# 2)
# Division with Zero Check
# Ask the user to input two numbers. Attempt to divide the first number by the second. Use error handling to manage division by zero and non-numeric inputs.
try:
    num1 = int(input("Enter the first number: "))
    num2 = int(input("Enter the second number: "))
    result = num1 / num2
    print(result)
except:
    print("Error")
# 3)
# String to Integer Conversion
# Take a string input from the user and attempt to convert it to an integer. Handle the case where the input isn’t a valid integer.
try:
    input_number = input("Enter number: ")
    result_number = int(input_number)
    print(result_number)
except:
    print("Please enter number")
# 4)
# List Index Access with Exception Handling
# Define a list with some values. Ask the user for an index number and attempt to display the corresponding element. Handle cases where the index is out of range or not a valid integer.
try:
    list1 = ["hello","world","!",1,5]
    index = int(input(f"Enter an index (0 to {len(list1) - 1}): "))
    print(f"Element at index {index}: {list1[index]}")
except IndexError:
    print("Please choose from 1 to 4")
# 5)
# Add Two Numbers with Type Checking
# Ask the user to input two values. Try to convert them to integers and add them. Handle cases where the input isn’t a valid number.
try:
    nums1 = input("Enter the first number: ")
    nums2 = input("Enter the second number: ")
    result1 = nums1 + nums2
    print(result1)
except TypeError:
    print("Please write it correctly")
# 6)
# Safe List Removal
# Create a list with a few items. Ask the user for an item to remove. Use error handling to manage cases where the item is not in the list.
my_list = ['apple', 'banana', 'cherry', 'date', 'elderberry']
print("Current list:", my_list)
item_to_remove = input("Enter the item you want to remove: ")
try:
    my_list.remove(item_to_remove)
    print(f"'{item_to_remove}' has been removed.")
    print("Updated list:", my_list)
except ValueError:
    print(f"Error: '{item_to_remove}' is not in the list.")