from rest_framework import serializers

from restaurant.models import Restaurant


class RestaurantReviewRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'name']
