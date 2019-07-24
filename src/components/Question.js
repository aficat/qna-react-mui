import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import { observer } from 'mobx-react';

class Question extends Component {
    state = {
        name: '',
      }
    
      handleChange = event => {
        this.setState({ name: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();

        axios.post(`https://5c710ac10eddba001435b5c0.mockapi.io/api/questions`, this.state.name )
          .then(res => {
            console.log(res);
            console.log(res.data);
            
          }) ;
        
      }

    render() {
        return (
            <div>
                
          <TextField
          id="outlined-multiline-static"
          label="Post Your Question"
          multiline
          rows="4"
          type="text"
          name="question"
          onChange={this.onChange}
          defaultValue="Type your question here"
          margin="normal"
          variant="outlined"
        />
            <br/><br/>
      <Button className="btn aqua-gradient btn-rounded my-0 js-scroll-trigger" onClick={this.handleSubmit}>Submit</Button>
            </div>
        );
    }
}

Question = observer(Question);
export default Question;