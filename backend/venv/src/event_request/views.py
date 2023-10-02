from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json 
from datetime import datetime
from .models import Event, CustomUser, EventTrack, Status
 
# Create your views here.  

# Function to save and upload the event request by the user 
@csrf_exempt
def upload_event_request(request): 

    if request.method == 'POST': 
        try:   

            # Retrieving the set of data. 
            data = json.loads(request.body) 

            u_title = data.get('event_title')
            u_time = data.get('event_time')
            u_date = data.get('event_date')
            u_venue = data.get('event_venue')
            u_description = data.get('event_description')
            u_address1 = data.get('event_address1')
            u_address2 = data.get('event_address2')
            u_city = data.get('event_city') 
            u_postal_code = data.get('event_postalCode')
            u_province = data.get('event_province')
            u_potential_capacity = int(data.get('event_potentialCapacity'))
            u_type = data.get('event_type')    

            # Saving the requested event into the database. 
            new_event = Event(
                event_id_comm="Testing",
                title=u_title, 
                date=u_date, 
                time=u_time, 
                organizer=CustomUser.objects.get(id=5),
                description=u_description, 
                venue=u_venue, 
                address1=u_address1,
                address2=u_address2,
                city=u_city,
                postal_code=u_postal_code, 
                province=u_province, 
                capacity=u_potential_capacity, 
                type=u_type, 
                eventtrack_id=EventTrack.objects.get(id=1),  # Replace with the actual EventTrack ID
                status_id=Status.objects.get(id=4)
            )     

            new_event.save()  

            print('Upload Successful')
            return JsonResponse({'message': 'success'}) 
        except Exception as e: 
            return JsonResponse({'message': 'Failed to record event'})

    else: 
        print('Data not received')
        return JsonResponse({'message': 'failed'})
