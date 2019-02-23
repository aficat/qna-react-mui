import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

class Listings extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://62167432-83e6-4153-a9ed-c53ed93b81f7.mock.pstmn.io/api/qns`)
      .then(res => {
        const persons = res.data.result;
        this.setState({ persons });
      })
  }
    render() {
      
        return (
            <div>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">
              Questions 
            </Typography>
{ this.state.persons.map(person => <p align="center">{person.question}</p>)}
          </Grid>
            </div>
        );
    }
}

export default Listings;