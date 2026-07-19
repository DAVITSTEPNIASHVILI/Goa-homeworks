from django.shortcuts import render, redirect
from bmw.models import Bmw_Car

# Create your views here.
def all_bmw(req):
    context = {
        'all_cars': Bmw_Car.objects.all()
    }

    return render(req, 'cars.html', context)

def car_details(req, id):
    found_car = None
    for car in Bmw_Car.objects.all():
        if car.id == id:
            found_car = car
        print(car)
    
    context = {
        'found_car': found_car
    }
    return render(req,'car_details.html',context)

def delete_car(req, id):
    found_car_to_delete = None
    for car in Bmw_Car.objects.all():
        if car.id == id:
            found_car_to_delete = car
    found_car_to_delete.delete()
    return redirect('all_cars')