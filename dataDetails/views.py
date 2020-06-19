from django.shortcuts import render
from rest_framework.parsers import FormParser,MultiPartParser
from rest_framework.viewsets import ModelViewSet
from .models import members,event,eventImage,eventVideo,notice
from .serializers import memberSerializer,eventSerializer,noticeSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
import json
from datetime import datetime

from django.core.files.storage import FileSystemStorage
# Create your views here.
@api_view(['POST'])
def dataUpload(request):
    data = json.loads(request.POST['model'])
    print(data,'\n',request.FILES)
    if data['firstName'] == '' or data['lastName'] == '' or data['dob'] == '' or data['phone'] == '' or data['email'] == '' or data['condition'] == '' or request.FILES['image'] == '' or request.FILES['image'] == None:
        return Response({'msg':'false'})
    members(firstName=data['firstName'],lastName=data['lastName'],dob=data['dob'][:10],phone=data['phone'],email=data['email'],condition=data['condition'],organization=data['organization'],msg=data['msg'],idProof=request.FILES['image']).save()
    return Response({'msg':'true'})


@api_view(['POST'])
def getMember(request):
    memebers = members.objects.all()
    serializer = memberSerializer(memebers,many=True)
    return Response(serializer.data)



@api_view(['POST'])
def uploadEvent(request):
    data = request.POST
    e = event.objects.create(eventName = data['eventName'] , eventDate = data['eventDate'])
    # e.save()
    images = request.FILES.getlist('images')
    for image in images:
        i = eventImage.objects.create(event=e,image = image)
        # i.save()
        print('image saved')

    videos = request.FILES.getlist('videos')
    for video in videos:
        v = eventVideo.objects.create(event=e,video = video)
        # v.save()
        print('video saved')

        
    return Response({'msg':'true'})



@api_view(['GET'])
def get_images(request):
    images = event.objects.all()
    # print(images)
    serializer = eventSerializer(images,many = True)
    return Response(serializer.data)


@api_view(['POST'])
def uploadNotice(request):
    data = request.POST
    print(data['title'])
    image = request.FILES
    print(image)
    date_p = datetime.now()
    date_p = date_p.strftime('%Y-%m-%d')
    print(date_p)
    e = notice(datePublished = date_p, title = data['title'], msg = data['msg'], author = data['author'], image = request.FILES['image']).save()
    # e.save()

    return Response({'msg':'true'})

@api_view(['POST'])
def getNotice(request):
    notices = notice.objects.all().order_by('-id')[:3]
    serializer = noticeSerializer(notices,many=True)

    return Response(serializer.data)