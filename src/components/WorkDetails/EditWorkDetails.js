import React, { Component } from "react";

import RichText from "../RichText";

class EditWorkDetails extends Component {

    workExperience = ({ id, company, position, startDate, endDate, experience }) => {
        const { handleWorkDetailsChange, deleteWorkExperience } = this.props;
        return (<div className={`work-experience-group`} >

            <div className="edit-work-experience" key={id}>
                <label htmlFor={`company-${id}`}>
                    <input type="text" id={`company-${id}`} placeholder="Company" name="company" value={company} onChange={(e) => handleWorkDetailsChange(e, id)} />
                </label>
                <label htmlFor={`position-${id}`}>
                    <input type="text" id={`position-${id}`} placeholder="Position" name="position" value={position} onChange={(e) => handleWorkDetailsChange(e, id)} />
                </label>
                <label htmlFor={`start-date-${id}`}>
                    <input type="text" id={`start-date-${id}`} placeholder="Start date" name="startDate" value={startDate} onChange={(e) => handleWorkDetailsChange(e, id)} />
                </label>
                <label htmlFor={`end-date-${id}`}>
                    <input type="text" id={`end-date-${id}`} placeholder="End date" name="endDate" value={endDate} onChange={(e) => handleWorkDetailsChange(e, id)} />
                </label>
                <label htmlFor={`description-${id}`}>
                    <RichText name="experience" value={experience} onContentChange={(e) => handleWorkDetailsChange(e, id)} />
                </label>
                <button className="delete-btn btn" onClick={(e) => deleteWorkExperience(e, id)}>Delete</button>
            </div>

        </div>);
    }

    render() {
        const { addWorkExperience, workDetails } = this.props;
        return (
            <section className="edit-work-details form-group">
                <h5 className="heading">Work experience</h5>
                <div className="wrapper">
                    {workDetails.map(workExperience => <this.workExperience {...workExperience} />)}
                    <button className={workDetails.length !== 0 ? "add-btn btn appended" : "add-btn btn"} onClick={addWorkExperience}>Add</button>
                </div>
            </section>
        );
    }
}

export default EditWorkDetails;