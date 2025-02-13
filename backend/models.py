# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Category(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=75, blank=True, null=True)
    metatitle = models.CharField(db_column='metaTitle', max_length=100, blank=True, null=True)  # Field name made lowercase.
    slug = models.CharField(max_length=100)
    context = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'category'


class Post(models.Model):
    id = models.BigAutoField(primary_key=True)
    id_user = models.ForeignKey('User', models.DO_NOTHING, db_column='id_user', blank=True, null=True)
    title = models.CharField(max_length=75, blank=True, null=True)
    metatitle = models.CharField(db_column='metaTitle', max_length=100, blank=True, null=True)  # Field name made lowercase.
    slug = models.CharField(max_length=50)
    summary = models.TextField(blank=True, null=True)
    createdat = models.DateField(db_column='createdAt')  # Field name made lowercase.
    updatedat = models.DateField(db_column='updatedAt')  # Field name made lowercase.
    publishedat = models.DateField(db_column='publishedAt')  # Field name made lowercase.
    content = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'post'


class PostCategory(models.Model):
    id_post = models.OneToOneField(Post, models.DO_NOTHING, db_column='id_post', primary_key=True)  # The composite primary key (id_post, id_category) found, that is not supported. The first column is selected.
    id_category = models.ForeignKey(Category, models.DO_NOTHING, db_column='id_category')

    class Meta:
        managed = False
        db_table = 'post_category'
        unique_together = (('id_post', 'id_category'),)


class PostTag(models.Model):
    id_post = models.OneToOneField(Post, models.DO_NOTHING, db_column='id_post', primary_key=True)  # The composite primary key (id_post, id_tag) found, that is not supported. The first column is selected.
    id_tag = models.ForeignKey('Tag', models.DO_NOTHING, db_column='id_tag')

    class Meta:
        managed = False
        db_table = 'post_tag'
        unique_together = (('id_post', 'id_tag'),)


class Project(models.Model):
    id = models.BigAutoField(primary_key=True)
    id_user = models.ForeignKey('User', models.DO_NOTHING, db_column='id_user', blank=True, null=True)
    title = models.CharField(max_length=50, blank=True, null=True)
    description = models.CharField(max_length=100, blank=True, null=True)
    createdat = models.DateField(db_column='createdAt')  # Field name made lowercase.
    url = models.TextField(blank=True, null=True)
    github_url = models.TextField(blank=True, null=True)
    images = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'project'


class Tag(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=75, blank=True, null=True)
    metatitle = models.CharField(db_column='metaTitle', max_length=100, blank=True, null=True)  # Field name made lowercase.
    slug = models.CharField(max_length=100)
    content = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tag'


class User(models.Model):
    id = models.BigAutoField(primary_key=True)
    firstname = models.CharField(db_column='firstName', max_length=50, blank=True, null=True)  # Field name made lowercase.
    middlename = models.CharField(db_column='middleName', max_length=50, blank=True, null=True)  # Field name made lowercase.
    lastname = models.CharField(db_column='lastName', max_length=50, blank=True, null=True)  # Field name made lowercase.
    mobile = models.CharField(max_length=15, blank=True, null=True)
    email = models.CharField(max_length=50, blank=True, null=True)
    password = models.CharField(max_length=32)
    bio = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user'
