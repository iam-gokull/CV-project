import React, { Component } from "react";

class ViewCustomSection extends Component {
    render() {
        const { customSection } = this.props;
        return (
            <section className="view-custom-section sub-fields">
                {customSection.customSectionHeading ? <div><h4 className="side-heading">{customSection.customSectionHeading}<div className="line-breaker"></div></h4></div> : null}
                <span className="rte-text" dangerouslySetInnerHTML={{ __html: customSection.customSectionContent }}></span>
            </section>
        );
    }
}

export default ViewCustomSection;