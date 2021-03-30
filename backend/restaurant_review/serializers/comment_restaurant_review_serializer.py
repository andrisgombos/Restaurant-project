from rest_framework import serializers

from restaurant.serializers.restaurant_restaurant_review_serializer import RestaurantRestaurantReviewSerializer
from restaurant_review.models import RestaurantReview


class CommentRestaurantReviewSerializer(serializers.ModelSerializer):
    restaurant = RestaurantRestaurantReviewSerializer(read_only=True)

    class Meta:
        model = RestaurantReview
        fields = ['id', 'text_content', 'rating', 'restaurant']
        read_only_fields = ['restaurant']
