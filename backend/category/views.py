# from django.shortcuts import render

# Create your views here.
from rest_framework import filters
from rest_framework.generics import ListCreateAPIView

from category.models import Category
from category.serializers.main_category_serializer import MainCategorySerializer


class ListCreateCategoryView(ListCreateAPIView):
    '''
        # GET: Get's a list of all categories | POST: Creates a new category

        With the **GET Method** you can retrieve a list of all categories.

        With the **POST Method** you can create a new category.
    '''
    queryset = Category.objects.all()
    serializer_class = MainCategorySerializer
    search_fields = ['name', ]
    filter_backends = (filters.SearchFilter,)
