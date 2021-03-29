from django.db import models

# Create your models here.
from restaurant_review.models import RestaurantReview
from user_profile.models import UserProfile


class Comment(models.Model):
    # ---- NON RELATED FIELDS ---- #

    # Set text content
    text_content = models.CharField(max_length=1000)
    # Set created date
    date_created = models.DateTimeField(auto_now_add=True)
    # Set modified date
    modified_date = models.DateTimeField(auto_now=True)

    # ---- RELATED FIELDS ---- #

    # Set UserProfile (Comment Author)
    user_profile = models.ForeignKey(to=UserProfile, on_delete=models.CASCADE, related_name='comments')
    # Set List of Users that like the comment
    liked_by = models.ManyToManyField(to=UserProfile, related_name='liked_comments')
    # Set review
    review = models.ForeignKey(to=RestaurantReview, on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return f'{self.id} | Comment: {self.text_content[0:30]} ... | by: {self.user_profile.user.username}'