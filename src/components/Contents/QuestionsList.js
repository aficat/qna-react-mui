import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { observer } from 'mobx-react';
import { Card, CardActions, CardHeader, Button } from '@material-ui/core';

class QuestionsList extends Component {
  state = {
    questions: []
  }

  componentDidMount() {
    this.getQuestionsAPI();
  }

  componentDidUpdate() {
    this.getQuestionsAPI();
  }

  routeToHome = () => {
    const { questionStore } = this.props;
    questionStore.updateCurrentPage('home');
  }

  routeToQ = (id, question, answers) => {
    const { questionStore } = this.props;
    questionStore.updateCurrentPage('question');
    questionStore.updateQuestionId(id);
    questionStore.updateQuestion(question);
    questionStore.updateAnswers(answers);
  }

  getQuestionsAPI = () => {
    axios.get(`https://5c2d8434b8051f0014cd478a.mockapi.io/question`)
      .then(result => {
        // console.log(result.data)
        this.setState({
          questions: result.data,
        });
      })
  }

  render() {
    return (
      <div>
        <Typography variant="h6" style={{ paddingTop: 18 }}>
          List of Questions
        </Typography>
        <br />
        <Grid container spacing={24} justify="center" style={{ maxWidth: 1200 }}>
          {this.state.questions.map(question =>
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
                  <Button size="small" onClick={null}>
                    <Typography variant="caption">Delete Question</Typography>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}

QuestionsList = observer(QuestionsList);
export default QuestionsList;