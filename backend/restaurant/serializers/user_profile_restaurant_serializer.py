from rest_framework import serializers

from restaurant.models import Restaurant


class UserProfileRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'name']
