from django.shortcuts import render
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, permissions

from models import User, Profile
from serializers import MyTokenObtainPairSerializer, UserSerializer, ProfileSerializer

# Create your views here.

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

    def post(self, request,*args, **kwargs):
        response = super().post(request, *args, **kwargs)

        access_token = response.data.get('access')
        refresh_token = response.data.get('refresh')

        response.set_cookie(
            key='access_token',
            value=access_token,
            httponly=True,
            secure=True,
            samesite='None'
        )

        response.set_cookie(
            key='refresh_token',
            value= refresh_token,
            httponly=True,
            secure=True,
            samesite='None'
        )

        return response