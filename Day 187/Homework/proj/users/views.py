from django.shortcuts import render, redirect
from .models import User
# Create your views here.
def all_user(req):
    try:
        context = {
            'all_users' : User.objects.all(),
            'current_user' : User.objects.get(isCurrentUser=True)
        }
    except:
        context = {
            'all_users' : User.objects.all(),
            'current_user' : None
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

        User(username=username, email=email, password=password, isCurrentUser=False).save()

        return redirect('all_user')
    
    return render(req, 'register.html')

def log_in(req):
    if req.method == 'POST':
        email = req.POST.get('email')
        password = req.POST.get('password')

        User.objects.update(isCurrentUser=False)
        found_user = User.objects.get(email=email, password=password)
        found_user.isCurrentUser = True
        found_user.save()
        return redirect('all_user')
    
    return render(req, 'log_in.html')


def log_out(req):
    User.objects.update(isCurrentUser=False)
    return redirect('all_user')

def current_user(req):
    try:
        context = {
            'user': User.objects.get(isCurrentUser=True)
        }
    except:
        context = {
            'user': None
        }
    return render(req, 'current_user.html', context)

def edit_user(req):
    try:
        context = {
            'current_user': User.objects.get(isCurrentUser=True)
        }
    except:
        return redirect('log_in')

    if req.method == 'POST':
        username = req.POST.get('username')
        email = req.POST.get('email')
        password = req.POST.get('password')

        curr_user = User.objects.get(isCurrentUser=True)
        if username != '':
            curr_user.username = username

        if email != '':
            curr_user.email = email

        if password != '':
            curr_user.password = password

        curr_user.save()
        return redirect('curr_user')
    return render(req, 'edit_user.html', context)