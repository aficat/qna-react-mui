import React, { Component } from 'react';
import Listings from './Listings';
import { observer } from 'mobx-react';
import Question from './Question';

class Contents extends Component {

    render() {
        const { questionStore } = this.props;
        const { keyResult } = questionStore;
        switch (keyResult) {
            case 'home':
                return <Listings />;
            case 'question':
                return <Question />;
            default:
                return;
        }
    }
}

Contents = observer(Contents);
export default Contents;