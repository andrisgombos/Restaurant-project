from rest_framework import serializers
from operator import itemgetter

from home.models import Home
from restaurant.serializers.main_restaurant_serializer import MainRestaurantSerializer


class HomeSerializer(serializers.ModelSerializer):
    restaurants = MainRestaurantSerializer(many=True, read_only=True)
   # highest_rated_restaurants = serializers.SerializerMethodField()

   # def get_highest_rated_restaurants(self, instance):
    #    restaurants = instance.restaurants.all().values()
     #   highest_rated_restaurants = restaurants.sort(key=itemgetter('rating'), reverse=True)[0:4]
      #  return highest_rated_restaurants

    class Meta:
        model = Home
        # fields = ['highest_rated_restaurants', 'restaurants']
        fields = ['restaurants']
        read_only_fields = ['restaurants']