from django.urls import path
from . import views

urlpatterns = [
    path('', views.bmw_all_car, name='bmw_all_car'),
    path('<int:id>/', views.bmw_car_detail)
]