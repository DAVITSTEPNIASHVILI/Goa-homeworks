from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_prod),
    path('<str:title>', views.prod_details)
]