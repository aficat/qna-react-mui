import React, { Component } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import axios from 'axios';
import { observer } from 'mobx-react';

class SubmitQuestion extends Component {
    state = {
        name: '',
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post(`https://5c710ac10eddba001435b5c0.mockapi.io/api/questions`, this.state.name)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }

    render() {
        return (
            <div align="center">
                <Grid container spacing={24} justify="center" style={{ maxWidth: 800 }}>
                    <Grid item md={10}>
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
                            fullWidth
                            align="left"
                        />
                    </Grid>
                    <Grid item md={2} style={{ paddingTop: 28 }}>
                        <Button
                            className="btn aqua-gradient btn-rounded my-0 js-scroll-trigger"
                            onClick={this.handleSubmit}
                            fullWidth
                        >
                            Submit
                    </Button>
                    </Grid>
                    <br /><br />
                </Grid>
            </div>
        );
    }
}

SubmitQuestion = observer(SubmitQuestion);
export default SubmitQuestion;