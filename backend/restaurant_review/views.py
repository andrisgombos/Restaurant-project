
# Create your views here.
from rest_framework.generics import CreateAPIView, get_object_or_404, ListAPIView, RetrieveUpdateDestroyAPIView, \
    UpdateAPIView
from rest_framework.response import Response

from restaurant.models import Restaurant
from restaurant_review.models import RestaurantReview
from restaurant_review.serializers.main_restaurant_review_serializer import MainRestaurantReviewSerializer


class CreateRestaurantReviewView(CreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = MainRestaurantReviewSerializer

    def create(self, request, *args, **kwargs):
        restaurant = get_object_or_404(self.get_queryset(), id=kwargs['pk'])
        review = RestaurantReview(text_content=request.data['text_content'], user_profile=request.user.user_profile,
                                  restaurant=restaurant)
        review.save()
        return Response(self.get_serializer(review).data)


class GetRestaurantReviewsOfRestaurantView(ListAPIView):
    serializer_class = MainRestaurantReviewSerializer

    def list(self, request, *args, **kwargs):
        queryset = RestaurantReview.objects.filter(restaurant__id=kwargs['pk'])

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class GetRestaurantReviewsOfUserProfileView(ListAPIView):
    serializer_class = MainRestaurantReviewSerializer

    def list(self, request, *args, **kwargs):
        queryset = RestaurantReview.objects.filter(user_profile__id=kwargs['pk'])

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class RetrieveUpdateDeleteRestaurantReviewView(RetrieveUpdateDestroyAPIView):
    queryset = RestaurantReview.objects.all()
    serializer_class = MainRestaurantReviewSerializer


class ToggleLikeRestaurantReviewView(UpdateAPIView):
    serializer_class = MainRestaurantReviewSerializer

    def update(self, request, *args, **kwargs):
        review = RestaurantReview.objects.get(id=kwargs['pk'])
        liked_by = review.liked_by.values()

        if len(liked_by) == 0:
            review.liked_by.add(request.user.user_profile)
            return Response(self.get_serializer(review).data)

        for user in liked_by:
            if user['id'] == request.user.id:
                review.liked_by.remove(request.user.user_profile)
                return Response(self.get_serializer(review).data)

        review.liked_by.add(request.user.user_profile)
        return Response(self.get_serializer(review).data)


class ShowLikedRestaurantReviewsView(ListAPIView):
    serializer_class = MainRestaurantReviewSerializer

    def list(self, request, *args, **kwargs):
        queryset = RestaurantReview.objects.filter(liked_by=request.user.id)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ShowCommentedRestaurantReviewsView(ListAPIView):
    serializer_class = MainRestaurantReviewSerializer

    def list(self, request, *args, **kwargs):
        queryset = RestaurantReview.objects.filter(comments__user_profile__user=request.user.id)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
