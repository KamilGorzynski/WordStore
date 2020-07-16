from django.db import models


class Word(models.Model):
    word = models.CharField(max_length=50)
    definition = models.TextField()
    example = models.TextField(blank=True, null=True)
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)

    def __str__(self):
        return self.word