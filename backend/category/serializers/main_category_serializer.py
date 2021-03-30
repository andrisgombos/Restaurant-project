from rest_framework import serializers

from comment.models import Comment
from restaurant.serializers.user_profile_restaurant_serializer import UserProfileRestaurantSerializer
from restaurant_review.serializers.comment_restaurant_review_serializer import CommentRestaurantReviewSerializer
from user_profile.serializers.comment_user_profile_serializer import CommentUserProfileSerializer


class MainCategorySerializer(serializers.ModelSerializer):
    restaurants = UserProfileRestaurantSerializer(many=True, read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'name']
        read_only_fields = ['restaurants']