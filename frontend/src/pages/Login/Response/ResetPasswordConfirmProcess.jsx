// Resetting the user password for a new one. 
async function resetPasswordResponse(password, user_token) { 

    const url = "http://127.0.0.1:8000/users/api/password/reset/confirm/"  
    const token = user_token; // Replace with your actual token

    const requestData = {
        user_new_password: password, 
    };   
    
    const headers = new Headers({
        'Content-Type': 'application/json', 
        'Authorization': `Token ${user_token}`, // Add the Authorization header with the token
    });

    try { 

        
        const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(requestData),
        });  
  
        if (response.ok) { 
          
            const responseData = await response.json(); 
            responseData.complete = true; 
            
            return responseData; // Update events_table state.
  
          } else { 
  
            alert('Request failed');
            // console.error('Request failed:', response.status, response.statusText); 
            return null; // Return null or an appropriate value in case of an error
  
          }
        
      } catch(error) {
        console.error('Request error:', error); 
        return null; // Return null or an appropriate value in case of an error
  
    }  
} 

export default resetPasswordResponse; 