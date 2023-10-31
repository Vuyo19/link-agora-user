import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import './custom-styles.css'; // Import your custom CSS file

export default function MyTimePicker({ selectedTime, onTimeChange }) { 

  const handleTimeChange = (newTime) => {
    onTimeChange(newTime); // Call the callback to update the selected time
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
<<<<<<< HEAD
      <DemoContainer components={['TimePicker']}> 
        <TimePicker
          label="Pick Time" 
          value={selectedTime} // Set the selected time from the prop
          onChange={handleTimeChange} // Call the event handler to update the time 
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
} 

=======
      <DemoContainer components={['TimePicker']}>
        <div className="my-timepicker-container">
          <TimePicker
            label="Pick Time"
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
            className="my-timepicker-class" // Add the class that corresponds to the TimePicker
          />
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}
>>>>>>> frontend-branch
