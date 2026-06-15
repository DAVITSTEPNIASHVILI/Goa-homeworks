from django.shortcuts import render, redirect

# Create your views here.
def all_users(req):
    return render(req, 'all_users.html')

def delete_user(req):
    return redirect('all_user')

def add_user(req):
    return redirect('all_user')

def edit_user(req):
    return redirect('all_user')