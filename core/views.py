from django.shortcuts import render
from . import serializers
from . import models
from rest_framework import viewsets, status
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly

# Create your views here.
class ContactUsViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ContactUsSerializer
    queryset = models.ContactUs.objects.all()

    def get_permissions(self):
        permission_classes = [AllowAny]
        return [permission() for permission in permission_classes]