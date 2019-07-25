import React, { Component } from 'react';
import './App.css';
import Question from './components/Question';
import { observer } from 'mobx-react';
import Contents from './components/Contents';
import MenuBar from './components/MenuBar';

class App extends Component {

  render() {
    const { questionStore } = this.props;
    return (
      <React.Fragment>
        <MenuBar questionStore={questionStore} />
        <div className="App" align="center">
          <div className="App-question">
            <br />
            <Question questionStore={questionStore} />
            <br /><br />
          </div>
          <div className="App-listing" align="center">
            <Contents questionStore={questionStore} />
            <br /><br />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

App = observer(App);
export default App;
