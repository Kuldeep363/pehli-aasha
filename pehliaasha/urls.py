from django.urls import path
from django.conf.urls import url
from . import views as view

urlpatterns = [
    url(r'^.*',view.home,name='home')
]
