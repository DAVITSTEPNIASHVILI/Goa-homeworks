from django.shortcuts import render
from mercedes.models import Mercedes

# Create your views here.
def mercedes_all_car(req):
    context = {
        'mercedes_cars': Mercedes.objects.all()
    }
    return render(req, 'mercedes_all_car.html', context)

def mercedes_car_detail(req, id):
    found_Car = None
    for car in Mercedes.objects.all():
        if car.id == id:
            found_Car = car
    
    context = {
        'mercedes_car': found_Car
    }
    return render(req, 'mercedes_car_detail.html', context)