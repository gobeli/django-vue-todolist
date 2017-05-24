# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponse, JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework import viewsets, permissions, response
from rest_framework.decorators import list_route
from . import models, serializers


# Create your views here.

# @api_view(['GET'])
# def api_root(request, format=None):
#     return Response({
#         'users': reverse('user-list', request=request, format=format),
#         'snippets': reverse('snippet-list', request=request, format=format)
#     })

def boardView(request):
  return render(request, 'kanban.html')

class UserViewSet(viewsets.ReadOnlyModelViewSet):
  queryset = User.objects.all()
  serializer_class = serializers.UserSerializer
  permission_classes = (permissions.IsAuthenticated,)

  @list_route(renderer_classes=[JSONRenderer])
  def current(self, request, *args, **kwargs):
    user = serializers.UserSerializer(request.user, context={'request':request})
    return response.Response(user.data)

class BoardViewSet(viewsets.ModelViewSet):
  queryset = models.Board.objects.all()
  serializer_class = serializers.BoardSerializer
  permission_classes = (permissions.IsAuthenticated,)

  @list_route(renderer_classes=[JSONRenderer])
  def current(self, request, *args, **kwargs):
    boards = serializers.BoardSerializer(models.Board.objects.filter(users__id=request.user.pk), many=True, context={'request':request})
    return response.Response(boards.data)

  def perform_create(self, serializer):
    serializer.save(users=[self.request.user])


