import React, { Component } from "react";
import './editWorkDetails.css';

import RichText from "../RichText";

class EditWorkDetails extends Component {

    workExperience = ({ id, company, position, startDate, endDate, experience }) => {
        const { handleWorkDetailsChange, deleteWorkExperience } = this.props;
        return (<div className={`work-experience-group`} >

                <div className="work-experience" key={id}>
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
            <section className="edi-work-details form-group">
                <h5 className="heading">Work experience</h5>
                {workDetails.map(workExperience => <this.workExperience {...workExperience} />)}
                <button className="add-btn btn" onClick={addWorkExperience}>Add</button>

            </section>
        );
    }
}

export default EditWorkDetails;