from django.db import models

# Create your models here.
class ContactUs(models.Model):
    name = models.CharField(max_length = 126)
    mobile = models.CharField(max_length = 15)
    email = models.EmailField()
    message = models.TextField()


# class 