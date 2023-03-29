import './App.css';
import React, { Component } from 'react';

import Header from './components/Header';
import Edit from './components/editor/Edit';
import View from './components/preview/View';

class App extends Component {
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
