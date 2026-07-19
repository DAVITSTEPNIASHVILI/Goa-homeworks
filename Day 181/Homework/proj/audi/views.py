from django.shortcuts import render
from .models import Audi

# Create your views here.
def all_car(req):
    context = {
        'audi_cars': Audi.objects.all()
    }
    return render(req, 'audiCars.html', context)

def car_detail(req, id):
    found_Car = None
    for car in Audi.objects.all():
        if car.id == id:
            found_Car = car
    
    context = {
        'audi_car': found_Car
    }
    return render(req, 'audiCarDetail.html', context)