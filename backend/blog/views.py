from django.shortcuts import render
from .models import Post, Category, Tag, Project
from .serializers import PostSerializer, CategorySerializer, TagSerializer, ProjectSerializer
from user.models import User

from rest_framework import generics, status, permissions
from rest_framework.response import Response

# Create your views here.

class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.AllowAny]

class TagListView(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = [permissions.AllowAny]

class PostListView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.AllowAny]

class PostDetailView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'pid'
    
class PostAPIView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args, **kwargs):
        payload = request.data
        
        user = self.request.user
        category_ids = payload.get('category', [])
        title = payload['title']
        summary = payload['summary']
        createdat = payload['createdat']
        updatedat = payload['updatedat']
        publishedat = payload['publishedat']
        content = payload['content']

        user = User.objects.filter(email=user).first()

        post = Post.objects.create(
            user=user,
            title=title,
            summary=summary,
            content=content,
            createdat=createdat,
            updatedat=updatedat,
            publishedat=publishedat,
        )

        categories = Category.objects.filter(id__in=category_ids)
        post.category.set(categories)

        return Response(PostSerializer(post).data, status=status.HTTP_201_CREATED)

class PostDeleteView(generics.DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'pid'

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.AllowAny]

class ProjectDetailView(generics.RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'pid'