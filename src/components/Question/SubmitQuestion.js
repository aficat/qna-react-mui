import React, { Component } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import axios from 'axios';
import { observer } from 'mobx-react';

class SubmitQuestion extends Component {
    state = {
        name: '',
    }

    // set state of new question typed in text field
    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    // submit question by calling api to post question
    handleSubmit = event => {
        event.preventDefault();
        axios.post(`https://5c2d8434b8051f0014cd478a.mockapi.io/question`, { question: this.state.name })
            .then(res => {
                // console.log(res);
                // console.log(res.data);
            });
    }

    render() {
        return (
            <div align="center">
                <Grid container spacing={24} justify="center" style={{ maxWidth: 800 }}>
                    <Grid item md={10}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Post Your Question Here"
                            multiline
                            rows="4"
                            type="text"
                            name={this.state.name}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            align="left"
                        />
                    </Grid>
                    <Grid item md={2} style={{ paddingTop: 28 }}>
                        <Button
                            variant="contained"
                            color="primary"
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