from django.urls import path

from user_profile.views import ListCreateUserProfileView

urlpatterns = [
    path('', ListCreateUserProfileView.as_view()),
]