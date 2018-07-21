from django.db import models

class Data(models.Model):
    humidity = models.IntegerField(default=0)
    temperature = models.IntegerField(default=0)
