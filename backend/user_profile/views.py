# from django.shortcuts import render

# Create your views here.
from rest_framework import filters
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from user_profile.models import UserProfile
from user_profile.serializers.main_user_profile_serializer import MainUserProfileSerializer


class ListCreateUserProfileView(ListCreateAPIView):
    '''
    # GET: List of all user profiles | POST: create new user profile

    With the **GET Method** you can retrieve all user profiles
    With the **POST Method** you can create a new user profile
    '''
    permission_classes = []
    queryset = UserProfile.objects.all()
    serializer_class = MainUserProfileSerializer
    search_fields = ['first_name', 'last_name', ]
    filter_backends = (filters.SearchFilter,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class RetrieveUpdateDestroyUserProfileView(RetrieveUpdateDestroyAPIView):
    '''
        # Any user profile (specified by the ID in the URL)

        With the **GET Method** you can retrieve a given user profile by ID in the URL.
        With the **PUT Method** you can fully update (all fields required) the given user profile by ID in the URL.
        With the **PATCH Method** you can partially update the given user profile by ID in the URL.
        With the **DELETE Method** you can delete the given user profile by ID in the URL.
        '''
    queryset = UserProfile.objects.all()
    serializer_class = MainUserProfileSerializer


class RetrieveUpdateDestroyLoggedInUser(RetrieveUpdateDestroyAPIView):
    '''
    # Only currently logged in user profile

    With the **GET Method** you can retrieve the currently logged in user profile.
    With the **PUT Method** you can fully update (all fields required) the currently logged in user profile.
    With the **PATCH Method** you can partially update the currently logged in user profile.
    With the **DELETE Method** you can delete the currently logged in user profile.
    '''
    serializer_class = MainUserProfileSerializer
    queryset = UserProfile.objects.all()

    def get_object(self):
        return self.request.user.user_profile
