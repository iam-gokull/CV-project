import './editPersonalDetails.css';
import React, { Component } from 'react';

import RichText from '../RichText';

class EditPersonalDetails extends Component {

    render() {

        const {handlePersonalDetailsChange, personalDetails} = this.props;

        return(
            <section className="edit-personal-details form-group">
                <h5 className="heading">Personal details</h5>
                <label htmlFor="name">
                    <input type="text" id="name" placeholder="Name" name="name" value={personalDetails.name} onChange={handlePersonalDetailsChange}></input>
                </label>
                <label htmlFor="title">
                    <input type="text" id="job-title" placeholder="Job title" name="jobTitle" value={personalDetails.jobTitle} onChange={handlePersonalDetailsChange}></input>
                </label>
                <label htmlFor="mobile-number">
                    <input type="number" id="mobile-number" placeholder="Mobile number" name="mobileNumber" value={personalDetails.mobileNumber} onChange={handlePersonalDetailsChange}></input>
                </label>
                <label htmlFor="mail-id">
                    <input type="mail" id="mail-id" placeholder="Mail id" name="mailId" value={personalDetails.mailId} onChange={handlePersonalDetailsChange}></input>
                </label>
                <label htmlFor="location">
                    <input type="text" id="location" placeholder="Location" name="location" value={personalDetails.location} onChange={handlePersonalDetailsChange}></input>
                </label>
                <label htmlFor="description">
                    {/* <textarea rows="5" id="description" name="description" placeholder="Description" value={personalDetails.description} onChange={handlePersonalDetailsChange}></textarea> */}
                    <RichText name="description" value={personalDetails.description} onContentChange={handlePersonalDetailsChange}/>
                </label>
            </section>
        );
    }
}

export default EditPersonalDetails;