from rest_framework import filters
from rest_framework.generics import ListAPIView

from restaurant.models import Restaurant
from restaurant_review.models import RestaurantReview
from restaurant_review.serializers.main_restaurant_review_serializer import MainRestaurantReviewSerializer
from user_profile.models import UserProfile
from user_profile.serializers.main_user_profile_serializer import MainUserProfileSerializer
from restaurant.serializers.main_restaurant_serializer import MainRestaurantSerializer


class UsersSearchView(ListAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = MainUserProfileSerializer
    search_fields = ['first_name', 'last_name', 'location', 'things_i_love', 'description']
    # search_fields = ['id', 'user', 'first_name', 'last_name', 'location', 'phone', 'things_i_love', 'description',
    #                  'joined_date', 'profile_picture', 'restaurants', 'comments', 'liked_comments', 'sent_reviews',
    #                  'liked_reviews']
    filter_backends = (filters.SearchFilter,)


class RestaurantsSearchView(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = MainRestaurantSerializer
    permission_classes = []
    search_fields = ['name', 'country', 'street', 'city', 'zip']
    filter_backends = (filters.SearchFilter,)


class ReviewsSearchView(ListAPIView):
    queryset = RestaurantReview.objects.all()
    serializer_class = MainRestaurantReviewSerializer
    search_fields = ['text_content']
    # search_fields = ['id', 'text_content', 'rating', 'date_created', 'date_modified', 'liked_by']
    filter_backends = (filters.SearchFilter,)
