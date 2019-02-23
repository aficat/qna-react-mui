import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

class Question extends Component {
    state = {
        name: '',
      }
    
      handleChange = event => {
        this.setState({ name: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          name: this.state.name
        };

        axios.post(`https://62167432-83e6-4153-a9ed-c53ed93b81f7.mock.pstmn.io/api/qns`, { user })
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
      <a className="btn aqua-gradient btn-rounded my-0 js-scroll-trigger" onClick={this.handleSubmit}>Submit</a>
            </div>
        );
    }
}

export default Question;