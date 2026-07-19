from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_groups),
    path('<int:id>', views.group_info)
]