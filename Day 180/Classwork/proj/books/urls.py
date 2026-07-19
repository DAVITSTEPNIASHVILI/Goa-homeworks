from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_books),
    path('<int:id>', views.book_details),
    path('title/<int:id>', views.title_by_id)
]