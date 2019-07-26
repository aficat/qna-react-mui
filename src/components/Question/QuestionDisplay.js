import React, { Component } from 'react';
import { Button, Card, CardHeader, Grid, TextField } from '@material-ui/core';
import { observer } from 'mobx-react';

class QuestionDisplay extends Component {
    state = {
    }

    routeToHome = () => {
        const { questionStore } = this.props;
        questionStore.updateCurrentPage('home');
    }

    render() {
        const { questionStore } = this.props;
        const { getQuestion } = questionStore;
        return (
            <div align="center">
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={this.routeToHome}
                >
                    Back to Home
                </Button>
                <br /><br /><br />
                <Card style={{ maxWidth: 800, backgroundColor: "#BCE0FD" }}>
                    <CardHeader
                        avatar={null}
                        action={null}
                        title={getQuestion}
                        titleTypographyProps={{ variant: "subtitle1" }}
                    />
                </Card>
                <br />
                <Grid container spacing={24} justify="center" style={{ maxWidth: 800 }}>
                    <Grid item md={10}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Post Your Answer Here"
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
                </Grid>
            </div>
        );
    }
}

QuestionDisplay = observer(QuestionDisplay);
export default QuestionDisplay;