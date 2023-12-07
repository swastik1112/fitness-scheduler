// src/components/AppointmentForm.js
import React, { useState } from "react";
import "../styles/AppointmentForm.css";

const AppointmentForm = ({ addAppointment }) => {
  const [newAppointment, setNewAppointment] = useState({
    firstName: "",
    lastName: "",
    location: "",
    appointments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({ ...newAppointment, id: Date.now() });
    setNewAppointment({
      firstName: "",
      lastName: "",
      location: "",
      appointments: "",
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="form-input">
        First Name:
        <input
          type="text"
          name="firstName"
          value={newAppointment.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="form-input">
        Last Name:
        <input
          type="text"
          name="lastName"
          value={newAppointment.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="form-input">
        Location:
        <input
          type="text"
          name="location"
          value={newAppointment.location}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="form-input">
        Appointments:
        <input
          type="text"
          name="appointments"
          value={newAppointment.appointments}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className="form-button" type="submit">
        Save
      </button>
    </form>
  );
};

export default AppointmentForm;
