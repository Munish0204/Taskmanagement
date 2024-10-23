import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Attendance.css';

const Attendance = ({ userName }) => {
  const [date, setDate] = useState(new Date());
  const [attendance, setAttendance] = useState([]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    const dateString = newDate.toDateString();

    if (!attendance.includes(dateString)) {
      setAttendance((prev) => [...prev, dateString]);
    }
  };

  return (
    <div className="attendance-container">
      <h2>Today's</h2>
      <h3>{userName}Attendance</h3>
      <Calendar onChange={handleDateChange} value={date} />
      <h3>Marked Attendance Dates</h3>
      <ul>
        {attendance.length > 0 ? (
          attendance.map((attendDate, index) => (
            <li key={index}>{attendDate}</li>
          ))
        ) : (
          <li>No attendance marked yet.</li>
        )}
      </ul>
    </div>
  );
};

export default Attendance;
