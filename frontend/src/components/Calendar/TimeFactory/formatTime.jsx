import React from 'react';

export default function timeFactory(EventDateTime) {

    // Given timestamp
    const timestampStr = EventDateTime;

    // Parse the timestamp
    const timestamp = new Date(timestampStr);
 
    // Extract date and format it as yyyy-mm-dd
    const year = timestamp.getFullYear();
    const month = (timestamp.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const day = timestamp.getDate().toString().padStart(2, '0');
 
    // Extract time
    const hours = timestamp.getHours().toString().padStart(2, '0');
    const minutes = timestamp.getMinutes().toString().padStart(2, '0');
    const seconds = timestamp.getSeconds().toString().padStart(2, '0');
 
    // Formatted date and time
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`; 

    // Returning the time Extractor.
    const timeExtractor = {
        "extractedDate": formattedDate, 
        "extractedTime": formattedTime
    }; 

   return timeExtractor; 





}