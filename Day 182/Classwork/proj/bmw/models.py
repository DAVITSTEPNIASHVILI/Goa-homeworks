from django.db import models

# Create your models here.
class Bmw_Car(models.Model):
    name = models.CharField()
    year = models.IntegerField()
    price = models.IntegerField()