from . import views
from django.urls import path

urlpatterns = [
    path('e39/', views.e39),
    path('m3/', views.m3),
    path('m8/', views.m8)
]