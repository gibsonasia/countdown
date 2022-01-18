import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation.js';
import {Navbar, Container, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



import './resources/style.css';
import Footer from './components/header_footer/Footer';

function App() {
  return (
<div className="App">
    <header className="App-header">
      Hi This is our application
    </header>

    <Footer/>
  </div>
  );
}

export default App;
