from django.urls import path
from . import views

urlpatterns = [
    path('api/upload-event-request/', views.upload_event_request, name="upload_event_request")
]