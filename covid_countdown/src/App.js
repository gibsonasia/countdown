
import React, { Component } from 'react';
import './resources/style.css';
import { Element } from 'react-scroll';

import About from './components/about/About'
import Landing from './components/landing/Landing'
import Header from './components/header_footer/Header'
import Footer from './components/header_footer/Footer'
import Pricing from './components/pricing'
import Highlights from './components/Highlights'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <Element name="landing">
          <Landing/>
        </Element>
        <Element name="about">
          <About/>
        </Element>

        <Element name="highlights">
          <Highlights/>
        </Element>

        <Element name="pricing">
          <Pricing/>
        </Element>

        <Footer/>
      </div>
    );
  }
}
export default App;

