import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {


  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
  
}

export default App;
