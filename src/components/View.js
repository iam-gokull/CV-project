import React, { Component } from "react";
import './view.css'

import ViewPersonalDetails from "./PersonalDetails/ViewPersonalDetails";

class View extends Component {
    render() {
        return(
            <div className="preview">
                <ViewPersonalDetails/>
            </div>
        );
    }
}

export default View;