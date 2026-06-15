from . import views
from django.urls import path

urlpatterns = [
    path('a3/', views.a3),
    path('a2/', views.a2),
    path('a6/', views.a6)
]