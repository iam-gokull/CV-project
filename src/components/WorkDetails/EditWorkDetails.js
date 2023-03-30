import React, { Component } from "react";
import './editWorkDetails.css';

class EditWorkDetails extends Component {
    render() {
        return (
            <section className="edi-work-details form-group">
                <h5 className="heading">Work experience</h5>
                <label htmlFor="name">
                    <input type="text" id="name" placeholder="Name" name="name" ></input>
                </label>
                <label htmlFor="title">
                    <input type="text" id="job-title" placeholder="Job title" name="jobTitle" ></input>
                </label>
                <label htmlFor="mobile-number">
                    <input type="number" id="mobile-number" placeholder="Mobile number" name="mobileNumber" ></input>
                </label>
                <label htmlFor="mail-id">
                    <input type="mail" id="mail-id" placeholder="Mail id" name="mailId" ></input>
                </label>
                <label htmlFor="location">
                    <input type="text" id="location" placeholder="Location" name="location" ></input>
                </label>
                <label htmlFor="description">
                    <textarea rows="5" id="description" name="description" placeholder="Description" ></textarea>
                </label>
            </section>
        );
    }
}

export default EditWorkDetails;