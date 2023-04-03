import React, { Component } from "react";

import RichText from "../RichText";

class EditEducationDetails extends Component {

    workExperience = ({ id, university, course, startDate, endDate, experience }) => {
        const { handleEducationDetailsChange, deleteEducation} = this.props;
        return (<div className={`education-group`} >

                <div className="edit-education" key={id}>
                    <label htmlFor={`university-${id}`}>
                        <input type="text" id={`university-${id}`} placeholder="University" name="university" value={university} onChange={(e) => handleEducationDetailsChange(e, id)} />
                    </label>
                    <label htmlFor={`position-${id}`}>
                        <input type="text" id={`course-${id}`} placeholder="Course" name="course" value={course} onChange={(e) => handleEducationDetailsChange(e, id)} />
                    </label>
                    <label htmlFor={`start-date-${id}`}>
                        <input type="text" id={`start-date-${id}`} placeholder="Start date" name="startDate" value={startDate} onChange={(e) => handleEducationDetailsChange(e, id)} />
                    </label>
                    <label htmlFor={`end-date-${id}`}>
                        <input type="text" id={`end-date-${id}`} placeholder="End date" name="endDate" value={endDate} onChange={(e) => handleEducationDetailsChange(e, id)} />
                    </label>
                    <label htmlFor={`description-${id}`}>
                        <RichText name="experience" value={experience} onContentChange={(e) => handleEducationDetailsChange(e, id)} />
                    </label>
                    <button className="delete-btn btn" onClick={(e) => deleteEducation(e, id)}>Delete</button>
                </div>

        </div>);
    }

    render() {
        const { addEducation, educationDetails } = this.props;
        return (
            <section className="edi-work-details form-group">
                <h5 className="heading">Education</h5>
                {educationDetails.map(education => <this.workExperience {...education} />)}
                <button className={educationDetails.length !== 0 ? "add-btn btn appended" : "add-btn btn"} onClick={addEducation}>Add</button>
            </section>
        );
    }
}

export default EditEducationDetails;