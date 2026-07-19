from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_prod, name='all_prod'),
    path('<int:id>/', views.single_prod),
    path('add/', views.add_prod),
    path('delete/<int:id>/', views.delete_prod)
]
