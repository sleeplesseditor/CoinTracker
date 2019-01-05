import React, { Component } from 'react';
import Today from './Today/Today';
import History from './History/History';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="topheader">
          <header className="container">
            <nav className="navbar">
              <div className="navbar-brand">
                <span className="navbar-item">CoinTracker</span>
              </div>
            </nav>
          </header>
        </div>
        <section className="results--section">
          <div className="container">
            <h1>CoinTracker is a real-time price information about<br></br> BTC, ETH and LTC.</h1>
          </div>
          <div className="results--section__inner">
            <Today />
            <History />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
