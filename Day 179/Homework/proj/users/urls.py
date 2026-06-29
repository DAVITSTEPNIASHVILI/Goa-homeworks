from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_users),
    path('<int:id>', views.user_details)
]