from django.urls import path

from search.views import UsersSearchView, RestaurantsSearchView, ReviewsSearchView

urlpatterns = [
    path('users/', UsersSearchView.as_view()),
    path('restaurants/', RestaurantsSearchView.as_view()),
    path('reviews/', ReviewsSearchView.as_view()),
]
