from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def ultra_tech(req):
    return HttpResponse("""
        <div>
            <a href="vostro">Dell Vostro 3520</a> <br> <br>
            <a href="gigabyte">Gigabyte G5</a>
        </div>
    """)

def vostro(req):
    return HttpResponse("""
        <div>
            <h1>A classic and reliable business-class laptop from Dell. Equipped with an Intel Core i5 processor, 16GB of RAM, and enhanced security features (like a TPM chip to protect data). It is ideal for office environments.</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pNqsK4SBbMcWM-bYeXPM2xrKzbq6zOr_xPo4GFBtew&s=10"></img>
        </div>
    """)

def gigabyte(req):
    return HttpResponse(""" 
        <div>
            <h1>A powerful workstation and gaming rig. It features a 12th Gen Intel i5 processor and a potent RTX 4050 graphics card. It handles heavy gaming, video editing, and 3D software with ease.</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8SfY2A8ObrTx5dyj52QIQ_zzH4ZYG4FQRH76Z1V3Bw&s=10"></img>
        </div>
    """)


# <div>
#             <h1></h1>
#             <img src=""></img>
#         </div>