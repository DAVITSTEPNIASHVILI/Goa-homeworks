from turtle import *

#we want to paint a house


#step 1: draw a square

speed(6)


width(5)

color("blue")
forward(200)

left(90)
forward(200)


left(90)


forward(200)

left(90)

forward(200)


left(90)

#end of the square



#step 2: draw a door




forward(70)
color("orange")
begin_fill()
left(90)


forward(100)

right(90)


forward(60)


right(90)

forward(100)


end_fill()

penup()


goto(200, 200)

pendown()



color("red")
begin_fill()
right(150)

forward(200)

left(120)

forward(200)

end_fill()


#step 4: we want a draw a windows

color("brown")
begin_fill()


left(30)

forward(70)
left(90)


forward(70)

left(90)
forward(70)


left(90)
forward(70)

end_fill()




left(90)


forward(70)

left(90)

forward(70)

left(90)
forward(70)
right(90)

color("blue")
forward(60)

color("brown")
begin_fill()
forward(70)
right(90)
forward(70)
right(90)
forward(70)
right(90)
forward(70)
end_fill()
exitonclick()


