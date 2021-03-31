from django.db import models

# Create your models here.
from restaurant.models import Restaurant


class Home(models.Model):
    # All restaurants
    restaurants = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE, related_name='home_model')
