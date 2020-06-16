from rest_framework import serializers
from rest_framework.relations import PrimaryKeyRelatedField

from . import models


class ContactUsSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.ContactUs
        fields = "__all__"
