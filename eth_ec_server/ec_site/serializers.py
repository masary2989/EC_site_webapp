from rest_framework import serializers
from ec_site.models import User, Address, Product, Order


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'walletAddress','email', 'message')


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ('address', 'message')


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('name', 'message', 'image', 'price')


class OrderSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    uid = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), write_only=True)

    product = ProductSerializer(read_only=True)
    pid = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all(), write_only=True, many=True)
    class Meta:
        model = Order
        fields = ('uid', 'contract_tx', 'pid', 'message', 'payment', 'user', 'product')
