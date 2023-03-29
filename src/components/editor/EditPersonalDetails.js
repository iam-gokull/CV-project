import './editPersonalDetails.css';
import React, { Component } from 'react';

class EditPersonalDetails extends Component {
    render() {
        return(
            <section className="edit-personal-details form-group">
                <h5 className="heading">Personal details</h5>
                <label htmlFor="name">
                    <input type="text" id="name" placeholder="Name" name="name"></input>
                </label>
                <label htmlFor="title">
                    <input type="text" id="job-title" placeholder="Job title" name="job-title"></input>
                </label>
                <label htmlFor="mobile-number">
                    <input type="number" id="mobile-number" placeholder="Mobile number" name="mobile-number"></input>
                </label>
                <label htmlFor="mail-id">
                    <input type="mail" id="mail-id" placeholder="Mail id" name="mail-id"></input>
                </label>
                <label htmlFor="location">
                    <input type="text" id="location" placeholder="Location" name="location"></input>
                </label>
                <label htmlFor="description">
                    <textarea rows="5" id="description" placeholder="Description"></textarea>
                </label>
            </section>
        );
    }
}

export default EditPersonalDetails;