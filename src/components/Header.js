import React, { Component } from 'react';
import './header.css';

class Header extends Component {

    render() {
        return (
            <div className="header-content">
                <h3 className="header-logo">Resumes</h3>
                <div className="header-menu">
                    <button className="edit-btn btn active">Edit</button>
                    <button className="view-btn btn">Preview</button>
                </div>
            </div>
        );
    }
}

export default Header;