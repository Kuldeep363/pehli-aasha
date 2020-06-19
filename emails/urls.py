from django.urls import path
from . import views as emailView

urlpatterns = [
    path('contact',emailView.contact,name='contactEmail'),
    path('subscribe',emailView.subscribe,name='subscribe'),
]
