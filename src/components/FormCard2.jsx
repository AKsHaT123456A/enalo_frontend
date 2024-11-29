import React from "react";
import "./FormCard3.css";

export default function FormCard3() {
  return (
    <div className="appointment-card">
      <div className="card-header">
        <div className="card-title">Book Appointment</div>
      </div>
      <div className="card-content">
        <form className="form">
          <div className="form-item">
            <label className="form-label">Name *</label>
            <input type="text" className="form-input" placeholder="Full Name" />
          </div>
          <div className="form-item">
            <label className="form-label">Email address *</label>
            <input
              type="email"
              className="form-input"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="form-item">
            <label className="form-label">Department *</label>
            <select className="form_select" defaultValue="Please Select">
  <option value="Please Select">Please Select</option>
</select>

          </div>
          <div className="form-item">
          <label className="form-label">Time *</label>
            <select className="form_select" defaultValue="Please Select">
  <option value="Please Select">4:00 PM Available</option>
</select>
          </div>
          <button type="button" className="form-button">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
