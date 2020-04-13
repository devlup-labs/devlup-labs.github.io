from django.db import models
from versatileimagefield.fields import VersatileImageField


class Member(models.Model):
    name = models.CharField(max_length=128, help_text='Name of the member')
    position = models.CharField(max_length=36)
    batch = models.IntegerField(help_text='expected pass-out year')
    program = models.CharField(max_length=64, help_text='program ex:UG')
    branch = models.CharField(max_length=64, help_text='branch')
    about_me = models.CharField(max_length=1536, help_text='Add something about You.')
    email = models.EmailField(blank=True, null=True, default=None, help_text='email address')
    github_link = models.URLField(blank=True, null=True, default=None, help_text='Github link')
    gitlab_link = models.URLField(blank=True, null=True, default=None, help_text='Gitlab link')
    linkedIn_link = models.URLField(blank=True, null=True, default=None, help_text='linkedIn link')
    website_link = models.URLField(blank=True, null=True, default=None, help_text='Website link')

    def __str__(self):
        return self.name
