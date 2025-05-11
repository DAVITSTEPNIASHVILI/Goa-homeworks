names = ["David","Petre","Aleksandre","Lizi","Viktoria","Giga","Elguja","Gio","Luka","Mate"]
renewad = [i for i in names if len(i) < 6 or i[0] == "A"]
try:
    user_age = int(input("Enter your age: "))
    print(user_age)
except: print("Error")