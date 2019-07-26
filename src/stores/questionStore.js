import { observable, action, decorate, computed } from "mobx";

class QuestionStore {

    constructor() {
        this.currentPage = {
            key: 'home'
        };

        this.questionPage = {
            questionId: 0,
            question: "",
            answers: []
        }
    }

    // @computed
    get keyResult() {
        return this.currentPage.key;
    }

    // @action 
    updateCurrentPage = (key) => {
        this.currentPage.key = key;
    }

    // @computed
    get getQuestionId() {
        return this.questionPage.questionId;
    }

    // @action 
    updateQuestionId = (id) => {
        this.questionPage.questionId = id;
    }

    // @computed
    get getQuestion() {
        return this.questionPage.question;
    }

    // @action 
    updateQuestion = (question) => {
        this.questionPage.question = question;
    }

    // @computed
    get getAnswers() {
        return this.questionPage.answers;
    }

    // @action 
    updateAnswers = (answers) => {
        this.questionPage.answers = answers;
    }
}

decorate(QuestionStore, {
    currentPage: observable,
    questionPage: observable,
    keyResult: computed,
    getQuestionId: computed,
    getQuestion: computed,
    getAnswers: computed,
    updateCurrentPage: action,
    updateQuestionId: action,
    updateQuestion: action,
    updateAnswers: action
})

export default QuestionStore;