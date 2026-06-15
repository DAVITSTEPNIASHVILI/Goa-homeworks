from django.urls import path
from . import views

urlpatterns = [
    path('', views.main_page),
    path('about/', views.aboutUs_page),
    path('contact/', views.contact_page)
]