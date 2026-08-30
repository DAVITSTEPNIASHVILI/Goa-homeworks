from django.shortcuts import render, redirect
from .models import Product
# Create your views here.
def all_prod(req):
    context = {
        'all_prod': Product.objects.all()
    }
    return render(req, 'all_prod.html', context)

def prod_det(req, id):
    context = {
        'prod': Product.objects.get(id=id)
    }
    return render(req, 'prod_det.html', context)

def add_prod(req):
    if req.method == 'POST':
        title = req.POST.get('title')
        price = req.POST.get('price')

        Product(title=title, price=price).save()

        return redirect('all_prod')

    return render(req, 'add_prod.html')