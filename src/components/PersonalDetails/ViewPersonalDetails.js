import React, { Component } from "react";
import './viewPersonalDetails.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

class ViewPersonalDetails extends Component {
    render() {
        const { personalDetails } = this.props;
        return (
            <section className="view-personal-details">
                <div className="header">
                    <div className="main-details">
                        <h1 className="name">{personalDetails.name}</h1>
                        <h3 className="job-title">{personalDetails.jobTitle}</h3>
                    </div>
                    <div className="side-details">
                        <div className="details">
                            <span>{personalDetails.mobileNumber ? <FontAwesomeIcon icon={faPhone} className="icon"/> : null}</span>
                            <span>{personalDetails.mobileNumber}</span>
                        </div>
                        <div className="details">
                            <span>{personalDetails.mailId ? <FontAwesomeIcon icon={faEnvelope} className="icon"/> : null}</span>
                            <span>{personalDetails.mailId}</span>
                        </div>
                        <div className="details">
                            <span>{personalDetails.location ? <FontAwesomeIcon icon={faLocationDot} className="icon"/> : null}</span>
                            <span>{personalDetails.location}</span>
                        </div>
                    </div>
                </div>
                <div className="description">
                    {personalDetails.description ? <div className="line-breaker"></div> : null}
                    <p>{personalDetails.description}</p>
                </div>
            </section>
        );
    }
}

export default ViewPersonalDetails;