from django.urls import path
from . import views

urlpatterns = [
    path('', views.ultra_tech),
    path('vostro/', views.vostro),
    path('gigabyte/', views.gigabyte)
]