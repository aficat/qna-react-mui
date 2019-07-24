import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { observer } from 'mobx-react';

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
          <Grid item xs={12} md={6}>
            <Typography variant="h6">
              Questions 
            </Typography>
            { this.state.questions.map(question => <p align="center">{question.question}</p>)}
          </Grid>
            </div>
        );
    }
}

Listings = observer(Listings);
export default Listings;