from rest_framework.generics import DestroyAPIView
from django.contrib.auth import get_user_model

User = get_user_model()


class DeleteUserView(DestroyAPIView):
    """
    Delete logged in user
    """
    queryset = User.objects.all()

    def get_object(self):
        return self.request.user
