from django.shortcuts import render
from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from .models import subscriber

import re

from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.
@api_view(['POST'])
def contact(request):
    data = request.data
    userMail = data['pEmail']
    msg = data['pMsg']
    name = data['pName']

    if userMail == '' or userMail == None or msg == '' or msg == None or name == '' or name == None or re.search('[0-9!@#$%^&*<>/?":;]',name) :
        return Response({'msg':'false'})
    if  re.search('\"?([-a-zA-Z0-9.`?{}]+@\w+\.\w+)\"?',userMail):
        to='pehliaashasansthan@gmail.com'
        subject = 'Someone wants to connect with us'
        html_content='<h1> Hello Pehli Aasha Foundation,</h1><p><strong>'+name+'</strong> wants to connect with us</p><br><table style="text-align:center;border:1px solid black;border-collapse:collapse"><tr style="border:1px solid black;border-collapse:collapse"><th style="border:1px solid black;border-collapse:collapse">Name</th><th style="border:1px solid black;border-collapse:collapse">Email Address</th></tr><tr style="border:1px solid black;border-collapse:collapse"><td style="border:1px solid black;border-collapse:collapse">'+name+'</td><td style="border:1px solid black;border-collapse:collapse">'+userMail+'</td></tr><tr  style="border:1px solid black;border-collapse:collapse"><th style="border:1px solid black;border-collapse:collapse" colspan="2">Message</th></tr><tr style="border:1px solid black;border-collapse:collapse"><td style="border:1px solid black;border-collapse:collapse" colspan="2">'+msg+'</td></tr><table>'
        result = EmailMultiAlternatives(subject,msg,settings.EMAIL_HOST_USER,[to])
        result.attach_alternative(html_content,'text/html')
        result.send()

    # '\"?([-a-zA-Z0-9.`?{}]+@\w+\.\w+)\"?'
        settings.EMAIL_HOST_USER = 'pehliaashasansthan@gmail.com'
        settings.EMAIL_HOST_PASSWORD='pehliaasha@363'
        subject = 'Thanks for connecting with us'
        html_content='<div style="text-align:center;"><img src="https://drive.google.com/thumbnail?id=1m4FjDxtGVlp8rFcie5ljdEoOGAC1xYIQ" alt="pehli aasha foundation"></div><h1> Namaste '+name+',</h1><p>Thanks for connecting with us,we will contact you soon 🙏</p><div style="text-align:center;"><a href="https://pehliaasha.com" style="text-decoration:none;color:black;"><button style="background-color:#0cda6fc7;width:200px;height:50px;border:none;border-radius:5px">Click here 👆</button></a></div>'
        result = EmailMultiAlternatives(subject,msg,settings.EMAIL_HOST_USER,[userMail])
        result.attach_alternative(html_content,'text/html')
        result.send()
        
        return Response({'msg':'true'})
    else:
        return Response({'msg':'false'})

@api_view(['POST'])
def subscribe(request):
    mail = request.data['mail']

    if mail == '' or mail == None:
        return Response({'msg':'false'})
    else:
        try:
            email = subscriber.objects.get(email=mail)
        except:
            email = None
        if email == None:
            

            settings.EMAIL_HOST_USER = 'pehliaashasansthan@gmail.com'
            settings.EMAIL_HOST_PASSWORD='pehliaasha@363'
            subject = 'Thanks for subscribing '
            html_content='<div style="text-align:center;"><img src="https://drive.google.com/thumbnail?id=1m4FjDxtGVlp8rFcie5ljdEoOGAC1xYIQ" alt="pehli aasha foundation"></div><p>Thanks for subscribing PEHLI AASHA FOUNDATION 🙏</p><p>Now you can get latest activities update of PEHLI AASHA FOUNDATION.</p><p>Hope you will have a nice experience with us.</p><div style="text-align:center;"><a href="https://pehliaasha.com" style="text-decoration:none;color:black;"><button style="background-color:#0cda6fc7;width:100px;height:30px;border:none;border-radius:10px">Click here 👆</button></a></div>'
            result = EmailMultiAlternatives(subject,settings.EMAIL_HOST_USER,[mail])
            result.attach_alternative(html_content,'text/html')
            result.send()
            
            email = subscriber(email=mail)
            email.save()
            return Response({'msg':'true'})
        return Response({'msg':'already'})