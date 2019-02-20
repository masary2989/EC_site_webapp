from django.db import models

# Create your models here.


class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    walletAddress = models.CharField(max_length=42, default='')
    message = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)


class Address(models.Model):
    uid = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=100)
    message = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)


class Product(models.Model):
    name = models.CharField(max_length=100)
    message = models.CharField(max_length=300)
    image = models.ImageField(upload_to='ec_site/uploads/%Y/%m/%d/')
    price = models.PositiveSmallIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)


class Order(models.Model):
    uid = models.ForeignKey(User, on_delete=models.CASCADE)
    contract_tx = models.BigIntegerField()  # contract nai no id
    pid = models.ManyToManyField(Product)
    message = models.CharField(max_length=300)
    payment = models.PositiveSmallIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
