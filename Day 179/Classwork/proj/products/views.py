from django.shortcuts import render

# Create your views here.
product_database = [
    {  
        'id': 0,
        'title': 'apple',
        'price': 5
    },
    {
        'id': 1,
        'title': 'banana',
        'price': 6.7,
    },
    {
        'id': 2,
        'title': 'strawberries',
        'price': 9,
    }
]

def all_products(req):
    context = {
        "all_products": product_database 
    }
    return render(req, 'all_product.html', context)

def single_product(req, title):
    prod_info = None

    for product in product_database:
        if product['title'] == title:
            prod_info = product

    context = {
        'product': prod_info
    }
    return render(req, 'single_prod.html', context)