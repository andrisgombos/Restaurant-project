
from rest_framework.generics import ListCreateAPIView, ListAPIView, CreateAPIView, get_object_or_404, DestroyAPIView
from rest_framework.response import Response

from comment.models import Comment
from comment.serializers.main_comment_serializer import MainCommentSerializer
from restaurant_review.models import RestaurantReview


class ListCreateCommentView(ListCreateAPIView):
    '''
        # GET: Get's a list of all comments | POST: Don't use this end point to create comments

        With the **GET Method** you can get a list of all comments.

        **Don't use the POST Method to create comments. There is a separate endpoint for this below.**
        '''
    queryset = Comment.objects.all()
    serializer_class = MainCommentSerializer


class ShowAllCommentsOfGivenUserView(ListAPIView):
    '''
        # Show all comments created by a user

        This end point let's you retrieve a list of all comments by a user (specified by user_profile ID in the URL)
        '''
    serializer_class = MainCommentSerializer

    def list(self, request, *args, **kwargs):
        queryset = Comment.objects.filter(user_profile__id=kwargs['pk'])

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class CreateCommentView(CreateAPIView):
    '''
            # Creates a new comment on a review

            This end point let's you create a new comment on a review (specified by review ID in the URL)
            '''
    queryset = RestaurantReview.objects.all()
    serializer_class = MainCommentSerializer

    def create(self, request, *args, **kwargs):
        review = get_object_or_404(self.get_queryset(), id=kwargs['pk'])
        comment = Comment(text_content=request.data['text_content'], user_profile=request.user.user_profile, review=review)
        comment.save()
        return Response(self.get_serializer(comment).data)


class DeleteCommentView(DestroyAPIView):
    '''
            # Deletes a comment based on comment ID

            This end point let's you delete any comment (specified by comment ID in the URL)
            '''
    queryset = Comment.objects.all()
    serializer_class = MainCommentSerializer
