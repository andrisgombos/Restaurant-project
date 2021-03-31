from django.urls import path

from user.views import DeleteUserView

urlpatterns = [
    path('delete/', DeleteUserView.as_view()),
]
