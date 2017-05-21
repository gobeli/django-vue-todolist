"""todolist URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.contrib.auth import login, authenticate, views as auth_views
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('todos')
    else:
        form = UserCreationForm()
    return render(request, 'registration/register.html', {'form': form})

urlpatterns = [
    url(r'^todos/', include('todos.urls')),
    url(r'^kanban/', include('kanban.urls')),
    url(r'^register/', register, name='register'),
    url(r'^login/', auth_views.login, name='login'),
    url(r'^logout/', auth_views.logout, { 'next_page': 'login' } , name='logout'),
    url(r'^admin/', admin.site.urls),
    url(r'^$',  include('todos.urls')),
]
