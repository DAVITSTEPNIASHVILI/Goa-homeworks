from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_user, name='all_user'),
    path('<int:id>/', views.user_details),
    path('register/', views.register),
    path('log_in/', views.log_in, name='log_in'),
    path('log_out/', views.log_out),
    path('current_user/', views.current_user, name='curr_user'),
    path('edit/', views.edit_user)
]
