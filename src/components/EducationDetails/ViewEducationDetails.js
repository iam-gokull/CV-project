import React, { Component } from "react";

class ViewEducationDetails extends Component {
    render() {
        const { educationDetails } = this.props;
        return (
            <section className="view-education-details">
                <div className="view-education sub-fields">
                    {educationDetails.length !== 0 ? <div><h4 className="side-heading">Education<div className="line-breaker"></div></h4></div> : null}
                    {educationDetails.map((education) => (
                        <div>
                        <div key={education.id} className="sub-details-header">
                            <span className="position">{education.course}</span>
                            <div className="sub-details-side-header">
                                <span className="company">{education.university}</span>
                                {education.startDate ? <span > | </span> : null}
                                <span className="start-date">{education.startDate}</span>
                                {education.endDate ? <span > - </span> : null}
                                <span className="end-date">{education.endDate}</span>
                            </div>
                        </div>
                        <span className="rte-text" dangerouslySetInnerHTML={{ __html: education.experience }}></span>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default ViewEducationDetails;