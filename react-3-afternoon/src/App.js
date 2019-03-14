import React, { Component } from 'react';
import './App.css';
import data from './data'
import Home from './components/header'
import InfoBox from './components/info-box'

class App extends Component {

  render() {
    return (
      <div style={{
        backgroundColor: 'black',
        height: '100vh'
      }}>
        <Home />
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '7rem 0 0 0'
          }}>
        <InfoBox data={data}/>    
        </div>
      </div>
    );
  }
}

export default App;
