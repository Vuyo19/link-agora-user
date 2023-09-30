// Import the React library, which is necessary for creating React components.
import React from "react";

// Import the BigCalendar component
import BigCalendar from "../components/Calendar/BigCalendar";


const Schedule = () => {
  // Return JSX, which represents the structure and content of the component.
  return (
    // Defining the main structure of the page.
    <div className="flex items-center min-h-screen bg-[#fafbfd]"> 
    {/* Creating a container div to for the component. */}
      <div className="w-full p-5">
        {/* Render the BigCalendar component */}
        <BigCalendar />
      </div>
    </div>
  );
};

// Export the Schedule component to make it available for use in other parts of the application.
export default Schedule;
