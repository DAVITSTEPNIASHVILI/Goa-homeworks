from django.urls import path
from . import views

urlpatterns = [
    path('', views.atHome_tech),
    path('razer/', views.razer),
    path('asus_vivobook', views.asus_vivobook)
]