from django.urls import path
from user import views as user_views
from blog import views as blog_views

from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('user/token/', user_views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('blog/tags/', blog_views.TagListView.as_view(), name='tag_list'),

    path('blog/post/', blog_views.PostListView.as_view(), name='post_list'),
    path('blog/post/<metatitle>/', blog_views.PostDetailView.as_view(), name='post_details'),
    path('blog/post-create/', blog_views.PostAPIView.as_view(), name='create_post'),
    path('blog/post-delete/<metatitle>/', blog_views.PostDeleteView.as_view(), name='delete_post'),

    path('blog/category-create/', blog_views.CategoryCreateView.as_view(), name='create_category'),
    path('blog/category/', blog_views.CategoryListView.as_view(), name='category_list'),
    path('blog/category/delete/<metatitle>/', blog_views.CategoryDeleteView.as_view(), name='delete_category'),
    path('blog/category/update/<metatitle>/', blog_views.CategoryUpdateView.as_view(), name='update_category'),

    path('project/', blog_views.ProjectListView.as_view(), name='project_list'),
    path('project/new/', blog_views.ProjectCreateView.as_view(), name='create_project'),
    path('project/delete/<str:pid>/', blog_views.ProjectDeleteView.as_view(), name='delete_project'),
    path('project/update/<str:pid>/', blog_views.ProjectUpdateView.as_view(), name='update_project'),
]