
# from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListCreateAPIView
from home.serializers import HomeSerializer
from restaurant.models import Restaurant
from restaurant.serializers.main_restaurant_serializer import MainRestaurantSerializer


class ListHighestRatedRestaurantsView(ListCreateAPIView):
    '''
        # GET: Get's a list of all categories | POST: Creates a new category

        With the **GET Method** you can retrieve a list of all categories.

        With the **POST Method** you can create a new category.
    '''
    queryset = Restaurant.objects.order_by('street')[:4]
    serializer_class = MainRestaurantSerializer
