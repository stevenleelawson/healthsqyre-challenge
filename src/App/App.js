import React, { Component } from 'react';
import './App.css';
import DATA from '../data';
import Card from '../Card/Card';
import logo from '../assets/Health-Sqyre-Logo.png';

class App extends Component{
  render() {
    const sortedData = DATA.sort(function (a, b) {
      return a.price - b.price;
    });

    const card = sortedData.map(data => (
      <Card
        name={data.name}
        price={data.price}
        description={data.description}
        vendor={data.vendor.name}
        key={data.name + data.id}
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
