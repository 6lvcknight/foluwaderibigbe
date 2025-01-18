from rest_framework import serializers

from .models import Category, Tag, Post, Project

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    tag = TagSerializer(many=True, read_only=True)
    class Meta:
        model = Post
        fields = [
            'id', 'user', 'category', 'title', 'metatitle', 'summary',
            'createdat', 'updatedat', 'publishedat', 'content', 'tag'
        ]
        read_only_fields = ['id']

    def create(self, validated_data):
        return super().create(validated_data)
    
    def __init__(self, *args, **kwargs):
        super(PostSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        if request and request.method == 'POST':
            self.Meta.depth = 0
        else:
            self.Meta.depth = 3

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'