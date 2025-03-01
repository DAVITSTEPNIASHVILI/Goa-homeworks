# You get an array of numbers, return the sum of all of the positives ones.
def positive_sum(arr):
    count = 0
    for i in arr:
        if i > 0:
            count += i

    return count
print(positive_sum([1,-2,3,4,5]))

# Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
def repeat_str(n,s):
    return s * n

print(repeat_str(8,"o"))

# It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
def remove_char(s):
    return s[1:-1]

print(remove_char("hello"))

# Complete the square sum function so that it squares each number passed into it and then sums the results together.
def square_sum(numbers):
    count = 0
    for number in numbers:
        count += number ** 2

    return count
    
print(square_sum([1,2]))

# Given an array of integers your solution should find the smallest integer.
def find_smallest_int(arr):
    # პირველი ვარიანტი
    # return min(arr)

    # მეორე ვარიანტი
    min_arr = arr[0]
    for number in arr:
        if number < min_arr:
            min_arr = number
    return min_arr

print(find_smallest_int([78,39,214,23]))