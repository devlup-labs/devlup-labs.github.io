from django.contrib import admin
from .models import Timeline


@admin.register(Timeline)
class TimelineAdmin(admin.ModelAdmin):
    class Meta:
        model = Timeline
        fields = '__all__'
