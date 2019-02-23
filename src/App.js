import React, { Component } from 'react';
import './App.css';
import Question from './components/Question';
import Listings from './components/Listings';

class App extends Component {
  render() {
    
    return (
      <div className="App" align="center">
      <div className="App-question">
      <Question></Question>
      <br/><br/>
      </div>
       
      <div className="App-listing" align="center">
        <Listings></Listings>
        <br/><br/>
        </div>
      </div>
    );
  }
}

export default App;
