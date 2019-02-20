from django.urls import path, re_path
from . import views
urlpatterns = [
    path('', views.index),
    path('productdetail/<int:id>', views.index),
    path('purchaseconfirmation/<int:id>/<int:gid>', views.index),
    path('purchasehistory', views.index),
    # path('(?:.*)/?', views.index),
    # re_path(r'^(?:.*)/?$', views.index),
]
