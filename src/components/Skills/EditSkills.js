import React, { Component } from "react";

import RichText from "../RichText";

class EditSkills extends Component {

    constructor() {
        super();
        this.state = {
            showRichText: false,
        }
    }



    addSkills = (e) => {
        e.preventDefault();
        this.setState({ showRichText: true });
    }

    render() {
        const { skills, handleSkillsChange } = this.props;
        return (
            <section className="edi-skills form-group">
                <h5 className="heading">Skills</h5>
                {this.state.showRichText ? <RichText name="skills" value={skills} onContentChange={(e) => handleSkillsChange(e)} /> : 
                <button className="add-btn btn" onClick={(e) => this.addSkills(e)}>Add</button>}
            </section>
        );
    }
}

export default EditSkills;