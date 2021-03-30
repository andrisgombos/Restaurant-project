from django.db import models

# Create your models here.


class Category(models.Model):
    # Set name
    name = models.CharField(max_length=150)

    def __str__(self):
        return f'{self.id} | {self.name}'
