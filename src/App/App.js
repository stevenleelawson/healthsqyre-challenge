import React, { Component } from 'react';
import './App.css';
import DATA from '../data';
import Card from '../Card/Card';
import logo from '../assets/Health-Sqyre-Logo.png';

class App extends Component{
  render() {
    console.log('dataz', DATA)
    const card = DATA.map(data => (
      <Card
        name={data.name}
        description={data.description}
      />
    ));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" className="logo" />
          {card}
        </header>
      </div>
    );
  }
}

export default App;
