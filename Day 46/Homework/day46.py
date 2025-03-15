# Tuple Indexing & Slicing: Create a tuple with at least 5 elements and extract the second, last, and a slice of the middle three elements.
tuple1 = (1,True,98.0,False,"code")
tuple2,tuple3 = tuple1[1],tuple1[-1]

# Tuple Immutability: Try to modify an element in a tuple and observe what happens.
my_tuple = (10, 20, 30)


# Tuple Packing & Unpacking: Create a tuple with multiple values, unpack them into separate variables, and print each variable.
my_tuple2 = (10, 20, 30, 40, 50)
a, b, c, d, e = my_tuple2
print("a:", a)
print("b:", b)
print("c:", c)
print("d:", d)
print("e:", e)

# Tuple Methods: Use the .count() and .index() methods on a tuple containing repeated elements to count occurrences and find the first occurrence of a specific value.
print(tuple1.count([0]))
print(tuple1.index(1))

# Set Creation & Basic Operations: Create a set with at least five elements, add a new element, remove an existing one, and check if a specific value is present in the set.
set1 = {1,1,3,4,5}
set1.add(9)
set1.remove(5)
print(set1)

# Removing Duplicates: Convert a list with duplicate elements into a set to remove duplicates and then convert it back to a list.
set2 = {10,11,15,13,16,15,16,17}
list(set(set2))
print(set2)