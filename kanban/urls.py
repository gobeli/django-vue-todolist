from django.conf.urls import url, include
from . import views
from rest_framework import routers

urlpatterns = [
    url(r'^api/users', views.UserView.as_view()),
    # url(r'^$', ),
]