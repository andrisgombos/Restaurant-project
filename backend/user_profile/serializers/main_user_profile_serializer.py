from rest_framework import serializers

from comment.serializers.user_profile_comment_serializer import UserProfileCommentSerializer
from restaurant_review.serializers.user_profile_restaurant_review_serializer import \
    UserProfileRestaurantReviewSerializer
from user.serializers.main_user_serializer import MainUserSerializer
from user_profile.models import UserProfile


class MainUserProfileSerializer(serializers.ModelSerializer):
    comments = UserProfileCommentSerializer(many=True, read_only=True)
    liked_comments = UserProfileCommentSerializer(many=True, read_only=True)
    sent_reviews = UserProfileRestaurantReviewSerializer(many=True, read_only=True)
    liked_reviews = UserProfileRestaurantReviewSerializer(many=True, read_only=True)
    user = MainUserSerializer(read_only=True)

    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'first_name', 'last_name', 'location', 'phone', 'things_i_love', 'description', 'joined_date', 'profile_picture']
        read_only_fields = ['comments', 'liked_comments', 'sent_reviews', 'liked_reviews', 'user']