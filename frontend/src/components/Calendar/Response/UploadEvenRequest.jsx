// Functions to upload the event request. 

// Function to allow the uploading of the event request for the user. 
export default async function UploadEventRequestUser(title, time, date, venue, description, address1, address2, city, postalCode, province, potentialCapacity, eventType) {

    // Url to upload the event request.
    const url = "http://127.0.0.1:8000/requests/api/upload-event-request/"
    
    // Data to pass through to the backend. 
    const requestData = {
        event_title: title,
        event_time: time, 
        event_date: date, 
        event_venue: venue,
        event_description: description, 
        event_address1: address1, 
        event_address2: address2, 
        event_city: city, 
        event_postalCode: postalCode, 
        event_province: province, 
        event_potentialCapacity: potentialCapacity, 
        event_type: eventType
    }; 

    // Sending the details of the event to the backend. 
    try { 

        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });  
        
        if (response.ok) {
            alert('Uploading event request successful.')
        } else {
            alert('Uploading event request failed.')
        }  

    } catch (error) {
        console.error('Request error:', error);
    }

}