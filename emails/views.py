from django.shortcuts import render
from django.conf import settings
# from django.core.mail import EmailMultiAlternatives, send_mail
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
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

        # to us
        TEMPLATE_ID = 'd-dd7f766ae8b54b3386b3acde943571a7'
        FROM_ID = 'pehliaashasansthan@gmail.com'
        message = Mail(
            from_email = FROM_ID,
            to_emails = 'agamr470@gmail.com'
        )
        message.dynamic_template_data = {
            "name" : name,
            "email" : userMail,
            "message" : msg
        }
        # print('name:{0},email:{1},msg:{2}'.format(name,userMail,msg),)
        message.template_id = TEMPLATE_ID

        try:
            send = SendGridAPIClient('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')
            response = send.send(message)
        except Exception as e:
            print(e)
            return Response({'msg':'false'})

        # to the user
        TEMPLATE_ID = 'd-ad0a2cedc0bc41afbbadcafc9cfdb376'
        FROM_ID = 'pehliaashasansthan@gmail.com'
        message = Mail(
            from_email=FROM_ID,
            to_emails=userMail
        )
        message.dynamic_template_data={
            "name" : name
        }
        message.template_id = TEMPLATE_ID

        try:
            send = SendGridAPIClient('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')
            response = send.send(message)
            return Response({'msg':'true'})
        except Exception as e:
            print(e)
            return Response({'msg':'false'})
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
            
            TEMPLATE_ID = 'd-4b69550f47244e7fa44c5d2c991e5efd'
            FROM_ID = 'pehliaashasansthan@gmail.com'
            message = Mail(
                from_email = FROM_ID,
                to_emails = mail
            )

            message.template_id = TEMPLATE_ID

            try:
                send = SendGridAPIClient('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')
                response = send.send(message)
            except Exception as e:
                print(e)
                return Response({'msg':'false'})
            
            email = subscriber(email=mail)
            email.save()
            return Response({'msg':'true'})
        return Response({'msg':'already'})