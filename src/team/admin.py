from django.contrib import admin
from .models import Member


@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    class Meta:
        model = Member
        fields = '__all__'
