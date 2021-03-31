
# Create your views here.
from rest_framework import filters
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.response import Response

from restaurant.models import Restaurant
from restaurant.serializers.main_restaurant_serializer import MainRestaurantSerializer


class ListCreateRestaurantView(ListCreateAPIView):
    '''
        # GET: Gets a list of all restaurants | POST: Creates a new restaurant

        The **GET Method** gets you a list of all restaurants.

        The **POST Method** let's you create a new restaurant and automatically assigns the currently logged in user profile as the **restaurant_owner**
    '''
    queryset = Restaurant.objects.all()
    serializer_class = MainRestaurantSerializer
    search_fields = ['name']
    filter_backends = (filters.SearchFilter,)

    def perform_create(self, serializer):
        serializer.save(restaurant_owner=self.request.user.user_profile)


class RetrieveUpdateDestroyRestaurantView(RetrieveUpdateDestroyAPIView):
    '''
        # Retrieve, Update or Delete any restaurant

        The **GET Method** let's you retrieve a single restaurant (specified by ID in the URL)

        The **PUT Method** let's you update (all fields required) a single restaurant (specified by ID in the URL)

        The **PATCH Method** let's you update (any field) a single restaurant (specified by ID in the URL)

        The **DELETE Method** let's you delete a single restaurant (specified by ID in the URL)
    '''
    queryset = Restaurant.objects.all()
    serializer_class = MainRestaurantSerializer


class ShowRestaurantsByCategory(ListAPIView):
    '''
        # Show all restaurants of a given category

        This end point let's you retrieve a list of all restaurants that belong to a category (specified by category ID in the URL)
    '''
    serializer_class = MainRestaurantSerializer

    def list(self, request, *args, **kwargs):
        queryset = Restaurant.objects.filter(categories__id=kwargs['pk'])

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ShowAllRestaurantsOfUserView(ListAPIView):
    '''
        # Show all restaurants created by a user

        This end point let's you retrieve a list of all restaurants that were created by a user (specified by user_profile ID in the URL)
    '''
    serializer_class = MainRestaurantSerializer

    def list(self, request, *args, **kwargs):
        queryset = Restaurant.objects.filter(restaurant_owner__id=kwargs['pk'])

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
