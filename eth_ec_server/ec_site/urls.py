from django.urls import path
from . import views
urlpatterns = [
    path('api/products/', views.ProductListCreate.as_view()),
    path('api/orders/', views.OrderListCreate.as_view()),
    path('api/confirmselling/', views.ConfirmSelling.as_view()),
    path('api/users/', views.UserListCreate.as_view()),
]

