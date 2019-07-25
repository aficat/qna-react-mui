import React, { Component } from 'react';
import QuestionsList from './QuestionsList';
import { observer } from 'mobx-react';
import Question from './Question';

class Contents extends Component {

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
        const { keyResult } = questionStore;
        switch (keyResult) {
            case 'home':
                return <QuestionsList />;
            case 'question':
                return <Question />;
            default:
                return;
        }
    }
}

Contents = observer(Contents);
export default Contents;