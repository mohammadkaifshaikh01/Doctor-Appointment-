import React from "react";
import { useNavigate } from "react-router-dom";

const AppointmentConfirmation = () => {
   const navigate = useNavigate()
  const appointmentDetails = {
    date: "May 15, 2025",
    time: "2:00 PM",
    location: "123 Main St, Suite 100",
  };

  return (
    <div className="payment">
      <h1 className="header">Appointment Booked Successfully!</h1>
      <div className="icon">✅</div>
      <p className="message">Your appointment has been confirmed. We look forward to seeing you!</p>
      <div className="details">
        <p className="detailItem">
          <strong>Date:</strong> {appointmentDetails.date}
        </p>
        <p className="detailItem">
          <strong>Time:</strong> {appointmentDetails.time}
        </p>
        <p className="detailItem">
          <strong>Location:</strong> {appointmentDetails.location}
        </p>
      </div>
      <div className="buttonContainer">
        
        <button onClick={()=>navigate("/my-appointment")} className="button primaryButton">View Appointment</button>
      </div>
    </div>
  );
};

export default AppointmentConfirmation;