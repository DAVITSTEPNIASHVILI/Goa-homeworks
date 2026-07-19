from django.db import models

# Create your models here.
class Product(models.Model):
    title = models.CharField()
    color = models.CharField()
    price = models.IntegerField()
    size = models.CharField()