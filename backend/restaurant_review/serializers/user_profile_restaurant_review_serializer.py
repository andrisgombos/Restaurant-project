from rest_framework import serializers

from restaurant_review.models import RestaurantReview


class UserProfileRestaurantReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantReview
        fields = ['id', 'text_content', 'rating', 'restaurant']