import React, { Component } from "react";

class ViewSkills extends Component {
    render() {
        const { skills } = this.props;
        return (
            <section className="view-skills sub-fields">
                {skills ? <div><h4 className="side-heading">Skills<div className="line-breaker"></div></h4></div> : null}
                <div className="rte-text" dangerouslySetInnerHTML={{ __html: skills }}></div>
            </section>
        );
    }
}

export default ViewSkills;