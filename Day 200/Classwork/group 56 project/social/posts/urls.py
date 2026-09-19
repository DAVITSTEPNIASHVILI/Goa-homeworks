from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_posts, name='all_post'),
    path('add_post/', views.add_post, name='add_post')
]