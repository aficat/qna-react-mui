import React, { Component } from 'react';
import { observer } from 'mobx-react';
import SubmitQuestion from './Question/SubmitQuestion';
import QuestionsList from './QuestionsList';

class Question extends Component {

  render() {
        const { questionStore } = this.props;
        const { keyResult } = questionStore;
        switch (keyResult) {
            case 'home':
                return <SubmitQuestion questionStore={questionStore}/>;
            case 'question':
                return <QuestionsList questionStore={questionStore}/>;
            default:
                return;
        }
  }
}

Question = observer(Question);
export default Question;