import React, { Component } from 'react';
import QuestionsList from './QuestionsList';
import { observer } from 'mobx-react';
import Question from './Question';

class Contents extends Component {

    render() {
        const { questionStore } = this.props;
        const { keyResult } = questionStore;
        switch (keyResult) {
            case 'home': //displays list of questions
                return <QuestionsList questionStore={questionStore}/>;
            case 'question': //displays list of answers for question selected
                return <Question questionStore={questionStore}/>;
            default:
                return;
        }
    }
}

Contents = observer(Contents);
export default Contents;