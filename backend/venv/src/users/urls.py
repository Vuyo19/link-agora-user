from django.urls import path
from . import views 

urlpatterns = [
    path('login/', views.sign_in_user, name='login_user')
]