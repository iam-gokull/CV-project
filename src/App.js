import './App.css';
import React, { Component } from 'react';

import Header from './components/Header';
import EditPersonalDetails from './components/PersonalDetails/EditPersonalDetails';
import ViewPersonalDetails from './components/PersonalDetails/ViewPersonalDetails';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editIsActive: true,
      viewIsActive: false,
      personalDetails: {
        name: '',
        jobTitle: '',
        mobileNumber: '',
        mailId: '',
        location: '',
        description: ''
      },
    }
  }

  handleButtonChange = () => {
    this.setState(prevState => ({
      editIsActive:!prevState.editIsActive,
      viewIsActive:!prevState.viewIsActive,
    }));
  }

  handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      personalDetails: {
        ...prevState.personalDetails,
        [name]: value
      }
    }));
  }

  render() {
    const { personalDetails, editIsActive, viewIsActive } = this.state;
    return (
      <div className="App">
        <Header handleButtonChange={this.handleButtonChange} editIsActive={editIsActive} viewIsActive={viewIsActive}/>
        <div className={editIsActive ? "editor" : "editor hide"}>
          <form>
            <EditPersonalDetails handlePersonalDetailsChange={this.handlePersonalDetailsChange} personalDetails={personalDetails}/>
          </form>
        </div>
        <div className={viewIsActive ? "preview" : "preview hide"}>
          <ViewPersonalDetails personalDetails={personalDetails}/>
        </div>
      </div>
    );
  }
}

export default App;
