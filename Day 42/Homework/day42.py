def sum_of_even_numbers(numbers):
    return sum(number for number in numbers if number % 2 == 0)

numbers = [1, 2, 3, 4, 5, 6, 7, 8]
result = sum_of_even_numbers(numbers)
print(result) 

def square_of_sum_of_odd_numbers(numbers):
    odd_numbers = [number for number in numbers if number % 2 != 0]
    return sum(odd_numbers) ** 2

numbers = [1, 2, 3, 4, 5, 6, 7, 8]
result = square_of_sum_of_odd_numbers(numbers)
print(result) 

def multiply_sums_of_even_and_odd(numbers):
    even_arr = [number for number in numbers if number % 2 == 0]  # ლუწი რიცხვები
    odd_arr = [number for number in numbers if number % 2 != 0]   # კენტი რიცხვები
    
    sum_even = sum(even_arr) 
    sum_odd = sum(odd_arr)   
    
    return sum_even * sum_odd 

numbers = [1, 2, 3, 4, 5, 6, 7, 8]
result = multiply_sums_of_even_and_odd(numbers)
print(result)