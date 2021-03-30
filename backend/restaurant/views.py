from django.shortcuts import render

# Create your views here.
from rest_framework import filters
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.response import Response

from restaurant.models import Restaurant
from restaurant.serializers.main_restaurant_serializer import MainRestaurantSerializer


class ListCreateRestaurantView(ListCreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = MainRestaurantSerializer
    search_fields = ['name']
    filter_backends = (filters.SearchFilter,)

    def perform_create(self, serializer):
        serializer.save(restaurant_owner=self.request.user.user_profile)


class RetrieveUpdateDestroyRestaurantView(RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = MainRestaurantSerializer


class ShowRestaurantsByCategory(ListAPIView):
    serializer_class = MainRestaurantSerializer

    def list(self, request, *args, **kwargs):
        queryset = Restaurant.objects.filter(categories__id=kwargs['pk'])

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ShowAllRestaurantsOfUserView(ListAPIView):
    serializer_class = MainRestaurantSerializer

    def list(self, request, *args, **kwargs):
        queryset = Restaurant.objects.filter(restaurant_owner__id=kwargs['pk'])

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)