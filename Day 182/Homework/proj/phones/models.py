from django.db import models

# Create your models here.
class Phone(models.Model):
    brand = models.CharField()
    seria = models.IntegerField()
    price = models.IntegerField()