from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='all_text'),
    path('delete/<int:id>/', views.delete)
]
