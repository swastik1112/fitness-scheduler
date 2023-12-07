// src/components/CalendarPage.js
import React from "react";
import Calendar from "./Calendar";

const CalendarPage = ({ appointments }) => {
  return (
    <div>
      <h2>Calendar Page</h2>
      <Calendar appointments={appointments} />
    </div>
  );
};

export default CalendarPage;
