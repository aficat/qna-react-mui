import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { observer } from 'mobx-react';
import { Card, CardActions, CardHeader, Button, CircularProgress } from '@material-ui/core';

class QuestionsList extends Component {

  componentDidMount() {
    this.getQuestionsAPI();
  }

  componentDidUpdate() {
    this.getQuestionsAPI();
  }

  routeToQ = (id, question, answers) => {
    const { questionStore } = this.props;
    questionStore.updateCurrentPage('question');
    questionStore.updateQuestionId(id);
    questionStore.updateQuestion(question);
    questionStore.updateAnswers(answers);
  }

  getQuestionsAPI = () => {
    const { questionStore } = this.props;
    axios.get(`https://5c2d8434b8051f0014cd478a.mockapi.io/question`)
      .then(result => {
        // console.log(result.data)
        ('error' in result) ?
          questionStore.updateCategoryError(result) :
          questionStore.updateQuestionsResult(result.data);
      })
  }

  deleteQuestion = (id) => {
    axios.delete(`https://5c2d8434b8051f0014cd478a.mockapi.io/question/${id}`)
      .then(result => {
        console.log(result.data)
      })
  }

  renderResult = () => {
    const { questionStore } = this.props;
    const { getQuestions } = questionStore;
    return (
      <div>
        <Typography variant="h6" style={{ paddingTop: 18 }}>
          List of Questions
        </Typography>
        <br />
        <Grid container spacing={24} justify="center" style={{ maxWidth: 1200 }}>
          {getQuestions && getQuestions.map(question =>
            <Grid item md={3} key={question.id}>
              <Card>
                <CardHeader
                  avatar={null}
                  action={null}
                  title={question.question}
                  titleTypographyProps={{ variant: "subtitle1" }}
                />
                <CardActions style={{ borderTop: "#E1E1E1 solid 1px", align: "center" }}>
                  <Button size="small" onClick={() => this.routeToQ(question.id, question.question, question.answers)}>
                    <Typography variant="caption">View Answers ({question.answers.length})</Typography>
                  </Button>
                  <Button size="small" onClick={() => this.deleteQuestion(question.id)}>
                    <Typography variant="caption">Delete Question</Typography>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )}
        </Grid>
      </div>
    )
  }

  renderError = () => {
    return (
      <div>
        <Typography variant="h6" style={{ paddingTop: 18 }}>
          List of Questions
      </Typography>
        <br />
        <Typography color="error">
          An error has occured in retrieving the list of questions. Please try again later.
        </Typography>
      </div>
    )
  }

  renderAwaiting = () => {
    return (
      <div>
        <Typography variant="h6" style={{ paddingTop: 18 }}>
          List of Questions
      </Typography>
        <br />
        <CircularProgress />
      </div>
    )
  }

  renderDefault = () => {
    const { questionStore } = this.props;
    const { getQuestions } = questionStore;
    return (
      <div>
        <Typography variant="h6" style={{ paddingTop: 18 }}>
          List of Questions
      </Typography>
        <br />
        {
          getQuestions.length === 0 &&
          <Typography>
            No questions found.
        </Typography>
        }
      </div>
    )
  }

  render() {
    const { questionStore } = this.props;
    const { getQuestionsStatus } = questionStore;
    switch (getQuestionsStatus) {
      case 'done': // api loaded successfully
        return this.renderResult();
      case 'error': // api error
        return this.renderError();
      case 'retrieving': // retrieving api results
        return this.renderAwaiting();
      default: 
        return this.renderDefault();
    }
  }
}

QuestionsList = observer(QuestionsList);
export default QuestionsList;