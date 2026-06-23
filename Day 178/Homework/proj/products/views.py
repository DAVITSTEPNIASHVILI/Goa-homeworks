from django.shortcuts import render

# Create your views here.
def product_list(request):
    arr = {
        "products": {
            "Apple": 2.5,
            "Banana": 3.0,
            "Milk": 4.2,
            "Bread": 1.8,
            "Coffee": 12.5
        },
        "nums": [1, 2, 3, 4, 5],
        "words": ["apple", "banana", "milk", "bread", "coffee"],
        "ages": [18, 25, 30, 40, 50],
        "scores": [90, 85, 78, 92, 88]
    }
    return render(request, 'index.html', arr)