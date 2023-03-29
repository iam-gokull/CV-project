import React, { Component } from "react";
import './viewPersonalDetails.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

class ViewPersonalDetails extends Component {
    render() {
        return (
            <section className="view-personal-details">
                <div className="header">
                    <div className="main-details">
                        <h1 className="name">Gokul L</h1>
                        <h3 className="job-title">Software Engineer</h3>
                    </div>
                    <div className="side-details">
                        <div className="details">
                            <span><FontAwesomeIcon icon={faPhone} /></span>
                            <span>0123456789</span>
                        </div>
                        <div className="details">
                            <span><FontAwesomeIcon icon={faEnvelope} /></span>
                            <span>gokul@gmail.com</span>
                        </div>
                        <div className="details">
                            <span><FontAwesomeIcon icon={faLocationDot} /></span>
                            <span>Chennai, India</span>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <div className="line-breaker"></div>
                    <p>Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.
                    </p>
                </div>
            </section>
        );
    }
}

export default ViewPersonalDetails;