from rest_framework import serializers
from user.serializers.comment_user_serializer import CommentUserSerializer
from user_profile.models import UserProfile


class CommentUserProfileSerializer(serializers.ModelSerializer):
    user = CommentUserSerializer(read_only=True)
    liked_by = CommentUserSerializer(read_only=True)
    review =

    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'liked_by']
        read_only_fields = ['user', 'liked_by']