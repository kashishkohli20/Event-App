import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Featured from './components/Featured';
import VenueInfo from './components/VenueInfo';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/Footer';

import { Element } from 'react-scroll';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Element name="featured">
          <Featured />
        </Element>

        <Element name="venue_info">
          <VenueInfo />
        </Element>
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
