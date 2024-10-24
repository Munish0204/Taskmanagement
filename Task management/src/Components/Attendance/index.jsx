import React, { useState, useEffect } from 'react';
import './Attendance.css'



const Attendance = () => {
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const [showDetails, setShowDetails] = useState(false);

  // Get current date and time
  const getCurrentDateTime = () => {
    const current = new Date();
    const formattedDateTime = current.toLocaleString();
    setDateTime(formattedDateTime);
  };

  // Get user's live location
  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation not supported');
    }
  };

  // Fetch location and date when button is clicked
  const handleAttendanceClick = () => {
    getCurrentDateTime();
    fetchLocation();
    setShowDetails(true); // Show details only after click
  };

  return (
    <div className="attendance-page">
      <div className="attendance-card">
        <h1>Attendance</h1>
        <button onClick={handleAttendanceClick}>Mark Attendance</button>

        {showDetails && (
          <>
            <div className="date-time">
              <p>Date & Time: {dateTime}</p>
            </div>
            <div className="location">
              <p>Location:</p>
              <p>Latitude: {location.latitude}</p>
              <p>Longitude: {location.longitude}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Attendance;
