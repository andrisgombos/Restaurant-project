from django.db import models

PRICE_LEVEL_CHOICE = [
    ('1', '1'),
    ('2', '2'),
    ('3', '3')
]

def user_directory_path(instance, filename):
# Here we define the path/sub-folder where this file should be stored. In this case it will be /media-files/1/avatar.jpg for example.
    return f'{instance.id}/{filename}'

# Create your models here.
class Restaurant(models.Model):
    # Set name
    name = models.CharField(max_length=250)
    # Set category
    category = models.CharField(max_length=100)
    # Set country
    country = models.CharField(max_length=100)
    # Set street
    street = models.CharField(max_length=250)
    # Set city
    city = models.CharField(max_length=100)
    # Set zip
    zip = models.CharField(max_length=5)
    # Set website
    website = models.URLField(max_length=250)
    # Set phone
    phone = models.CharField(max_length=15)
    # Set email
    email = models.CharField(max_length=250)
    # Set opening hours
    opening_hours = models.CharField(max_length=500)
    # Set price level
    price_level = models.CharField(max_length=1, choices=PRICE_LEVEL_CHOICE)
    # Set image
    image = models.ImageField(upload_to=user_directory_path)

    def __str__(self):
        return f'{self.id} | {self.name}'