// src/components/Calendar.js
import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../styles/Calendar.css";

const Calendar = ({ appointments }) => {
  const localizer = momentLocalizer(moment);

  // Check if appointments is an array before using map
  const events = Array.isArray(appointments)
    ? appointments.map((appointment) => ({
        title: `${appointment.firstName} ${appointment.lastName}`,
        start: new Date(appointment.appointments[0]), // Use the first appointment date as the start
        end: new Date(appointment.appointments[0]), // Use the first appointment date as the end
      }))
    : [];

  return (
    <div className="calendar-container">
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Calendar;
