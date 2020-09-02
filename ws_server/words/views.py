from .models import Word
from django.contrib.auth.models import User

from rest_framework import viewsets, status
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response


from .serializers import WordSerializer


class WordsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows words to be viewed or edited.
    """
    authentication_classes = (TokenAuthentication, )
    serializer_class = WordSerializer

    def get_queryset(self):
        return Word.objects.filter(user_id=self.request.user.id)

    @staticmethod
    def set_user(request):
        data = request.data
        user = request.user
        if user:
            data['user'] = User.objects.get(username=user)
            return data
        else:
            return Response(data='No user in request', status=status.HTTP_400_BAD_REQUEST)

    def create(self, request, *args, **kwargs):
        Word.objects.create(**self.set_user(request))
        return Response(status=status.HTTP_201_CREATED)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        data = request.data
        instance.word = data['word']
        instance.definition = data['definition']
        instance.example = data['example']
        instance.save()
        return Response(status=status.HTTP_200_OK)
