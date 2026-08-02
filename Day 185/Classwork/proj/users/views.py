from django.shortcuts import render, redirect
from .models import User
# Create your views here.
def all_user(req):
    context = {
        'all_users' : User.objects.all()
    }
    return render(req, 'all_users.html', context)

def user_details(req, id):
    context = {
        'found_user': User.objects.get(id=id)
    }

    return render(req, 'user_detail.html', context)


def register(req):
    if req.method == "POST":
        username = req.POST.get('username')
        email = req.POST.get('email')
        password = req.POST.get('password')

        User(username=username, email=email, password=password).save()

        return redirect('all_user')
    
    return render(req, 'register.html')

def log_in(req):
    if req.method == 'POST':
        email = req.POST.get('email')
        password = req.POST.get('password')


        found_user = User.objects.get(email=email, password=password)
        found_user.save()
        return redirect('all_user')
    
    return render(req, 'log_in.html')
