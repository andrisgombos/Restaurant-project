from rest_framework import serializers

from restaurant.models import Restaurant


class RestaurantRestaurantReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'name']
