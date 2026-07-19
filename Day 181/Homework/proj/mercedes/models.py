from django.db import models

# Create your models here.
class Mercedes(models.Model):
    name = models.CharField()
    model = models.CharField()
    year = models.IntegerField()
    info = models.CharField()