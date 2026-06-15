from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_users, name='all_user'),
    path('delete/', views.delete_user),
    path('add/', views.add_user),
    path('edit/', views.edit_user)
]