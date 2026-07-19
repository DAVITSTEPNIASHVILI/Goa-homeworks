from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_bmw, name='all_cars'),
    path('<int:id>/', views.car_details),
    path('delete/<int:id>/', views.delete_car)
]