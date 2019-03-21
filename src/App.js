import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from './Travel.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Travel
          destination="New York"
          country="U.S.A"
          photo="https://cdn.pixabay.com/photo/2014/05/02/23/46/new-york-city-336475_960_720.jpg"
          distance="3000 km" />
        <Travel
          destination="Bayonne"
          country="France"
          photo="https://cdn.pixabay.com/photo/2018/11/11/13/23/bayonne-3808751_960_720.jpg"
          distance="15 km" />
      </div>
    );
  }
}

export default App;
