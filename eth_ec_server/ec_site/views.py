from rest_framework import generics
from ec_site.models import User, Address, Product, Order
from ec_site.serializers import UserSerializer, AddressSerializer, ProductSerializer, OrderSerializer


# Create your views here.


class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
