import './App.css';
import React, { Component } from 'react';

import Header from './components/Header';
import Edit from './components/Edit';
import View from './components/View';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        jobTitle: '',
        mobileNumber: '',
        mailId: '',
        location: '',
    }
  }

  handlePersonalDetailsChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    })
  }

  
  render() {
    return (
      <div className="App">
        <Header/>
        <Edit/>
        <View/>
      </div>
    );
  }
}

export default App;
