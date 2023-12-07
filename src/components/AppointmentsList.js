// src/components/AppointmentsList.js
import React, { useState } from "react";
import AppointmentRow from "./AppointmentRow";
import AppointmentForm from "./AppointmentForm";
import CalendarPage from "./CalendarPage"; // Make sure to import CalendarPage
import "../styles/AppointmentsList.css";
import backgroundImg from "../images/HR.jpg"; // Import your background image

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([
    // Initial appointments data
  ]);
  const [showCalendar, setShowCalendar] = useState(false);

  const addAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  const editAppointment = (id, updatedAppointment) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, ...updatedAppointment }
          : appointment
      )
    );
  };

  const deleteAppointment = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.filter((appointment) => appointment.id !== id)
    );
  };

  return (
    <div
      className="main-container"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="appointment-row">
            <AppointmentRow
              appointment={appointment}
              editAppointment={editAppointment}
              deleteAppointment={deleteAppointment}
              showCalendar={showCalendar}
            />
          </div>
        ))}
        <div className="appointment-form">
          <AppointmentForm addAppointment={addAppointment} />
        </div>
        <button
          className="button"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          {showCalendar ? "Hide Calendar" : "Show Calendar"}
        </button>
        {showCalendar && <CalendarPage appointments={appointments} />}
      </div>
    </div>
  );
};

export default AppointmentsList;
