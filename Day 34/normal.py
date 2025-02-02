from turtle import *
#first square
penup()
goto(100,100)
pendown()
for i in range(4):
    forward(200)
    left(90)
#second square
penup()
goto(-300, 300)
pendown()
left(90)
for i in range(4):
    right(90)
    forward(200)
#third square
penup()
goto(-300, -100)
pendown()
for i in range(4):
    right(90)
    forward(200)
#fourth square
penup()
goto(100, -100)
pendown()
for i in range(4):
    right(90)
    forward(200)
exitonclick()