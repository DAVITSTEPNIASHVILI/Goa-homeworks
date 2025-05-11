res = lambda side1,side2: side1 * side2
print(res(1,2))
print(res(2,8))
print(res(12,10))
print(res(5,8))
print(res(9,10))


numbers = [1,2,3,4,5,6,7,8,9,10]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)