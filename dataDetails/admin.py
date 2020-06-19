from django.contrib import admin

# Register your models here.
from .models import members,event,eventImage,eventVideo,notice

admin.site.register(members)
admin.site.register(event)
admin.site.register(eventImage)
admin.site.register(eventVideo)
admin.site.register(notice)