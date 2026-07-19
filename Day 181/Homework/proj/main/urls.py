from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_car_brand, name='all_car_brand')
]