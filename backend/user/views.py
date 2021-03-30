from rest_framework.generics import DestroyAPIView
from django.contrib.auth import get_user_model

User = get_user_model()


class DeleteUserView(DestroyAPIView):
    '''
    # Deletes the currently logged in user.

    This end point deletes the current user. **user** is NOT the same as **user_profile**. When the user is deleted, the user profile associated with it gets deleted as well.
    '''
    queryset = User.objects.all()

    def get_object(self):
        return self.request.user
