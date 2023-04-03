import React, { Component } from "react";

class ViewSkills extends Component {
    render() {
        const { skills } = this.props;
        return (
            <section className="view-skills">
                {skills.length !== 0 ? <h4 className="side-heading">Skills</h4> : null}
                <div className="rte-text" dangerouslySetInnerHTML={{ __html: skills }}></div>
            </section>
        );
    }
}

export default ViewSkills;