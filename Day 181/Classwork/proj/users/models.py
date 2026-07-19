from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField()
    surname = models.CharField()
    email = models.CharField()