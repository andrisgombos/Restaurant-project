from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

def user_directory_path(instance, filename):
# Here we define the path/sub-folder where this file should be stored. In this case it will be /media-files/1/avatar.jpg for example.
    return f'{instance.id}/{filename}'


# Create your models here.
class UserProfile(models.Model):

    # ---- Non Related Fields ---- #

    # Set first name
    first_name = models.CharField(max_length=150)
    # Set last name
    last_name = models.CharField(max_length=150)
    # Set email
    email = models.EmailField(max_length=200)
    # Set location
    location = models.CharField(max_length=150, blank=True)
    # Set phone
    phone = models.CharField(max_length=10, blank=True)
    # Set things I love
    things_i_love = models.CharField(max_length=500)
    # Set description
    description = models.TextField(max_length=1000)
    # Set joined date
    joined_date = models.DateTimeField(auto_now_add=True)
    # Set profile picture
    profile_picture = models.ImageField(upload_to=user_directory_path, blank=True, null=True)

    # ---- Related Fields ---- #

    # Connect to User Model
    user = models.OneToOneField(to=User, on_delete=models.CASCADE, related_name='user_profile')

    def __str__(self):
        return f'{self.id} | {self.user.username}'