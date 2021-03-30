
from rest_framework.generics import ListCreateAPIView, ListAPIView, CreateAPIView, get_object_or_404, DestroyAPIView
from rest_framework.response import Response

from comment.models import Comment
from comment.serializers.main_comment_serializer import MainCommentSerializer
from restaurant_review.models import RestaurantReview


class ListCreateCommentView(ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = MainCommentSerializer


class ShowAllCommentsOfGivenUserView(ListAPIView):
    serializer_class = MainCommentSerializer

    def list(self, request, *args, **kwargs):
        queryset = Comment.objects.filter(user_profile__id=kwargs['pk'])

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class CreateCommentView(CreateAPIView):
    queryset = RestaurantReview.objects.all()
    serializer_class = MainCommentSerializer

    def create(self, request, *args, **kwargs):
        review = get_object_or_404(self.get_queryset(), id=kwargs['pk'])
        comment = Comment(text_content=request.data['text_content'], user_profile=request.user.user_profile, review=review)
        comment.save()
        return Response(self.get_serializer(comment).data)


class DeleteCommentView(DestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = MainCommentSerializer
