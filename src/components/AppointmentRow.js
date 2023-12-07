// src/components/AppointmentRow.js
import React, { useState } from "react";
import AppointmentForm from "./AppointmentForm";
import Calendar from "./Calendar";
import "../styles/AppointmentRow.css";

const AppointmentRow = ({
  appointment,
  editAppointment,
  deleteAppointment,
  showCalendar,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAppointment, setEditedAppointment] = useState(appointment);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    setEditedAppointment(appointment); // Reset edited appointment when switching between edit and view modes
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAppointment((prevAppointment) => ({
      ...prevAppointment,
      [name]: value,
    }));
  };

  const handleSave = () => {
    editAppointment(appointment.id, editedAppointment);
    handleEdit();
  };

  return (
    <div className="row-container">
      {isEditing ? (
        <div className="appointment-details">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={editedAppointment.firstName}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={editedAppointment.lastName}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={editedAppointment.location}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Appointments:
            {Array.isArray(editedAppointment.appointments) &&
              editedAppointment.appointments.join(", ")}
          </label>
          <br />
          <div className="appointment-actions">
            <button className="button" onClick={handleSave}>
              Save
            </button>
            <button className="button" onClick={handleEdit}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="appointment-details">
          <span>{`${appointment.firstName} ${appointment.lastName} - ${appointment.location}`}</span>
          <br />
          {Array.isArray(appointment.appointments) && (
            <span>Appointments: {appointment.appointments.join(", ")}</span>
          )}
          <div className="appointment-actions">
            <button className="button" onClick={handleEdit}>
              Edit
            </button>
            <button
              className="button"
              onClick={() => deleteAppointment(appointment.id)}
            >
              Delete
            </button>
          </div>
          {showCalendar && <Calendar appointment={appointment} />}
        </div>
      )}
    </div>
  );
};

export default AppointmentRow;
