from rest_framework import serializers

from comment.models import Comment
from restaurant_review.serializers.comment_restaurant_review_serializer import CommentRestaurantReviewSerializer
from user_profile.serializers.comment_user_profile_serializer import CommentUserProfileSerializer


class MainCommentSerializer(serializers.ModelSerializer):
    user_profile = CommentUserProfileSerializer(read_only=True)
    liked_by = CommentUserProfileSerializer(read_only=True)
    review = CommentRestaurantReviewSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'text_content', 'date_created', 'date_modified', 'user_profile', 'liked_by', 'review']
        read_only_fields = ['user_profile', 'liked_by', 'review']