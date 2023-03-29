import React, { Component } from 'react';
import './header.css';

class Header extends Component {

    render() {
        const { handleButtonChange, editIsActive, viewIsActive } = this.props;
        return (
            <div className="header-content">
                <h3 className="header-logo">Resumes</h3>
                <div className="header-menu">
                    <button className={editIsActive ? "edit-btn btn active" : "edit-btn btn"} onClick={handleButtonChange}>Edit</button>
                    <button className={viewIsActive ? "view-btn btn active" : "view-btn btn"} onClick={handleButtonChange}>Preview</button>
                </div>
            </div>
        );
    }
}

export default Header;