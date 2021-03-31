from rest_framework import serializers

from category.serializers.main_category_serializer import MainCategorySerializer
from restaurant.models import Restaurant
from restaurant_review.serializers.restaurant_restaurant_review_serializer import RestaurantRestaurantReviewSerializer
from user_profile.serializers.restaurant_user_profile_serializer import RestaurantUserProfileSerializer


class MainRestaurantSerializer(serializers.ModelSerializer):
    reviews = RestaurantRestaurantReviewSerializer(read_only=True, many=True)
    restaurant_owner = RestaurantUserProfileSerializer(read_only=True)
    categories = MainCategorySerializer(read_only=True, many=True)

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'categories', 'country', 'street', 'city', 'zip', 'website', 'phone', 'email', 'opening_hours', 'price_level', 'image', 'reviews', 'restaurant_owner', 'categories']
        read_only_fields = ['reviews', 'restaurant_owner', 'categories']
