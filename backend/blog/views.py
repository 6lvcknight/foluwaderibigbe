from django.shortcuts import render
from .models import Post, Category, Tag, Project
from .serializers import PostSerializer, CategorySerializer, TagSerializer, ProjectSerializer
from user.models import User

from rest_framework import generics, status, permissions
from rest_framework.response import Response

from django.utils import timezone

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
    lookup_field = 'metatitle'
    
class PostAPIView(generics.CreateAPIView):
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args, **kwargs):
        payload = request.data
        
        user = self.request.user

        # Add verification check
        if not user.is_active:
            return Response(
                {"error": "Your account is not active. Please verify your account."},
                status=status.HTTP_403_FORBIDDEN
            )
        
        category_name = payload.get('category', '')
        title = payload['title']
        metaTitle = payload.get('metaTitle', '').strip()
        summary = payload['summary']
        content = payload['content']

        current_time = timezone.now().date()

        createdat = payload.get('createdat', current_time)
        updatedat = payload.get('updatedat', current_time)
        publishedat = payload.get('publishedat', current_time)

        if metaTitle and Post.objects.filter(metatitle=metaTitle).exists():
            return Response(
                {"error": "A post with that metatitle already exists."},
                status=status.HTTP_400_BAD_REQUEST
            )

        post = Post.objects.create(
            user=user,
            title=title,
            metatitle=metaTitle,
            summary=summary,
            content=content,
            createdat=createdat,
            updatedat=updatedat,
            publishedat=publishedat,
        )

        if category_name:
            category = Category.objects.filter(title=category_name).first()
            if category:
                post.category.add(category)

        return Response(PostSerializer(post).data, status=status.HTTP_201_CREATED)

class PostDeleteView(generics.DestroyAPIView):
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'pid'

    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(user=user)

class ProjectListView(generics.ListAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        query = Project.objects.all()
        return query.order_by('-createdat')
    
class ProjectUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'pid'

class ProjectCreateView(generics.CreateAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args, **kwargs):
        payload = request.data
        user = self.request.user  # Get the authenticated user
        
        # Add verification checks like in PostAPIView
        if not user.is_active:
            print("User is not active:", user.is_active)
            return Response(
                {"error": "Your account is not active. Please verify your account."},
                status=status.HTTP_403_FORBIDDEN
            )
            
        if hasattr(user, 'is_verified') and not user.is_verified:
            print("User is not verified:", user.is_verified)
            return Response(
                {"error": "Your account is not verified. Please verify your account."},
                status=status.HTTP_403_FORBIDDEN
            )

        # Use get() with defaults to prevent KeyErrors
        title = payload.get('title', '')
        description = payload.get('description', '')
        text = payload.get('text', '')
        createdat = payload.get('formattedDate', timezone.now())
        url = payload.get('url', '')
        github_url = payload.get('github', '')

        project = Project.objects.create(
            title=title,
            description=description,
            text=text,
            createdat=createdat,
            url=url,
            github_url=github_url,
            user=user
        )

        return Response(ProjectSerializer(project).data, status=status.HTTP_201_CREATED)
    
class ProjectDeleteView(generics.DestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'pid'

class CategoryCreateView(generics.CreateAPIView):
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args, **kwargs):
        payload = request.data
        title = payload.get('title', '')
        metatitle = payload.get('metatitle', '').strip()
        context = payload.get('context', '')

        if metatitle and Category.objects.filter(metatitle=metatitle).exists():
            return Response(
                {"error": "A category with that metatitle already exists."},
                status=status.HTTP_400_BAD_REQUEST
            )

        category = Category.objects.create(
            title=title,
            metatitle=metatitle,
            context=context
        )

        return Response(CategorySerializer(category).data, status=status.HTTP_201_CREATED)
    
class CategoryUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'metatitle'

class CategoryDeleteView(generics.DestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'metatitle'