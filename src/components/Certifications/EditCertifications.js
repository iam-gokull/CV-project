import React, { Component } from "react";

import RichText from "../RichText";

class EditCertifications extends Component {

    constructor() {
        super();
        this.state = {
            showRichText: false,
        }
    }

    addCertifications = (e) => {
        e.preventDefault();
        this.setState({ showRichText: true });
    }

    render() {
        const { certifications, handleCertificationsChange } = this.props;
        return (
            <section className="edit-certifications form-group">
                <h5 className="heading">Certifications</h5>
                {this.state.showRichText ? <RichText name="certifications" value={certifications} onContentChange={(e) => handleCertificationsChange(e)} /> : 
                <button className="add-btn btn" onClick={(e) => this.addCertifications(e)}>Add</button>}
            </section>
        );
    }
}

export default EditCertifications;