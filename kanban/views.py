# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponse, JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework import mixins
from rest_framework import generics
from django.shortcuts import render
from . import models, serializers
from django.contrib.auth.models import User


# Create your views here.
class UserView(generics.ListAPIView):
  queryset = User.objects.all()
  serializer_class = serializers.UserSerializer

class UserDetailView(generics.RetrieveAPIView):
  queryset = User.objects.all()
  serializer_class = serializers.UserSerializer

class BoardView(mixins.CreateModelMixin, generics.ListAPIView):
  queryset = models.Board.objects.all()
  serializer_class = serializers.BoardSerializer

  def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class BoardDetailView(generics.RetrieveUpdateDestroyAPIView):
  queryset = models.Board.objects.all()
  serializer_class = serializers.BoardSerializer


