
# Create your views here.
from rest_framework.generics import CreateAPIView, get_object_or_404, ListAPIView, RetrieveUpdateDestroyAPIView, \
    UpdateAPIView
from rest_framework.response import Response

from restaurant.models import Restaurant
from restaurant_review.models import RestaurantReview
from restaurant_review.serializers.main_restaurant_review_serializer import MainRestaurantReviewSerializer


class CreateRestaurantReviewView(CreateAPIView):
    '''
                # Create a new review on a specified restaurant

                This end point let's you create a new review on any restaurant (specified by ID in the URL).

                The currently logged in user is automatically assigned as the author of the review.
                '''
    queryset = Restaurant.objects.all()
    serializer_class = MainRestaurantReviewSerializer

    def create(self, request, *args, **kwargs):
        restaurant = get_object_or_404(self.get_queryset(), id=kwargs['pk'])
        review = RestaurantReview(text_content=request.data['text_content'], user_profile=request.user.user_profile,
                                  restaurant=restaurant)
        review.save()
        return Response(self.get_serializer(review).data)


class GetRestaurantReviewsOfRestaurantView(ListAPIView):
    '''
        # Get all reviews of a restaurant

        This end point let's you retrieve all reviews of a restaurant (specified by ID in the URL)
    '''
    serializer_class = MainRestaurantReviewSerializer

    def list(self, request, *args, **kwargs):
        queryset = RestaurantReview.objects.filter(restaurant__id=kwargs['pk'])

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class GetRestaurantReviewsOfUserProfileView(ListAPIView):
    '''
        # Get all reviews created by a given user profile

        This end point let's you retrieve all reviews created by a user profile (specified by ID in the URL)
    '''
    serializer_class = MainRestaurantReviewSerializer

    def list(self, request, *args, **kwargs):
        queryset = RestaurantReview.objects.filter(user_profile__id=kwargs['pk'])

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class RetrieveUpdateDeleteRestaurantReviewView(RetrieveUpdateDestroyAPIView):
    '''
            # Retrieve, Update or Delete a single Review (specified by ID in the URL)

            With the **GET Method** you can retrieve any review (specified by ID in the URL)
            With the **PUT Method** you can update (all fields required) any review (specified by ID in the URL)
            With the **PATCH Method** you can update (any field) any review (specified by ID in the URL)
            With the **DELETE Method** you can delete any review (specified by ID in the URL)
        '''
    queryset = RestaurantReview.objects.all()
    serializer_class = MainRestaurantReviewSerializer


class ToggleLikeRestaurantReviewView(UpdateAPIView):
    '''
            # Like or Unlike a review. PATCH is preferred.

            This end point let's you either like or unlike a review.
        '''
    serializer_class = MainRestaurantReviewSerializer

    def update(self, request, *args, **kwargs):
        review = RestaurantReview.objects.get(id=kwargs['pk'])
        liked_by = review.liked_by.values()

        if len(liked_by) == 0:
            review.liked_by.add(request.user.user_profile)
            return Response(self.get_serializer(review).data)

        for liker in liked_by:
            if liker['id'] == request.user.id:
                review.liked_by.remove(request.user.user_profile)
                return Response(self.get_serializer(review).data)

        # review.liked_by.add(request.user.user_profile)
        # return Response(self.get_serializer(review).data)


class ShowLikedRestaurantReviewsView(ListAPIView):
    '''
                # Show all reviews that the currently logged in user liked

                This end point let's you get a list of all reviews that the currently logged in user profile has liked.
            '''
    serializer_class = MainRestaurantReviewSerializer

    def list(self, request, *args, **kwargs):
        queryset = RestaurantReview.objects.filter(liked_by=request.user.id)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ShowCommentedRestaurantReviewsView(ListAPIView):
    '''
                # Show all reviews that the currently logged in user commented on

                This end point let's you get a list of all the reviews that the currently logged in user comented on.
            '''
    serializer_class = MainRestaurantReviewSerializer

    def list(self, request, *args, **kwargs):
        queryset = RestaurantReview.objects.filter(comments__user_profile__user=request.user.id)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
