import React, { useState } from "react";
import AppointmentsList from "./components/AppointmentsList";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Calendar from "./components/Calendar";

function App() {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div>
      <h1>Fitness Trainer Appointment Scheduler</h1>
      {/* <button onClick={() => setShowCalendar(!showCalendar)}>
        {showCalendar ? "Hide Calendar" : "Show Calendar"}
      </button> */}
      <AppointmentsList showCalendar={showCalendar} />
    </div>
  );
}

export default App;
