import React, { Component } from "react";

import RichText from "../RichText";

class EditProjects extends Component {

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
        const { projects, handleProjectsChange } = this.props;
        return (
            <section className="edit-projects form-group">
                <h5 className="heading">Projects</h5>
                {this.state.showRichText ? <RichText name="projects" value={projects} onContentChange={(e) => handleProjectsChange(e)} /> : 
                <button className="add-btn btn" onClick={(e) => this.addSkills(e)}>Add</button>}
            </section>
        );
    }
}

export default EditProjects;