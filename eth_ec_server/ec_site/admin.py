from django.contrib import admin

# Register your models here.
from .models import User, Address, Product, Order


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass


@admin.register(Address)
class Address(admin.ModelAdmin):
    pass


@admin.register(Product)
class Product(admin.ModelAdmin):
    pass


@admin.register(Order)
class Order(admin.ModelAdmin):
    pass
