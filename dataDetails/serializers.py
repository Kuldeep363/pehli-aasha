from rest_framework import serializers
from .models import members,event,notice

class memberSerializer(serializers.ModelSerializer):
    class Meta:
        model = members
        fields = '__all__'

class eventSerializer(serializers.ModelSerializer):
    class Meta:
        model = event
        fields = '__all__'

class noticeSerializer(serializers.ModelSerializer):
    class Meta:
        model = notice
        fields = '__all__'