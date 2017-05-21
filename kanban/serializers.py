from rest_framework import serializers
from django.contrib.auth.models import User
from kanban.models import Board, Lane, Card

class UserSerializer(serializers.HyperlinkedModelSerializer):
  # boards = serializers.PrimaryKeyRelatedField(many=True, queryset=Board.objects.all())
  class Meta:
      model = User
      fields = ('id', 'username')

class BoardSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Board
    fields = ('id', 'title', 'users')