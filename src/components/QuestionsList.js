import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { observer } from 'mobx-react';
import { Card } from '@material-ui/core';

class Listings extends Component {
  state = {
    questions: []
  }

  componentDidMount() {
    axios.get(`https://5c710ac10eddba001435b5c0.mockapi.io/api/questions`)
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
        <Typography variant="h6">
          List of Questions
        </Typography>
        <br />
        <Grid container spacing={24} style={{ maxWidth: 1200 }}>
          {this.state.questions.map(question =>
            <Grid item md={3}>
              <Card>
                <p align="center">
                  {question.question}
                </p>
              </Card>
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}

Listings = observer(Listings);
export default Listings;