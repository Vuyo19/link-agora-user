import React, { useState, useEffect } from "react";

// Importing React-Icons
import { RiArrowDropDownLine } from "react-icons/ri";

const TimePicker = () => {
  // Initialize state
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [amPM, setAMPM] = useState("");

  // Function to update the time
  const updateTime = () => {
    const currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    const isAM = currentHour < 12;
    currentHour = currentHour % 12 || 12;

    setHour(currentHour);
    setMinute(currentMinute);
    setAMPM(isAM ? "AM" : "PM");
  };

  // Update the time on component mount
  useEffect(() => {
    updateTime();
  }, []);

  // Function to handle hour change
  const handleHourChange = (e) => {
    setHour(e.target.value);
  };

  // Function to handle minute change
  const handleMinuteChange = (e) => {
    const newMinute = e.target.value;
    setMinute(newMinute);
    // Format the minute with leading zeros
    const formattedMinute = newMinute.toString().padStart(2, "0");
    setMinute(formattedMinute);
  };

  // Function to handle AM/PM change
  const handleAMPMChange = (e) => {
    setAMPM(e.target.value);
  };

  return (
    <div
      style={{
        border: "1.5px solid #8A2623",
        background: "#F0DFDF",
        padding: "10px",
        borderRadius: "8px", // Rounded-lg border
      }}
    >
      <div className="flex items-center">
        <label className="text-base font-medium text-gray-900 mr-4">Time</label>
        <div className="time-picker flex items-center">
          <div className="">
            <select
              // Hour
              value={hour}
              onChange={handleHourChange}
              style={{ border: "none", outline: "none" }}
              className="bg-[#F0DFDF] rounded-lg mr-2"
            >
              {[...Array(12)].map((_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>

            <span
              style={{
                pointerEvents: "none", // Disable pointer events
              }}
              className="mr-2 font-medium"
            >
              :
            </span>
            <select // Minute
              value={minute}
              onChange={handleMinuteChange}
              style={{ border: "none" }}
              className="bg-[#F0DFDF] rounded-lg mr-2"
            >
              {[0, 15, 30, 45].map((min) => (
                <option key={min} value={min}>
                  {min.toString().padStart(2, "0")}
                </option>
              ))}
            </select>
            <div className="inline-block h-8 w-0.5 bg-[#8A2623] -mb-2.5 mr-5 ml-5 rounded-full"></div>
            <select // AM/PM
              value={amPM}
              onChange={handleAMPMChange}
              style={{ border: "none" }}
              className="bg-[#F0DFDF] rounded-lg mr-2"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
