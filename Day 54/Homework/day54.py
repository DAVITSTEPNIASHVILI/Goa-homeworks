# 1 Task: Write a program that prints your full name.
# print არის ფუნქცია რომლითაც ვბეჭდავთ, იმას რაც ამ პრინტში წერია ასოები ბრჭყალებში უნდა დაიწეროს. ბრჭყალებში დაწერილ ინფორმაციას string ეწოდება.
print("David Stepniashvili")

# 2 Task: Print your favorite quote, including quotation marks.
# ჩავწერე ჩემი საყვარელი გამონათქვამი პრინტში
print("Don't work hard, work smart")

# 3 Task: Use the print() function to display a short poem or 3-line message, with each line printed separately.
# მე დავწერე ვეფხისტყაოსნის ერთი სტროფი 4 პრინტის გამოყენებით
print("იჯდა ვინმე მოყმე ვინმე, ჯდა მტირალი წყლისა პირსა")
print("შავი ცხენი სადავითა ჰყვა ლომსა და ვითა გმირსა")
print("ხშირად ესხა მარგალიტი, ლაგამ აბჯარ უნაგირსა")
print("ცრემლსა ვარდი დაერთვილა, გულსა მდუღრად ანატირსა")

# 4 Task: Print the result of a simple addition, like 2 + 3, using print().
# პრინტში როდესაც ვწერთ რიცხვებს მათ ბრჭყალები არ სჭირდებათ და მაგალითს როდესაც დავწერთ ის ავტომატურად შეასრულებს მას
print(2 + 3)

# 5 Task: Use print() to draw a simple shape, like a triangle or square, using * or #.
# მე ავაგე სამკუთხედი ფიფქების გამოყენებით პრინტით
print("*")
print("**")
print("***")
print("****")
print("*****")

# 6 Task: Create a variable with a numeric string (e.g., "42"), convert it to an integer, and print the result.
# მე შევქმენი ცვლადი სადაც ვინახავ სტრინგ რიცხვს, რომელსაც ჩვეულებრივ რიცხვად ვაქცევ int ფუნქციის გამოყენებით და შემდეგ ვბეჭდავთ
string_to_intenger = "42"
int(string_to_intenger)
print(string_to_intenger)

# 7 Task: Create two float variables (e.g., 3.5 and 2.5), add them together, and print the result.
# მე შევქმენი ორი ცვლადი სადაც ვინახავ ათწილად რიცხვებს - float და შევკრიბე ისინი print-ით
float1 = 5.2
float2 = 8.9
print(float1 + float2)

# 8 Task: Create two str variables (e.g., "Hello" and "World"), join them with a space in between, and print the result.
# მე შევქმენი ორი ცვლადი და შევინახე სიტყვები. კიდე ერთი ცვლადი დავამატე და მასში შევინახე იმ ორი ცვლადის ერთობლიობა და შუაში space ჩავამატე და შემდეგ დავბეჭდე
str1 = "Hello"
str2 = "World!"
result = str1 + " " + str2
print(result)

# 9 Task: Create one variable each of type int, str, and float, and use the type() function with print() to show their data types.
# მე შევქმენი ცვლადი სადაც სხვადასხვა ტიპის ინფორმაცია შევინახე და შემდეგ დავბეჭდე თუ რა ტიპის იყო იგი
mix = "David", 11, 11.4
print(type(mix))

# 10 Task: Ask the user for their age using input(), convert it to an integer, add 1, and print their age next year.
# შევქმენი ცვლადი და input-ით მომხმარებელს ვკითხე მისი ასაკი. იგი intenger-ად გადავაქციე და დავუმატე 1 რადგან მისი შემდეგი წელი დამებეჭდა
user_age = input("How old are you?: ")
user_age = int(user_age)
user_age = user_age + 1
print(user_age)

# 11 Task: Write a program that asks the user for their name and prints a greeting, like "Hello, [name]!".
# შევქმენი ცვლადი და input-ით მომხმარებელს ვკითხე მისი სახელი. პრინტში ბრჭყალების გარეთ დავწერე f და შემდეგ კლაკნილ ფრჩხილებში ცვლადის სახელი
user_name = input("What's your name?: ")
print(f"Hello {user_name}")

# 12 Task: Ask the user for their age and then print how old they will be next year.
# შევქმენი ცვლადი და input-ით მომხმარებელს ვკითხე მისი ასაკი. იგი intenger-ად გადავაქციე და დავუმატე 1 რადგან მისი შემდეგი წელი დამებეჭდა
user_age = input("How old are you?: ")
user_age = int(user_age)
user_age = user_age + 1
print(f"Next year you will be {user_age}")

# 13 Task: Ask the user for two numbers (as input), convert them to integers, and print the sum.
# შევმენი ორი ცვლადი სადაც მომხმარებელს შემოვატანინე ორი რიცხვი. ისინი გადავაქციე intenger-ად და ახალ ცვლადში შევინახე მათი ჯამი და შემდეგ დავბეჭდე ის
user_nums = input("Enter number: ")
user_nums2 = input("Enter number: ")
num1 = int(user_nums)
num2 = int(user_nums2)
result1 = num1 + num2
print(result1)

# 14 Task: Ask the user for their favorite color and then print a message like "Your favorite color is [color]!".
# მე შევქმენი ცვლადი სადაც მომხმარებელს შემოვატანინე მისი საყვარელი ფერი და შემდეგ f-ის გამოყენებით ჩავსვი მისი შემოტანილი ინფორმაცია პრინტში
user_color = input("Enter your fav color: ")
print(f"Your favourite color is {user_color}")

# 15 Task: Ask the user for their height (in cm) and check if they are taller than 150 cm. Print an appropriate message based on their height.
# მე შევქმენი ცვლადი სადაც მომხმარებელს შემოვატანინე მისი სიმაღლე. იგი გადავაქციე intenger-ად და დავწერე ბირობითი განცხადებები if და else. if-ით შევამოწმე იგი იყო 150 სანტიმეტრზე მაღალი ხოლო else-თი დაბალი.
user_height = input("Enter your height: ")
nums = int(user_height)
if nums > 150:
    print("You are taller than 150 cm")
else:
    print("You aren't taller than 150 cm")

# 16 Task: Write a program that uses a for loop to print the numbers from 1 to 5.
# for ციკლი არის ციკლი რომელიც შეგვიძლია ბევრჯერ გავამეოროთ და range-ით ვუთითებთ დიაპაზონს და ვპრინტავთ i-ს იმიტომ რომ საიტერაციო ცვლადს i ეწოდება
for i in range(1,6):
    print(i)

# 17 Task: Create a string (e.g., "Python") and use a for loop to print each letter of the string on a new line.
# for ციკლი გადაუვლის მთელ სტრინგს და ყველას ცალ-ცალკე დაბეჭდავს
string = "Python"
for i in string:
    print(i)

# 18 Task: Use a for loop to calculate and print the sum of numbers from 1 to 10.
# ეს კოდი დაითვლის 1-დან 11-მდე(10-ის ჩათვლით) და დაემატება თითოეული რიცხვი ცვლადს
total_sum = 0
for i in range(1,11):
    total_sum += i

# 19 Task: Write a for loop to print the multiplication table for the number 2 (i.e., 2x1, 2x2, ..., 2x5).
# შევქმენი ცვლადი სადაც შევინახე 2. შემდეგ 1-დან 5-ის ჩათვლით f-ით 2 ჩავწერეთ x და საიტერაციო ცვლადის სახელი
number = 2
for i in range(1,6):
    print(f"{number} x {i}")

# 20 Task: Use a for loop to print all even numbers between 2 and 20 (inclusive).
# 2,21,2 ნიშნავს იმას რომ 2-დან 20-ის ჩათვლით ოღონდ 2-ით გადადიოდეს. მაგალითად(2,4,6,8,10,12,14,16,18,20)
for i in range(2,21,2):
    print(i)

# 21 Task: Write a while loop that prints numbers from 1 to 5.
# შევქმენი ცვლადი სადაც შევინახე 1. შემდეგ სანამ i ნაკლებია ან ტოლია 5-ზე დაბეჭდოს i და i მიუმატოს და გახადოს ყოველ ჯერზე 1
i = 1
while i <= 5:
    print(i)
    i += 1

# 22 Task: Use a while loop to calculate and print the sum of numbers from 1 to 5.
# შევქმენით ცვლადი სადაც შევინახეთ ნული. სანამ i არ გაუტოლდება 5-ს დაემატოს ყველა ის რიცხვი რაც შეხვდება i-ს.
total_sum = 0
i = 1
while i <= 5:
    total_sum += i
    i += 1

# 23 Task: Write a while loop that prints the numbers from 10 down to 1.
# შევქმენი ცვლადი სადაც შევინახე 10. შემდეგ სანამ y ნაკლებია ან ტოლია 1-ზე დაბეჭდოს y და y დააკლოს და გახადოს ყოველ ჯერზე 1-ით
y = 10
while y >= 1:
    print(y)
    y -= 1

# 24 Task: Use a while loop to print all odd numbers between 1 and 10.
# შევქმენი ცვლადი სადაც შევინახე 1. შემდეგ სანამ i ნაკლებია ან ტოლია 10-ზე დაბეჭდოს y და y დაუმატოს და გახადოს ყოველ ჯერზე 2-ით
while i <= 10:
    print(i)
    i += 2

# 25 Task: Write a while loop that repeatedly asks the user to enter something until they type "exit".
# შევქმენი ცვლადი სადაც შევინახე "exit". სანამ "exit" არ უდრის მომხმარებლის შემოტანილ ინფორმაციას მანამდე დაუბეჭდე არასწორი პაროლი, როდესაც მომხმარებლის ინფორმაცია გაუტოლდება "exit" მაშინ დაუბეჭდე სწორი პაროლი
correct = "exit"
user_input = input("Enter text: ")
while correct != user_input:
    print("Incorrect password")
    user_input = input("Enter text: ")
    print("Correct password")

# 26 Task: Create a list with 3 items and use a loop to print each item in the list.
# შევქმენი ცვლადი სადაც შევინახე 3 ელემენტი. for ციკლით გადავუარეთ ყველას და დაბეჭდეთ
list1 = [1,2,3]
for i in list1:
    print(i)

# 27 Task: Create a list and print the number of elements in the list using the len() function.
# შევქმენი ცვლადი სადაც შევინახე 7 ელემენტი. დავბეჭდე მათი რაოდენობა len ფუნქციის საშუალებით
list2 = [1,2,3,4,5,6,7]
print(len(list2))

# 28 Task: Create a list of numbers and print the second element (index 1) of the list.
# slicing-ის საშუალებით ამოვარჩიე პირველ ინდექსზე მყოფი ელემენტი და დავბეჭდე(1 იმიტომ დავწერე რომ ინდექსების ათვლა იწყება 0-დან)
nums1 = [1,2,3,4,5]
print(nums1[1])

# 29 Task: Create a list with 3 elements and add one more element to the end of the list. Print the updated list.
# dot notation-ის საშუალებით ბოლოში ჩავამატეთ ელემენტი და გამოვიყენეთ append
mix_list = [1,True,"Hello"]
mix_list.append(2)
print(mix_list)

# 30 Task: Create a list, remove an element using remove(), and print the list after the removal.
# dot notation-ით ამოვშალე ელემენტი და მივუთითე ის ელემენტი რომელიც უნდა ამომეშალა.
my_list = [1,2,3,4,5]
my_list.remove(5)
print(my_list)

# 31 Task: Use a list comprehension to create a list of squares for the numbers 1 through 5 (e.g., [1, 4, 9, 16, 25]).
# ჯერ ეს ყველაფერი ჩავწერე სიად. შემდეგ დავწერე დიაპაზონი 1-დან 6-მდე და ისინი გავამრავლე თავის თავზე
print(list(i*i for i in range(1,6)))

# 32 Task: Use a list comprehension to create a list of even numbers from 2 to 10 (inclusive).
# ჯერ ეს ყველაფერი ჩავწერე სიად. შემდეგ დავწერე დიაპაზონი 2-დან 11-მდე და თუ ის უნაშთოდ იყოფა 0-ზე მაშინ ისინი დაბეჭდოს
print(list(i for i in range(2,11) if i %2 == 0))

# 33 Task: Given a list of numbers, use a list comprehension to create a new list containing only the odd numbers.
# ჯერ ეს ყველაფერი ჩავწერე სიად. შემდეგ დავწერე დიაპაზონი 1-დან 11-მდე და 2-ით გადავიდეს step
print(list(i for i in range(1,10,2)))

# 34 Task: Given a list of strings, use a list comprehension to create a new list where each string is converted to uppercase.
# dot notation-ით გადავიყვანეთ იგი uppercase-ში upper-ის საშუალებით
list_string = ["Hello"]
print([i.upper() for i in list_string])

# 35 Task: Use a list comprehension to create a list that squares each number in a given list only if the number is divisible by 2.
# ჯერ ეს ყველაფერი ჩავწერე სიად. შემდეგ დავწერე დიაპაზონი 1-დან 6-მდე და შემდეგ დავწერე ესეთი კოდი: თუ ჩაკვადრატებული ცვლადი უნაშთოთ  იყოფა 0-ზე მაშინ იგი დაბეჭდოს
print(list(i*i for i in range(1,6) if i**2 %2 == 0))

# 36 Task: Write a function that takes a user's name as a parameter and prints a greeting, such as "Hello, [name]!".
# შევქმენი ფუნქცია სახელად name. მას პარამეტრად გადაეცა user_name. შემდეგ დავბეჭდე "Hello (და ის სახელი რომელშიც ინახება user_name-ში)"
def name(user_name):
    print(f"Hello {user_name}")
name("David")

# 37 Task: Write a function that takes two numbers as arguments, adds them together, and returns the sum.
# არგუმენტები დავუმატე ერთმანეთს შემდეგ გამოძახებით დავბეჭდე
def sum1(num1,num2): 
    return num1 + num2
print(sum1(3, 5))

# 38 Task: Write a function that takes an integer as input and returns whether it is even or odd.
# დავწერე კოდი: თუ რიცხვი უნაშთოდ იყოფა 2-ზე მაშინ დააბრუნე ლუწი,ხოლო სხვა შემთხვევაში დააბრუნე კენტი
def check_odd_or_even(num):
    if num %2 == 0:
        return "even"
    else:
        return "odd"
print(check_odd_or_even(5))

# 39 Task: Write a function that takes the length and width of a rectangle as arguments and returns the area.
# სიგრძე და სიგანე გავამრავლე ერთმანეთზე და დავაბრუნე ისინი.
def rectangle(length,width):
    return length * width
print(rectangle(2,5))

# 40 Task: Write a function that takes a string as input and returns the string reversed.
# ::-1 ნიშნავს შებრუნებულს და იგი კვადრატულ ფრჩხილებში იმიტომ დაიწერა რომ იგი slicing-ია
def string_reversed(string1):
    return string1[::-1]
print(string_reversed("Hello"))

# 41 Task: Create a tuple with 3 elements (e.g., an integer, a string, and a float) and print the tuple.
# tuple იქმნება ასეთი ფრჩხილებით - (). შევქმენი ასეთი ცვლადი და შემდეგ დავბეჭდე ის.
tuple0 = (4,"hello",5.3)
print(tuple0)

# 42 Task: Create a tuple with several items and print the second element (index 1) of the tuple.
# შევქმენი tuple. slicing-ის გამოყენებით მივუთითე პირველ ინდეხსზე მყოფი ელემენტი რომელიც არის მეორე ელემენტი და დავბეჭდე ის.
my_tuple = (1,2,3,4,5,6,7,8,9,10)
print(my_tuple[1])

# 43 Task: Create a tuple and use the len() function to print the length of the tuple.
# შევქმენი tuple. დავბეჭდე მატი რაოდენობა
tuple1 = (5,6,3,1)
print(len(tuple1))

# 44 Task: Create two tuples and use the + operator to concatenate them, then print the result.
# შევქმენი 2 tuple. result ცვლადში ისინი მივუმატე და დავბეჭდე result ცვლადი
tuples = ("Hello")
tuples1 = (" World!")
result = tuples + tuples1
print(result)

# 45 Task: Create a tuple and use an if statement to check if a specific element exists in the tuple. Print "Found" if it exists, otherwise print "Not found".
tuple_string = "statement"
if "t" in tuple_string:
    print("Found")
else:
    print("Not found")

# 46 Task: Create a set with 3 different elements (e.g., numbers or strings) and print the set.
# set იქმნება ასეთი ფრჩხილებით - {}. შევქმენი set და დავბეჭდე ის.
set0 = {1,True,"Hello World!"}
print(set0)

# 47 Task: Create a set and use an if statement to check if a specific element is in the set. Print "Yes" if the element is found, otherwise print "No".
# შევქმენი ჩემი set. in ფუნქცია გვიჩვენებს არის თუ არა მასში რაიმე ელემენტი.
set1 = {1, 2, 3, 4, 5}
if 3 in set1:
    print("Yes")
else:
    print("No")

# 48 Task: Create a set, add a new element to it using the add() method, and print the updated set.
# dot notation-ის საშუალებით და add-ით დავამატეთ 10
set2 = {1,3,5,7,9}
set2.add(10)
print(set2)

# 49 Task: Create a set, remove an element using the remove() method, and print the updated set.
# dot notation-ის საშუალებით და remove-ით წავშალეთ 3
set3 = {2,3,4,5,6,7,8,9}
set3.remove(3)
print(set3)

# 50 Task: Create two sets and use the | operator to find their union, then print the result.
# შევქმენი 2 set. შემდეგ შევქმენი result2 ცვლადი და ამით - | გავაერთიანებთ მას და დუპლიკატები მოშორდება და ამს შემდეგ დავბეჭდავთ
my_set1 = {1, 2, 3}
my_set2 = {3, 4, 5}
result2 = my_set1 | my_set2
print(result2)

# 51 Task: Create a dictionary with at least two key-value pairs (e.g., name and age), and print the dictionary.
# შევქმენი dictionary - dict  სადაც შევინახე ჩემი სახელი და ასაკი. შემდეგ დავბეჭდე ეს dict.
human = {
    "name":"David",
    "age":"11"
}
print(human)

# 52 Task: Given a dictionary, access and print the value associated with a specific key.
# შევქმენი dict და შევინახე სუპერგმირი და მისი მანქანა. print-ში ავირჩიე ეს dict  და შემდეგ ჩავწერე იმ key-ს სახელი რომლის მნიშვნელობაც მინდოდა.(key არის ამ შემთხვევაში მაგალითად: "superhero" და "car")
human2 = {
    "superhero":"Batman",
    "car":"Betcar"
}
print(human2["car"])

# 53 Task: Create a dictionary and add a new key-value pair to it. Print the updated dictionary.
# შევქმენი dict. შემდეგ მასში ჩავამატე key-დ "drift" და value-დ ჩავამატე "very good" და შემდეგ დავბეჭდე dict. 
thing = {
    "name":"car toy",
    "color":"blue"
}
thing["drift"] = "very good"
print(thing)