from .models import Word

from rest_framework import viewsets


from .serializers import WordSerializer


class WordsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    def get_queryset(self):
        # return Word.objects.filter('user')
        return Word.objects.all()

    serializer_class = WordSerializer


