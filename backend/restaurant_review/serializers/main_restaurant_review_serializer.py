from rest_framework import serializers

from restaurant_review.models import RestaurantReview


class MainCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantReview
        fields = '__all__'