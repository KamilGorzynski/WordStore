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

    def create(self, request, *args, **kwargs):
        data = request.data
        user = data.get('user')
        if user:
            data['user'] = User.objects.get(username=user)
        else:
            return Response(data='No user in request', status=status.HTTP_400_BAD_REQUEST)

        Word.objects.create(**data)
        return Response(status=status.HTTP_201_CREATED)
