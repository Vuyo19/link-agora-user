from django.shortcuts import render 
from django.views.decorators.csrf import csrf_exempt 
from django.http import JsonResponse 
import json 
from django.contrib.auth import authenticate, login 


# Create your views here. 
@csrf_exempt 
def sign_in_user(request): 

    if request.method == 'POST':  

        data = json.loads(request.body)  

        email = data.get('user_email')  
        password = data.get('user_password')   

        user = authenticate(request, email=email, password=password)

        if user is not None: 

            # Authentication succeeded, log the user in
            return JsonResponse({'message': 'successful'})
        else:
            # Authentication failed
            return JsonResponse({'message': 'failed'})

    else: 
        return JsonResponse({'message': 'failed'})


