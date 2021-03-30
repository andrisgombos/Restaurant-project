from rest_framework import serializers

from category.models import Category
from restaurant.serializers.category_restaurant_serializer import CategoryRestaurantSerializer


class MainCategorySerializer(serializers.ModelSerializer):
    restaurants = CategoryRestaurantSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'restaurants']
        read_only_fields = ['restaurants']