from django.shortcuts import render, redirect
from . models import Product
# Create your views here.
def all_prod(req):
    context = {
        'all_prod': Product.objects.all()
    }
    return render(req, 'all_product.html', context)

def single_prod(req, id):
    found_prod = Product.objects.get(id=id)
    context = {
        'prod': found_prod
    }
    return render(req, 'single_prod.html', context)

def add_prod(req):
    if req.method == 'POST':
        title = req.POST.get('title')
        color = req.POST.get('color')
        price = req.POST.get('price')
        size = req.POST.get('size')

        Product(title=title, color=color, price=price, size=size).save()

        return redirect('all_prod')
    
    return render(req, 'add_prod.html')

def delete_prod(req, id):
    found_prod = Product.objects.get(id=id)
    found_prod.delete()
    return redirect('all_prod')