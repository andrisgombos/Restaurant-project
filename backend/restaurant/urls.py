from django.urls import path

from restaurant.views import ListCreateRestaurantView, RetrieveUpdateDestroyRestaurantView, ShowRestaurantsByCategory, \
    ShowAllRestaurantsOfUserView

urlpatterns = [
    path('', ListCreateRestaurantView.as_view()),
    path('<int:pk>/', RetrieveUpdateDestroyRestaurantView.as_view()),
    path('category/<int:pk>/', ShowRestaurantsByCategory.as_view()),
    path('owner/<int:pk>/', ShowAllRestaurantsOfUserView.as_view()),
]