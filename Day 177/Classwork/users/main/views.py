from django.shortcuts import render

# Create your views here.
def main_page(req):
    return render(req, 'main.html')

def aboutUs_page(req):
    return render(req, 'about.html')

def contact_page(req):
    return render(req, 'contact.html')