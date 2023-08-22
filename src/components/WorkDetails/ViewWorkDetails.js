import React, { Component } from "react";

class ViewWorkDetails extends Component {
    render() {
        const { workDetails } = this.props;
        return (
            <section className="view-work-details">
                <div className="view-work-experience sub-fields">
                    {workDetails.length !== 0 ? <div><h4 className="side-heading">Work experience<div className="line-breaker"></div></h4></div> : null}
                    {workDetails.map((workExperience) => (
                        <div>
                        <div key={workExperience.id} className="sub-details-header">
                            <span className="position">{workExperience.position}</span>
                            <div className="sub-details-side-header">
                                <span className="company">{workExperience.company}</span>
                                {workExperience.startDate ? <span > | </span> : null}
                                <span className="start-date">{workExperience.startDate}</span>
                                {workExperience.endDate ? <span > - </span> : null}
                                <span className="end-date">{workExperience.endDate}</span>
                            </div>
                            
                        </div>
                        <span className="rte-text" dangerouslySetInnerHTML={{ __html: workExperience.experience }}></span>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default ViewWorkDetails;