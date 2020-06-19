from django.db import models
from django.template.defaultfilters import slugify
# Create your models here.

class members(models.Model):
    firstName = models.CharField(max_length=100,blank=False,null=False,default='abc')
    lastName = models.CharField(max_length=100,blank=False,null=False,default='xyz')
    dob = models.DateField(auto_now_add=False)
    email = models.EmailField(blank=False,null=False,default='abc@xyz.com')
    phone = models.IntegerField(blank=False,null=False,default=123)
    organization = models.CharField(max_length=200,blank=True,null=True)
    msg = models.TextField(max_length=1000,blank=True,null=True)
    idProof = models.ImageField(upload_to='proofs/')
    condition = models.BooleanField(blank=False,null=False,default=False)
    approved = models.BooleanField(blank=False,null = False,default=False)

    def __str__(self):
        return self.firstName + ' ' + self.lastName


def get_image(insatnce,filename):
    title = insatnce.event.eventName
    slug = slugify(title)
    return 'events/images/%s-%s'%(slug,filename)

class event(models.Model):
    eventName = models.CharField(max_length=250,blank=False,null=False)
    eventDate = models.DateField(auto_now_add=False,default='2020-02-12')


    def __str__(self):
        return self.eventName


class eventImage(models.Model):
    event = models.ForeignKey(event,on_delete=models.CASCADE)
    image = models.ImageField(upload_to=get_image,default='abc.jpg')

    def __str__(self):
        return self.event.eventName

class eventVideo(models.Model):
    event = models.ForeignKey(event,on_delete=models.CASCADE)
    video = models.CharField(max_length=250,blank=False,null=False)

    def __str__(self):
        return self.event.eventName
    
    
class notice(models.Model):
    datePublished = models.DateField(blank=False,null=False,default='2020-02-20')
    title = models.CharField(max_length=250,blank=False,null=False)
    image = models.ImageField(upload_to='notices/')
    msg = models.TextField(blank=False,null=False)
    author = models.CharField(max_length=250,blank=False,null=False)

    def __str__(self):
        return self.title
    