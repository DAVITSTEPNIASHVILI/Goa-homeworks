from django.shortcuts import render, redirect

# Create your views here.
def all(req):
    return render(req, 'all2.html')

def delete(req):
    return redirect('teachers')

def add(req):
    return redirect('teachers')

def edit(req):
    return redirect('teachers')
