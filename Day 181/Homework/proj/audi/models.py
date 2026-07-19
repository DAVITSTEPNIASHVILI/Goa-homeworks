from django.db import models

# Create your models here.
class Audi(models.Model):
    name = models.CharField()
    model = models.CharField()
    year = models.IntegerField()
    info = models.CharField()