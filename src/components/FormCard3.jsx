import React from "react";
import "./FormCard2.css";

const FormCard2 = () => {
  return (
    <div className="wrapper">
      <div className="card">
        <h5 className="card-title">Contact Us</h5>
        <h2 className="card-header">Make an Appointment</h2>
        <div className="form-container">
          <div className="form-grid">
            <div className="form-item">
              <label htmlFor="name" className="form-label">
                Name*
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="form-input"
                required
              />
            </div>
            <div className="form-item">
              <label htmlFor="email" className="form-label">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="form-input"
                required
              />
            </div>
            <div className="form-item">
              <label htmlFor="department" className="form-label">
                Department*
              </label>
              <select id="department" className="form-select" required>
                <option value="">Please Select</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="orthopedics">Orthopedics</option>
              </select>
            </div>
            <div className="form-item">
              <label htmlFor="time" className="form-label">
                Time*
              </label>
              <select id="time" className="form-select" required>
                <option value="">Please Select</option>
                <option value="9:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">2:00 PM</option>
              </select>
            </div>
            <div className="form-item full-width">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder=" message"
                className="form-textarea"
              ></textarea>
            </div>
          </div>
          <div className="form-button-wrapper">
            <button className="form-button">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCard2;
