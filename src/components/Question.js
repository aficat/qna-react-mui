import React, { Component } from 'react';
import { observer } from 'mobx-react';
import SubmitQuestion from './Question/SubmitQuestion';
import QuestionDisplay from './Question/QuestionDisplay';

class Question extends Component {

  render() {
        const { questionStore } = this.props;
        const { keyResult } = questionStore;
        switch (keyResult) {
            case 'home': //displays textfield to submit question
                return <SubmitQuestion questionStore={questionStore}/>;
            case 'question': // displays question selected
                return <QuestionDisplay questionStore={questionStore}/>;
            default:
                return;
        }
  }
}

Question = observer(Question);
export default Question;