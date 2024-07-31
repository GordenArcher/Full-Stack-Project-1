from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('services', views.services, name="services"),
    path('contact', views.contact, name="contact"),
    path('auth/a/register', views.register, name='register'),
    path('auth/a/login', views.login, name='login'),
    path('logout', views.logout, name='logout'),
]