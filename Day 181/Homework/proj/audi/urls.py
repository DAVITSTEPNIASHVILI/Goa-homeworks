from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_car, name='all_car'),
    path('<int:id>/', views.car_detail)
]