from django.shortcuts import render
from .forms import Register, Login
# Create your views here.
def register(req):
    context = {
        'register_form': Register()
    }
    return render(req, 'register.html', context)

def login(req):
    context = {
        'login_form': Login()
    }
    return render(req, 'login.html', context)
