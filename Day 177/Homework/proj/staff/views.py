from django.shortcuts import render, redirect

# Create your views here.
def all(req):
    return render(req, 'all3.html')

def delete(req):
    return redirect('staff')

def add(req):
    return redirect('staff')

def edit(req):
    return redirect('staff')

def dashboard(req):
    return render(req, 'dashboard.html')