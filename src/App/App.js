import React, { Component } from 'react';
import './App.css';
import DATA from '../data';
import Card from '../Card/Card';

class App extends Component{
  render() {
    console.log('dataz', DATA)
    const card = DATA.map(data => (
      <Card name={data.name} />
    ));
    return (
      <div className="App">
        <header className="App-header">
          <h1>Get your CPAP here!</h1>
          {card}
        </header>
      </div>
    );
  }
}

export default App;
