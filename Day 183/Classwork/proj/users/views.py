from django.shortcuts import render, redirect
from .models import User
# Create your views here.
def registration(req):
    if req.method == 'POST':
        name = req.POST.get('name')
        surname = req.POST.get('surname')
        email = req.POST.get('email')
        password = req.POST.get('password')

        User(name=name, surname=surname, email=email, password=password).save()
    
    return render(req, 'registration.html')