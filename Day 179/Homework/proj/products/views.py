from django.shortcuts import render

# Create your views here.
def all_prod(req):
    product_database = [
        {  
            'id': 0,
            'title': 'apple',
            'price': 5,
        },
        {  
            'id': 1,
            'title': 'banana',
            'price': 6,
        }
    ]
    return render(req, 'all_prod.html', {
        'products': product_database
    })

def prod_details(req, title):
    product_info = None

    product_database = [
        {  
            'id': 0,
            'title': 'apple',
            'price': 5,
        },
        {  
            'id': 1,
            'title': 'banana',
            'price': 6,
        }
    ]

    for prod in product_database:
        if prod["title"] == title:
            product_info = prod

    return render(req, 'prod_details.html', {
        'prod': product_info
    })