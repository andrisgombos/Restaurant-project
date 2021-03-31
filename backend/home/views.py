from rest_framework import filters
from rest_framework.generics import ListAPIView

from restaurant.models import Restaurant
from restaurant.serializers.main_restaurant_serializer import MainRestaurantSerializer


class HomeView(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = MainRestaurantSerializer
    permission_classes = []
    # select top four highest rated restaurants
    # search_fields = ['name', 'country', 'street', 'city', 'zip']
    filter_backends = (filters.SearchFilter,)
