import { observable, action, decorate, computed } from "mobx";

class QuestionStore {

    constructor() {
        this.currentPage = {
            key: 'home'
        };
    }

    // @computed
    get keyResult() {
        return this.currentPage.key;
    }

    // @action 
    updateCurrentPage = (key) => {
        this.currentPage.key = key;
    }
}

decorate(QuestionStore, {
    currentPage: observable,
    keyResult: computed,
    updateCurrentPage: action,
})

export default QuestionStore;