import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Featured from './components/Featured';
import VenueInfo from './components/VenueInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <VenueInfo />
      </div>
    );
  }
}

export default App;
