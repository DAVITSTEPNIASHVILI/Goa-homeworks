from django.shortcuts import render, redirect

# Create your views here.
def all(req):
    return render(req, 'all.html')

def delete(req):
    return redirect('students')

def add(req):
    return redirect('students')

def edit(req):
    return redirect('students')
