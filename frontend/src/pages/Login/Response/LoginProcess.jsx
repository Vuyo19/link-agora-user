// Function to process the login  
async function loginUserResponse(email, password) { 

    const url = "http://127.0.0.1:8000/users/api/login/"  

    const requestData = {
        user_email: email, 
        user_password: password
    };  

    try {

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });  

        if (response.ok) { 
          
            const responseData = await response.json();  

            if(responseData.message == "success") {
              responseData.authenticated = true; 
            } else {
              responseData.authenticated = false; 
            }
            
            return responseData; // Update events_table state  
  
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


export default loginUserResponse; 