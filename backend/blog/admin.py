from django.contrib import admin
from .models import Category, Tag, Post, Project

# Register your models here.
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['title']
    search_fields = ['title']

class TagAdmin(admin.ModelAdmin):
    list_display = ['title']
    search_fields = ['title']

class PostAdmin(admin.ModelAdmin):
    list_display = ['user', 'title', 'createdat']
    search_fields = ['title']
    list_filter = ['createdat', 'user']
    list_per_page = 10

class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'createdat']
    search_fields = ['title']
    list_per_page = 10

admin.site.register(Category,CategoryAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(Project, ProjectAdmin)