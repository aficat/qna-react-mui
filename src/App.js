import React, { Component } from 'react';
import './App.css';
import Question from './components/Question';
import Listings from './components/Listings';
import { observer } from 'mobx-react';
import QuestionStore from './stores/questionStore';
import Contents from './components/Contents';
import { Button } from '@material-ui/core';

class App extends Component {

  routeToHome = () => {
    const { questionStore } = this.props;
    questionStore.updateCurrentPage('home');
  }

  routeToQ = () => {
    const { questionStore } = this.props;
    questionStore.updateCurrentPage('question');
  }

  render() {
    const { questionStore } = this.props;
    return (
      <div className="App" align="center">
        <Button onClick={this.routeToHome}>Listings</Button>
        <Button onClick={this.routeToQ}>Questions</Button>
        <div className="App-question">
          <Question questionStore={questionStore} />
          <br /><br />
        </div>

        <div className="App-listing" align="center">
          <Contents questionStore={questionStore} />
          <br /><br />
        </div>
      </div>
    );
  }
}

App = observer(App);
export default App;
