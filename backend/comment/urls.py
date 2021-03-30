from django.urls import path

from comment.views import ListCreateCommentView, ShowAllCommentsOfGivenUserView, CreateCommentView, DeleteCommentView

urlpatterns = [
    path('', ListCreateCommentView.as_view()),
    path('user/<int:pk>/', ShowAllCommentsOfGivenUserView.as_view()),
    path('create/review/<int:pk>/', CreateCommentView.as_view()),
    path('delete/<int:pk>/', DeleteCommentView.as_view()),
]
