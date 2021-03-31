from django.urls import path

from home.views import ListHighestRatedRestaurantsView

urlpatterns = [
    path('', ListHighestRatedRestaurantsView.as_view()),
]
