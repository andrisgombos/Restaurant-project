from rest_framework import serializers
from user.serializers.comment_user_serializer import CommentUserSerializer
from user_profile.models import UserProfile


class RestaurantUserProfileSerializer(serializers.ModelSerializer):
    user = CommentUserSerializer(read_only=True)

    class Meta:
        model = UserProfile
        fields = ['id', 'user']
        read_only_fields = ['user']