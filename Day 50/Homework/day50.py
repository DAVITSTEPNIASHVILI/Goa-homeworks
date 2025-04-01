# 1) Create a dictionary, where the Keys should be Students’ names and Values should be the student’s Grades. Display the names of the students as well as their grades on the screen altogether.
grades = {
    "David": "10",
    "Anastasia": "10",
    "Mate": "9"
}
print(grades.items())
# 2) Create a dictionary that stores Five countries along with their capitals (in key-value pair). display the capitals in the terminal afterwards.
capitals = {
    "Georgia": "Tbilisi",
    "France": "Paris",
    "Austria": "Vienna",
    "Armenia": "Yerevan",
    "Argentina": "Buenos Aires"
}
print(capitals.values())
# 3) Create a dictionary where the Keys will be car brands and the Values will be their models. From the dictionary display one of your favorite car models on the screen.
cars = {
    "BMW": "M5",
    "Mercedes": "C class"
}
print(cars["Mercedes"])
# 4) Take a look at the documentation about Dictionaries and try to learn how to update the values in a dict. https://www.w3schools.com/python/python_dictionaries_change.asp
# use the newly learned material to complete the following task:
thisdict = {
    "name": "David"
}
thisdict["name"] = "Giorgi"
# 5) Create a Dictionary, in which you’ll store information about a book. (for example: Name of the book, Author’s name, Year of publication etc.) Then update one of the values in this dictionary and finally - display the final version of this dictionary on the screen.
book = {
    "name": "Harry Poter",
    "author": "J.K. Rowling",
}
book["name"] = "How Grinch stole the Christmas"
# 6) Create a dictionary, in which you’ll add Student  names as keys and their points as Values. Find the average of their points and display it in the terminal.
points = {
    "David": 10,
    "Mate": 9
}
print(sum(points.values()) / len(points.values()))
# 7) Create a dictionary and store a user’s information in it. but here’s the twist: You have to store the values in This dictionary as an input. ( The user has to  enter the information from the terminal. the information should include Name, Surname, Age, Height and career. )
input1 = input("Enter Name:")
input2 = input("Enter Surname:")
input3 = input("Enter Age:")
input4 = input("Enter Height:")
input5 = input("Enter Career:")
input6 = {
    "Name": input1,
    "Surname": input,
    "Age": input,
    "Height": input,
    "Career": input
}