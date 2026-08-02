from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_user, name='all_user'),
    path('<int:id>/', views.user_details),
    path('register/', views.register),
    path('log_in/', views.log_in)
]
