from django.conf.urls import url
from django.template import Template, Context

from . import views

urlpatterns = [
    url(r'^$', views.home, name="home"),
]
