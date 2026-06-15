from . import views
from django.urls import path

urlpatterns = [
    path('c_class/', views.c_class),
    path('a_class/', views.a_class),
    path('cla/', views.cla)
]