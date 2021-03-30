# from django.shortcuts import render

# Create your views here.
from rest_framework import filters
from rest_framework.generics import ListCreateAPIView

from category.models import Category
from category.serializers.main_category_serializer import MainCategorySerializer


class ListCreateCategoryView(ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = MainCategorySerializer
    search_fields = ['name', ]
    filter_backends = (filters.SearchFilter,)
