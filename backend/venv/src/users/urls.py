from django.urls import path
from . import views 

urlpatterns = [
    path('api/login/', views.sign_in_user, name='login_user'), # Logging the user in. 
    path('api/password/reset/', views.password_reset, name='password_reset'), # Process to start resetting the password.
    path('api/password/reset/confirm/', views.password_reset_confirm, name='password_reset_confirm') # Process to confirm the resetting of password. 
]