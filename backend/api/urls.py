from django.urls import path
from user import views as user_views
from blog import views as blog_views

from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [

    path('user/token/', user_views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('blog/category/', blog_views.CategoryListView.as_view(), name='category_list'),
    path('blog/tags/', blog_views.TagListView.as_view(), name='tag_list'),

    path('blog/post/', blog_views.PostListView.as_view(), name='post_list'),
    path('blog/post/<pid>', blog_views.PostDetailView.as_view(), name='post_details'),
    path('blog/post-create/', blog_views.PostAPIView.as_view(), name='create_post'),
    path('blog/post-delete/<pid>', blog_views.PostDeleteView.as_view(), name='delete_post'),

    path('project/', blog_views.ProjectListView.as_view(), name='project_list'),
    path('project/new/', blog_views.ProjectCreateView.as_view(), name='create_project'),
]