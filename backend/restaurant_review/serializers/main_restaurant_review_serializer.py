from rest_framework import serializers

from comment.serializers.restaurant_review_comment_serializer import RestaurantReviewCommentSerializer
from restaurant.serializers.restaurant_review_restaurant_serializer import RestaurantReviewRestaurantSerializer
from restaurant_review.models import RestaurantReview
from user_profile.serializers.restaurant_review_user_profile_serializer import RestaurantReviewUserProfileSerializer


class MainRestaurantReviewSerializer(serializers.ModelSerializer):
    liked_by = RestaurantReviewUserProfileSerializer(read_only=True, many=True)
    restaurant = RestaurantReviewRestaurantSerializer(read_only=True)
    user_profile = RestaurantReviewUserProfileSerializer(read_only=True)
    comments = RestaurantReviewCommentSerializer(read_only=True, many=True)

    class Meta:
        model = RestaurantReview
        fields = ['id', 'text_content', 'rating', 'date_created', 'date_modified', 'liked_by', 'user_profile', 'restaurant', 'comments']
        read_only_fields = ['liked_by', 'restaurant', 'user_profile', 'comments', 'user_profile']
