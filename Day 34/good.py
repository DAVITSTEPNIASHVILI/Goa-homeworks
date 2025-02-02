from turtle import *
def draw_square(x, y):
    penup()
    goto(x, y)
    pendown()
    for i in range(4):
        left(90)
        forward(200)

draw_square(100,300)
draw_square(-300,300)
draw_square(-300,-100)
draw_square(100,-100)