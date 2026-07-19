from django.urls import path
from . import views

urlpatterns = [
    path('', views.mercedes_all_car, name='all_car'),
    path('<int:id>/', views.mercedes_car_detail)
]