"""homeplanify URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from blog.views import BlogPostAPIViewSet, CategoriesAPIViewSet, BlogPostCommentAPIViewSet
from core.views import ContactUsViewSet

router = DefaultRouter()
router.register('contactus', ContactUsViewSet, basename='contactus')
router.register('blog-category', CategoriesAPIViewSet, basename='blog-category')
router.register('blog-post', BlogPostAPIViewSet, basename='blog-post')
router.register('blog-post-comment', BlogPostCommentAPIViewSet, basename='blog-post-comment')

urlpatterns = [
    path('', include(router.urls), name='api'),
    path('admin/', admin.site.urls),
]
