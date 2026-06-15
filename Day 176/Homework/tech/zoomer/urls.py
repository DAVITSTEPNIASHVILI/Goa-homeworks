from django.urls import path
from . import views

urlpatterns = [
    path('', views.zoomer_tech),
    path('lenovo/', views.lenovo),
    path('acer/', views.acer),
    path('msi/', views.msi)
]