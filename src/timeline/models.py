from django.db import models


class Timeline(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField()
    date = models.DateTimeField()
    published = models.BooleanField(default=True)
    button1 = models.CharField(max_length=64, blank=True)
    button1link = models.URLField(blank=True, null=True, default=None)
    button2 = models.CharField(max_length=64, blank=True)
    button2link = models.URLField(blank=True, null=True, default=None)

    class Meta:
        ordering = ['date']

    def __str__(self):
        return self.name
