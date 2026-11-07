from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    ...

class Task(models.Model):
    title = models.TextField()
    task_owner = models.ForeignKey(User, on_delete=models.CASCADE)