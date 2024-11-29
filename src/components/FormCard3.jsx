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
                            <input
                                type="text"
                                id="name"
                                placeholder="Full Name"
                                className="form-input"
                                required
                            />
                        </div>
                        <div className="form-item">
                            <input
                                type="email"
                                id="email"
                                placeholder="example@gmail.com"
                                className="form-input"
                                required
                            />
                        </div>
                        <div className="form-item">
                            <select className="form_select" defaultValue="Please Select">
                                <option value="Please Select">Please Select</option>
                            </select>

                        </div>
                        <div className="form-item">
                            <select className="form_select" defaultValue="Please Select">
                                <option value="Please Select">4:00 PM Available</option>
                            </select>
                        </div>
                        <div className="form-item full-width">
                            <textarea
                                id="message"
                                rows="4"
                                placeholder=" Message"
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
