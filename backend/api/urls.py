from django.urls import path
from user import views as user_views
from blog import views as blog_views

from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('', user_views.getRoutes),

    path('user/token/', user_views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('user/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('store/category/', blog_views.CategoryListView.as_view(), name='category_list'),
]