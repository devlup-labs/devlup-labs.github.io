from django.db import models
from versatileimagefield.fields import VersatileImageField


class Project(models.Model):
    name = models.CharField(max_length=64, help_text='Name of project')
    cover = VersatileImageField(upload_to='projects')
    short_description = models.CharField(max_length=64, help_text='Short description of project')
    description = models.TextField(help_text='Description of project')
    technologies = models.CharField(help_text='Technologies to be used in the project', max_length=2048)
    github_link = models.URLField(blank=True, null=True, default=None, help_text='Github link')
    gitlab_link = models.URLField(blank=True, null=True, default=None, help_text='Gitlab link')
    website_link = models.URLField(blank=True, null=True, default=None, help_text='Website link')

    @property
    def technologies_as_list(self):
        if self.technologies == '' or not self.technologies:
            return ['']
        return self.technologies.split('|')

    def __str__(self):
        return self.name
