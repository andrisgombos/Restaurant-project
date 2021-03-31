from rest_framework import serializers

from category.serializers.main_category_serializer import MainCategorySerializer
from restaurant.models import Restaurant
from restaurant_review.serializers.restaurant_restaurant_review_serializer import RestaurantRestaurantReviewSerializer
from user_profile.serializers.restaurant_user_profile_serializer import RestaurantUserProfileSerializer


class MainRestaurantSerializer(serializers.ModelSerializer):
    reviews = RestaurantRestaurantReviewSerializer(read_only=True, many=True)
    restaurant_owner = RestaurantUserProfileSerializer(read_only=True)
    categories = MainCategorySerializer(read_only=True, many=True)

    average_rating = serializers.SerializerMethodField()

    def get_average_rating(self, instance):
        reviews = instance.reviews.all().values()
        total = 0

        if len(reviews) == 0:
            average_rating = 0
            return average_rating
        else:
            for rating in reviews:
                total += int(rating.get('rating'))

            average_rating = int(total) / len(reviews)
            return average_rating


    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'categories', 'country', 'street', 'city', 'zip', 'website', 'phone', 'email', 'opening_hours', 'price_level', 'image', 'reviews', 'restaurant_owner', 'categories', 'average_rating']
        read_only_fields = ['reviews', 'restaurant_owner', 'categories']