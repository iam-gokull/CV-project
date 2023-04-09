import React, { Component } from "react";

import RichText from "../RichText";

class EditCustomSection extends Component {

    constructor() {
        super();
        this.state = {
            showRichText: false,
        }
    }

    addCustomSection = (e) => {
        e.preventDefault();
        this.setState({ showRichText: true });
    }

    render() {
        const { customSection, handleCustomSectionChange } = this.props;
        return (
            <section className="edit-custome-section form-group">
                <h5 className="heading">Custom section</h5>
                {this.state.showRichText ?
                    <div>
                        <label htmlFor="customHeading">
                            <input type="text" id="custom-section-heading" placeholder="Custom heading" name="customSectionHeading" value={customSection.customSectionHeading} onChange={handleCustomSectionChange} />
                        </label>
                        <RichText name="customSectionContent" value={customSection.customSectionContent} onContentChange={handleCustomSectionChange} /></div> :
                    <button className="add-btn btn" onClick={(e) => this.addCustomSection(e)}>Add</button>}
            </section>
        );
    }
}

export default EditCustomSection;