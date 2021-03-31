from rest_framework import serializers

from restaurant.serializers.restaurant_review_restaurant_serializer import RestaurantReviewRestaurantSerializer
from restaurant_review.models import RestaurantReview


class CommentRestaurantReviewSerializer(serializers.ModelSerializer):
    restaurant = RestaurantReviewRestaurantSerializer(read_only=True)

    class Meta:
        model = RestaurantReview
        fields = ['id', 'text_content', 'rating', 'restaurant']
        read_only_fields = ['restaurant']
