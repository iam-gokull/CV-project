import React, { Component } from "react";

class ViewCertifications extends Component {
    render() {
        const { certifications } = this.props;
        return (
            <section className="view-certifications sub-fields">
                {certifications ? <div><h4 className="side-heading">Certifications<div className="line-breaker"></div></h4></div> : null}
                <div className="rte-text" dangerouslySetInnerHTML={{ __html: certifications }}></div>
            </section>
        );
    }
}

export default ViewCertifications;