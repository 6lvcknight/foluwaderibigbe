from django.db import models
from user.models import User
from shortuuid import ShortUUID

def generate_short_uuid():
    return ShortUUID().random(length=30)

class Category(models.Model):
    title = models.CharField(max_length=75, blank=True, null=True)
    metatitle = models.CharField(db_column='metaTitle', max_length=100, blank=True, null=True)  # Field name made lowercase.
    slug = models.CharField(max_length=100)
    context = models.TextField(blank=True, null=True)

class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ManyToManyField(Category, related_name='post_category')
    title = models.CharField(max_length=75, blank=True, null=True)
    metatitle = models.CharField(db_column='metaTitle', max_length=100, blank=True, null=True)  # Field name made lowercase.
    pid = models.CharField(max_length=30, unique=True, default=generate_short_uuid)
    summary = models.TextField(blank=True, null=True)
    createdat = models.DateField(db_column='createdAt')  # Field name made lowercase.
    updatedat = models.DateField(db_column='updatedAt')  # Field name made lowercase.
    publishedat = models.DateField(db_column='publishedAt')  # Field name made lowercase.
    content = models.TextField(blank=True, null=True)

class Tag(models.Model):
    title = models.CharField(max_length=75, blank=True, null=True)
    post = models.ManyToManyField(Post, related_name='post_tag')
    metatitle = models.CharField(db_column='metaTitle', max_length=100, blank=True, null=True)  # Field name made lowercase.
    slug = models.CharField(max_length=100)
    content = models.TextField(blank=True, null=True)

class Project(models.Model):
    title = models.CharField(max_length=50, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    text = models.TextField(blank=True, null=True)
    pid = models.CharField(max_length=30, unique=True, default=generate_short_uuid)
    createdat = models.DateField(db_column='createdAt')  # Field name made lowercase.
    url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    #images = models.ImageField(blank=True, null=True)
