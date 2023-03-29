import React, { Component } from "react";
import './viewPersonalDetails.css';

class ViewPersonalDetails extends Component {
    render() {
        return (
            <section className="view-personal-details">
                <div className="header">
                    <div className="main-details">
                        <h1 className="name">Gokul</h1>
                        <h3 className="job-title">Software Engineer</h3>
                    </div>
                    <div className="details">
                        <div className="mobile-number">
                            <FontAwesomeIcon icon={solid("phone")} />
                            <span>0123456789</span>
                        </div>
                        <div className="mail-id"></div>
                        <div className="location"></div>
                    </div>
                    <div className="description">
                        Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.
                    </div>
                </div>
            </section>
        );
    }
}

export default ViewPersonalDetails;