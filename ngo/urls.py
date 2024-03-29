from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/email/',include('emails.urls')),
    path('api/details/',include('dataDetails.urls')),
    path('',include('pehliaasha.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)
else:
    urlpatterns += staticfiles_urlpatterns()