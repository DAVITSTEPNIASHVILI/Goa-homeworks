from django.urls import path
from . import views

urlpatterns = [
    path('tasks/', views.task_view, name='tasks'),
    path('delete_task/<int:id>/', views.delete_task, name='delete_task')
]
