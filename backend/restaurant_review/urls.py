from django.urls import path

from restaurant_review.views import CreateRestaurantReviewView, GetRestaurantReviewsOfRestaurantView, \
    GetRestaurantReviewsOfUserProfileView, RetrieveUpdateDeleteRestaurantReviewView, ToggleLikeRestaurantReviewView, \
    ShowLikedRestaurantReviewsView, ShowCommentedRestaurantReviewsView, GetAllReviewsView

urlpatterns = [
    path('', GetAllReviewsView.as_view()),
    path('create/restaurant/<int:pk>/', CreateRestaurantReviewView.as_view()),
    path('restaurant/<int:pk>/', GetRestaurantReviewsOfRestaurantView.as_view()),
    path('userprofile/<int:pk>/', GetRestaurantReviewsOfUserProfileView.as_view()),
    path('<int:pk>/', RetrieveUpdateDeleteRestaurantReviewView.as_view()),
    path('like/<int:pk>/', ToggleLikeRestaurantReviewView.as_view()),
    path('liked-reviews/', ShowLikedRestaurantReviewsView.as_view()),
    path('my-comments/', ShowCommentedRestaurantReviewsView.as_view()),
]
