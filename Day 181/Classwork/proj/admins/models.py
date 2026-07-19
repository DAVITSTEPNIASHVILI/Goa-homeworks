from django.db import models

# Create your models here.
class Admin(models.Model):
    user_id = models.IntegerField()
    name = models.CharField()