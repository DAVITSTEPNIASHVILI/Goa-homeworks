from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_prod, name='all_prod'),
    path('<int:id>/', views.prod_det, name='prod_det'),
    path('add/', views.add_prod)
]
