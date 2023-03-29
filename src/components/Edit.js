import React, { Component } from "react";
import './edit.css'

import EditPersonalDetails from "./PersonalDetails/EditPersonalDetails";

class Edit extends Component {
    render() {
        return(
            <div className="editor hide">
                <form>
                    <EditPersonalDetails/>
                </form>
            </div>
        );
    }
}

export default Edit;