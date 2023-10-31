import React, { useState } from 'react'  


function DropdownButton({ onProvinceChange }) {   
  
  const [province, setProvince] = useState('');

  const handleProvinceChange = (event) => {
    const selectedValue = event.target.value;
    setProvince(selectedValue);
    onProvinceChange(selectedValue); // Call the callback with the selected value.  

  };
 
  return (
    <div>
<<<<<<< HEAD
<select id="Provinces" 
        class="bg-gray-50 border border-gray-300 text-sm font-medium h-14 leading-none text-gray-800 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full"
        value={province}
        onChange={handleProvinceChange}
        >
=======
<select id="Provinces" class="bg-gray-50 border border-teal-600 text-sm font-medium h-14 leading-none text-gray-800 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full">
>>>>>>> frontend-branch
  <option selected>Choose a province</option>
  <option value="Eastern Cape">Eastern Cape</option>
        <option value="Free StateS">Free State</option>
        <option value="Gauteng">Gauteng</option>
        <option value="KwaZulu-Natal">KwaZulu-Natal</option>
        <option value="Limpopo">Limpopo</option>
        <option value="Mpumalanga">Mpumalanga</option>
        <option value="Northern Cape">Northern Cape</option>
        <option value="North West">North West</option>
        <option value="Western Cape">Western Cape</option>
</select>

    </div>
  )
}

export default DropdownButton; // Export the component. 

// export const selectedProvince = province; // Export the province value
