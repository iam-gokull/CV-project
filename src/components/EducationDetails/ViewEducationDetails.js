import React, { Component } from "react";

class ViewEducationDetails extends Component {
    render() {
        const { educationDetails } = this.props;
        return (
            <section className="view-education-details">
                <div className="view-educationsub-fields">
                    {educationDetails.length !== 0 ? <h4 className="side-heading">Education</h4> : null}
                    {educationDetails.map((education) => (
                        <div>
                        <div key={education.id} className="sub-details-header">
                            <h6 className="position">{education.course}</h6>
                            <div className="sub-details-side-header">
                                <h6 className="company">{education.university}</h6>
                                {education.startDate ? <span > | </span> : null}
                                <h6 className="start-date">{education.startDate}</h6>
                                {education.endDate ? <span > - </span> : null}
                                <h6 className="end-date">{education.endDate}</h6>
                            </div>
                        </div>
                        <div className="rte-text" dangerouslySetInnerHTML={{ __html: education.experience }}></div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default ViewEducationDetails;