from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def atHome_tech(req):
    return HttpResponse("""
        <div>
            <a href="razer">Razer Blade 16</a> <br> <br>
            <a href="asus_vivobook">Asus VivoBook Go OLED</a>
        </div>
    """)

def razer(req):
    return HttpResponse("""
        <div>
            <h1>An ultra-premium gaming laptop, often called "the MacBook of the Windows world." It features a top-of-the-line Intel i9 processor, an RTX 4080 graphics card, a stunning Mini-LED display, and a premium black aluminum chassis.</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDoCYej8rHjLWRVCIknYi0YDTN7y_7RemrnZgM3fAfoQ&s=10"></img>
        </div>
    """)

def asus_vivobook(req):
    return HttpResponse(""" 
        <div>
            <h1>A sleek and lightweight notebook featuring a gorgeous OLED display with vibrant colors. Powered by an AMD Ryzen 5 processor, it is perfect for watching high-quality movies, editing photos, and computing on the go.</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFEAmYs4RwQy2qpiQawUKzM8vZ9lQl12Fu6Zfq6xTcA&s"></img>
        </div>
    """)