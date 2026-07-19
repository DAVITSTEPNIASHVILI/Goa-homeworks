from django.shortcuts import render
from .models import Main

# Create your views here.
def all_car_brand(req):
    context = {
        'car_brands': Main.objects.all()
    }

    return render(req, 'carBrands.html', context)