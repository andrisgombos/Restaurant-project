from rest_framework import serializers

from user.serializers.restaurant_review_user_serializer import RestaurantReviewUserSerializer
from user_profile.models import UserProfile


class RestaurantReviewUserProfileSerializer(serializers.ModelSerializer):
    user = RestaurantReviewUserSerializer(read_only=True)

    class Meta:
        model = UserProfile
        fields = ['id', 'user']
        read_only_fields = ['user']
