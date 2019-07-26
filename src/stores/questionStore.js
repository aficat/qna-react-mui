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

        this.questionsResult = {
            questions: [],
            status: "retrieving",
            error: ""
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

    // @computed
    get getQuestions() {
        return this.questionsResult.questions;
    }

    // @computed
    get getQuestionsStatus() {
        return this.questionsResult.status;
    }

    // @action 
    updateQuestionsResult = (questions) => {
        this.questionsResult.questions = questions;
        this.questionsResult.status = "done";
    }

    // @action 
    updateQuestionsError = (error) => {
        this.questionsResult.error = error;
        this.questionsResult.status = "error";
    }
}

decorate(QuestionStore, {
    currentPage: observable,
    questionPage: observable,
    questionsResult: observable,
    keyResult: computed,
    getQuestionId: computed,
    getQuestion: computed,
    getAnswers: computed,
    getQuestions: computed,
    getQuestionsStatus: computed,
    updateCurrentPage: action,
    updateQuestionId: action,
    updateQuestion: action,
    updateAnswers: action,
    updateQuestionsError: action,
    updateQuestionsResult: action
})

export default QuestionStore;