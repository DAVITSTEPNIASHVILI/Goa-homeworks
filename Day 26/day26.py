user_num=int(input("Enter number: "))
# user_num=-9
if user_num>0:
    print("Bigger than 0")
elif user_num==0:
    print("0")
else:
    print("smaller than 0")



user_num1=int(input("Enter number: "))
user_num2=int(input("Enter number: "))
if user_num1>user_num2:range1=range(user_num2, user_num1+1)
elif user_num2>user_num1:range1=range(user_num1, user_num+1)
else:print("numbers are equal")

for i in range(1,2):print(i)


user_score=int(input("Enter your score: "))

if user_score>=90 and user_score<=100:print("A")
elif user_score>=80:print("B")
elif user_score>=70:print("C")
elif user_score>=60:print("D")
else:print("F")