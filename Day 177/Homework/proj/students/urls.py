from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.all, name='students'),
    path('delete/', views.delete),
    path('add/', views.add),
    path('edit/', views.edit)
]