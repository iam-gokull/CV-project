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
      },
      description: ''
    }

    this.a4ContainerRef = React.createRef();
  }

  handleButtonChange = () => {
    this.setState(prevState => ({
      editIsActive:!prevState.editIsActive,
      viewIsActive:!prevState.viewIsActive,
    }));
  }

  componentDidMount() {
    const a4Container = this.a4ContainerRef.current;
    const contentHeight = a4Container.offsetHeight;
    const a4Height = 297; // in mm

    if (contentHeight > a4Height) {
      // create another A4 sized div and add the excess content to it
      const excessContent = a4Container.innerHTML.slice(a4Container.innerHTML.indexOf("</p>") + 4);
      a4Container.innerHTML = a4Container.innerHTML.slice(0, a4Container.innerHTML.indexOf("</p>") + 4);
      const newA4Container = document.createElement("div");
      newA4Container.classList.add("a4-size");
      newA4Container.innerHTML = excessContent;
      document.body.appendChild(newA4Container);
    }
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
            <EditPersonalDetails handlePersonalDetailsChange={this.handlePersonalDetailsChange} personalDetails={personalDetails} handleDescriptionChange={this.handleDescriptionChange}/>
          </form>
        </div>
        <div className={viewIsActive ? "preview" : "preview hide"}>
          <div className="a4-size" ref={this.a4ContainerRef}>
            <ViewPersonalDetails personalDetails={personalDetails}/>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
