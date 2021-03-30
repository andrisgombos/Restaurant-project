from django.urls import path

from user_profile.views import ListCreateUserProfileView, RetrieveUpdateDestroyUserProfileView

urlpatterns = [
    path('', ListCreateUserProfileView.as_view()),
    path('<int:pk>/', RetrieveUpdateDestroyUserProfileView. as_view()),
]