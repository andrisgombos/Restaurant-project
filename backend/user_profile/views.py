from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListCreateAPIView

from user_profile.models import UserProfile
from user_profile.serializers.main_user_profile_serializer import MainUserProfileSerializer


class ListCreateUserProfileView(ListCreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = MainUserProfileSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)