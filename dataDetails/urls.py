from django.urls import path
from . import views as view

urlpatterns = [
    path('join-data',view.dataUpload,name='dataUpload'),
    path('get-members',view.getMember,name='getMember'),
    path('get-images',view.get_images,name='getImages'),
    path('upload-event',view.uploadEvent,name='uploadEvent'),
    path('upload-notice',view.uploadNotice,name='uploadNotice'),
    path('get-notices',view.getNotice,name='getNotice')
]