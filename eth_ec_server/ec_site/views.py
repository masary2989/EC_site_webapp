from rest_framework import status
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from ec_site.models import User, Address, Product, Order
from ec_site.serializers import UserSerializer, AddressSerializer, ProductSerializer, OrderSerializer

from .ConfirmSelling import confirmSelling
from .pay_in_amazon import pay_amazon_gift as payInAmazon


# Create your views here.


class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class OrderListCreate(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ConfirmSelling(APIView):
    def post(self, request, format=None):
        print('---------------', request.data)
        if confirmSelling(request.data['amount'], request.data['u_address']):
            if payInAmazon(request.data['pValue'], request.data['email']):
                return Response(status=status.HTTP_200_OK)
        # return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status=status.HTTP_200_OK)
