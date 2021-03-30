# from django.shortcuts import render

# Create your views here.
from rest_framework import filters
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from user_profile.models import UserProfile
from user_profile.serializers.main_user_profile_serializer import MainUserProfileSerializer


class ListCreateUserProfileView(ListCreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = MainUserProfileSerializer
    search_fields = ['first_name', 'last_name', ]
    filter_backends = (filters.SearchFilter,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class RetrieveUpdateDestroyUserProfileView(RetrieveUpdateDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = MainUserProfileSerializer


class RetrieveUpdateDestroyLoggedInUser(RetrieveUpdateDestroyAPIView):
    serializer_class = MainUserProfileSerializer
    queryset = UserProfile.objects.all()

    def get_object(self):
        return self.request.user.user_profile
