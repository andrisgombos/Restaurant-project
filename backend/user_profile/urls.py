from django.urls import path

from user_profile.views import ListCreateUserProfileView, RetrieveUpdateDestroyUserProfileView, \
    RetrieveUpdateDestroyLoggedInUser

urlpatterns = [
    path('', ListCreateUserProfileView.as_view()),
    path('<int:pk>/', RetrieveUpdateDestroyUserProfileView. as_view()),
    path('me/', RetrieveUpdateDestroyLoggedInUser.as_view()),
]
