from django.shortcuts import render 
from django.views.decorators.csrf import csrf_exempt 
from django.http import JsonResponse 
import json 
from django.contrib.auth import authenticate, login 
from users.models import CustomUser, PasswordResetLink
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.core.exceptions import ValidationError
from django.core.mail import send_mail  # Import the send_mail function
from .EmailScripts import EmailSender
from django.shortcuts import get_object_or_404


# Create your views here. 
@csrf_exempt 
def sign_in_user(request): 

    if request.method == 'POST':  

        data = json.loads(request.body)  

        email = data.get('user_email')  
        password = data.get('user_password')   

        # Authenticating the user to check if the email exists and the password exists. 
        user = authenticate(request, email=email, password=password)

        if user is not None: 
            return JsonResponse({'message': 'success'})
        else:
            # Authentication failed
            return JsonResponse({'message': 'failed'}) 

    else: 
        return JsonResponse({'message': 'failed'}) 
    
def token_exists(user):
    # Check if a PasswordResetLink with the specified token already exists
    return PasswordResetLink.objects.filter(user=user).first()
 
@csrf_exempt
def password_reset(request): 

    if request.method == 'POST':  
        
        data = json.loads(request.body)  
        
        # Receiving the email address that has been received to recover the user's account. 
        email = data.get('user_email')   

        try:

            user = CustomUser.objects.get(email=email)
            emailSend = EmailSender("linkagoraevents@gmail.com", "cwecieuqohmqibbp") # Creating an object to send the email.  

            # Checking if the token does not exist. 
            if not token_exists(user):
                 
                # The user with the specified email exists
                # You can access user information using user object 

                # Authentication succeeded, log the user in 
                uidb64 = urlsafe_base64_encode(force_bytes(user.pk))
                token = default_token_generator.make_token(user)
                reset_link = f"http://127.0.0.1:5173/password/reset/confirm/{uidb64}/{token}/"   

                # Inserting the uidb64 and token in the database based on the user.   

                # Create the PasswordResetLink instance
                password_reset_link = PasswordResetLink()

                password_reset_link.uidb64 = uidb64
                password_reset_link.token = token 
                password_reset_link.user = user

                # Save the PasswordResetLink instance to the database
                password_reset_link.save()


                # Send the password reset email. 
                subject = 'Password Reset'
                message = f'Click the following link to reset your password: {reset_link}'
                
                #from_email = 'your@email.com'  # Replace with your email
                #recipient_list = [user.email] 

                emailSend.send_email(user.email, subject, message)

            #send_mail(subject, message, from_email, recipient_list)

 
        except CustomUser.DoesNotExist: 
            print("User account does not exist ")

        
        return JsonResponse({'message': 'success'})

    else: 
        return JsonResponse({'message': 'failed'})


@csrf_exempt
def password_reset_confirm(request): 

    if request.method == 'POST':  
        
        data = json.loads(request.body)   

        new_password = data.get('user_new_password')   # Getting the new user password.
        token = None # Declaring a token with the value of None. 

        auth_header = request.META.get('HTTP_AUTHORIZATION', '')
    
        # Check if the Authorization header is present and has a "Token" prefix
        if auth_header.startswith('Token '): 

            # Extract the token without the "Token" prefix
            token = auth_header[len('Token '):] 

            password_reset_link = get_object_or_404(PasswordResetLink, token=token)  #Getting the token related to the user. 
            user = password_reset_link.user 
            user.set_password(new_password)  # Setting the new token.  

            # Save the user object to update the password in the database
            user.save()


        return JsonResponse({'message': 'success'})

    else: 
        return JsonResponse({'message': 'failed'})