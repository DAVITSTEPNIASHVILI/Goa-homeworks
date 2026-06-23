from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.all, name='staff'),
    path('delete/', views.delete),
    path('add/', views.add),
    path('edit/', views.edit),
    path('dashboard/', views.dashboard)
]