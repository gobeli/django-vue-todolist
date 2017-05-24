from rest_framework import serializers
from django.contrib.auth.models import User
from kanban.models import Board, Lane, Card

class BoardSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Board
    fields = ('url', 'id', 'title', 'users')

class UserSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
      model = User
      fields = ('url', 'id', 'username', 'board_set')