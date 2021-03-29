from django.db import models

from restaurant.models import Restaurant
from user_profile.models import UserProfile

RATING_CHOICES = [
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4', '4'),
    ('5', '5')
]

# Create your models here.
class RestaurantReview(models.Model):
    # ---- NON RELATED FIELDS ---- #

    # Set text content
    text_content = models.CharField(max_length=1000)
    # Set Rating
    rating = models.CharField(max_length=1, choices=RATING_CHOICES)
    # Set created date
    date_created = models.DateTimeField(auto_now_add=True)
    # Set modified date
    date_modified = models.DateTimeField(auto_now=True)

    # ---- RELATED FIELDS ---- #

    # Set List of Users that liked Review
    liked_by = models.ManyToManyField(to=UserProfile, related_name='liked_comments')
    # Set UserProfile (Author of Review)
    user_profile = models.ForeignKey(to=UserProfile, on_delete=models.CASCADE, related_name='sent_reviews')
    # Set restaurant
    restaurant = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE, related_name='reviews')

    def __str__(self):
        return f'{self.id} | by: {user_profile.user.username} | for: {self.restaurant}'