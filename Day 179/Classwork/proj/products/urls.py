from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_products, name="all_products"),
    path('<str:title>', views.single_product)
]