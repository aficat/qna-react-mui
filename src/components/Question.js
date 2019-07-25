import React, { Component } from 'react';
import { observer } from 'mobx-react';
import SubmitQuestion from './Question/SubmitQuestion';
import QuestionsList from './QuestionsList';

class Question extends Component {

  render() {
        const { questionStore } = this.props;
        const { keyResult } = questionStore;
        switch (keyResult) {
            case 'home': //displays textfield to submit question
                return <SubmitQuestion questionStore={questionStore}/>;
            case 'question': // displays question selected
                return <QuestionsList questionStore={questionStore}/>;
            default:
                return;
        }
  }
}

Question = observer(Question);
export default Question;