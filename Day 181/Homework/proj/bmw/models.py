from django.db import models

# Create your models here.
class BMW(models.Model):
    name = models.CharField()
    model = models.CharField()
    year = models.IntegerField()
    info = models.CharField()