from rest_framework import serializers

from restaurant.serializers.restaurant_restaurant_review_serializer import RestaurantRestaurantReviewSerializer
from restaurant_review.models import RestaurantReview


class RestaurantRestaurantReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = RestaurantReview
        fields = ['id', 'text_content', 'rating']
        read_only_fields = []