from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_phones, name='all_phones'),
    path('<int:id>/', views.phone_details),
    path('delete/<int:id>/', views.delete_phone)
]
