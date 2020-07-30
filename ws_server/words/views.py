from .models import Word

from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication


from .serializers import WordSerializer


class WordsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows words to be viewed or edited.
    """
    authentication_classes = (TokenAuthentication, )

    def get_queryset(self):
        # return Word.objects.filter('user')
        return Word.objects.all()

    serializer_class = WordSerializer
