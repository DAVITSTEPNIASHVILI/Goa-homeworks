from django.shortcuts import render
from bmw.models import BMW

# Create your views here.
def bmw_all_car(req):
    context = {
        'bmw_cars': BMW.objects.all()
    }

    return render(req, 'bmw_all_car.html', context)

def bmw_car_detail(req, id):
    found_Car = None
    for car in BMW.objects.all():
        if car.id == id:
            found_Car = car
    
    context = {
        'bmw_car': found_Car
    }
    return render(req, 'bmw_car_detail.html', context)