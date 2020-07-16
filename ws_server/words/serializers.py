from rest_framework import serializers

from .models import Word

from users.serializers import UserSerializer


class WordSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False, allow_null=True)

    class Meta:
        model = Word
        fields = ('word', 'definition', 'example', 'user')
