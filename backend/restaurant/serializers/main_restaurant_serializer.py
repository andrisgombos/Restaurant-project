from rest_framework import serializers

from restaurant.models import Restaurant


class MainCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'