import React, { Component } from "react";

class ViewProjects extends Component {
    render() {
        const { projects } = this.props;
        return (
            <section className="view-projects sub-fields">
                {projects ? <div><h4 className="side-heading">Projects<div className="line-breaker"></div></h4></div> : null}
                <div className="rte-text" dangerouslySetInnerHTML={{ __html: projects }}></div>
            </section>
        );
    }
}

export default ViewProjects;