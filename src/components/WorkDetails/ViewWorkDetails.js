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
                            <h6 className="position">{workExperience.position}</h6>
                            <div className="sub-details-side-header">
                                <h6 className="company">{workExperience.company}</h6>
                                {workExperience.startDate ? <span > | </span> : null}
                                <h6 className="start-date">{workExperience.startDate}</h6>
                                {workExperience.endDate ? <span > - </span> : null}
                                <h6 className="end-date">{workExperience.endDate}</h6>
                            </div>
                            
                        </div>
                        <div className="rte-text" dangerouslySetInnerHTML={{ __html: workExperience.experience }}></div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default ViewWorkDetails;