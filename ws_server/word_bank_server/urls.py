from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from users.views import UserViewSet, GroupViewSet
from words.views import WordsViewSet
from rest_framework.authtoken import views

router = routers.DefaultRouter(trailing_slash=True)
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'words', WordsViewSet, basename='words')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api-token-auth/', views.obtain_auth_token)
]
