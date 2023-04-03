import React, { Component } from "react";

import './viewWorkDetails.css'

class ViewWorkDetails extends Component {
    render() {
        const { workDetails } = this.props;
        return (
            <section className="view-work-details">
                <div className="work-experience">
                    {workDetails.length !== 0 ? <h4 className="side-heading">Work Experience</h4> : null}
                    {workDetails.map((workExperience) => (
                        <div>
                        <div key={workExperience.id} className="work-details-header">
                            <h6 className="position">{workExperience.position}</h6>
                            <div className="work-details-side-header">
                                <h6 className="company">{workExperience.company}</h6>
                                {workExperience.startDate ? <span > | </span> : null}
                                <h6 className="start-date">{workExperience.startDate}</h6>
                                {workExperience.endDate ? <span > - </span> : null}
                                <h6 className="end-date">{workExperience.endDate}</h6>
                            </div>
                            
                        </div>
                        <div className="experience" dangerouslySetInnerHTML={{ __html: workExperience.experience }}></div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default ViewWorkDetails;