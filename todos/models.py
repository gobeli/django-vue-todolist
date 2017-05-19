# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from datetime import datetime
from django.db import models
from django.contrib.auth.models import User

class Todo(models.Model):
  title = models.CharField(max_length=200)
  text = models.TextField()
  user = models.ForeignKey(User)
  created_at = models.DateTimeField(default=datetime.now)
