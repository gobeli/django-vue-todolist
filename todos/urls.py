from django.conf.urls import url

from . import views

urlpatterns = [
  url(r'^$', views.Todos.as_view(), name='todos'),
  url(r'^delete/(?P<pk>\d+)/$', views.deleteTodo, name='delete_todo'),
]