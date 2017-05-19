# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseForbidden
from django.views.generic import TemplateView
from django.core import serializers
import json

from models import Todo
from django.contrib.auth.models import User


# Create your views here.
def index(request):
  return HttpResponse('Hello world')

def deleteTodo(request, pk):
  if request.method == 'DELETE':
    todo = Todo.objects.get(pk=pk)
    if todo.user.id == request.user.id:
      todo.delete()
      return HttpResponse('Success')
    else:
      return HttpResponseForbidden('Not your todo!!')
  return redirect('todos')

class Todos(TemplateView):
  def get(self, request, **kwargs):
    if request.user.is_authenticated():
      todos = Todo.objects.filter(user=request.user)
      context = {
          'todos': serializers.serialize('json', todos)
      }
      return render(request, 'todos.html', context=context)
    else:
      return redirect('login')
  def post(self, request, **kwargs):
    id = int(request.POST['id'])
    title = request.POST['title']
    text = request.POST['text']
    user = int(request.POST['user'])
    if id > 0 and request.user.id == user:
      Todo.objects.filter(pk=id).update(title=title, text=text)
    elif id <= 0:
      Todo(title=title, text=text, user=request.user).save()
    return redirect('todos')