from django.db import models

# Create your models here.

class subscriber(models.Model):
    email = models.EmailField(blank=False,default="example@kr.com")

    def __str__(self):
        return self.email
    