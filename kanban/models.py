# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

from django.contrib.auth.models import User

class Board(models.Model):
  title = models.CharField(max_length=200)
  users = models.ManyToManyField(User)

class Lane(models.Model):
  title = models.CharField(max_length=200)
  maximum = models.IntegerField()
  board = models.ForeignKey(Board)

class Card(models.Model):
  title = models.CharField(max_length=200)
  description = models.TextField()
  storyPoints = models.IntegerField()
  lane = models.ForeignKey(Lane)
  order = models.IntegerField()
