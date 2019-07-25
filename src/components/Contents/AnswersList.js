import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { observer } from 'mobx-react';
import { Card, CardActionArea, CardHeader, Button } from '@material-ui/core';

class AnswersList extends Component {
    state = {
        questions: []
    }

    componentDidMount() {
        this.getQuestionsAPI();
    }

    componentDidUpdate() {
        this.getQuestionsAPI();
    }

    getQuestionsAPI = () => {
        axios.get(`http://5c2d8434b8051f0014cd478a.mockapi.io/question`)
            .then(result => {
                // console.log(result.data)
                this.setState({
                    questions: result.data,
                });
            })
    }

    render() {
        return (
            <Grid container spacing={24} justify="center" style={{ maxWidth: 800, paddingTop: 24 }}>
                {this.state.questions.map(question =>
                    <Grid item md={12} key={question.id}>
                        <Card>
                            <CardHeader
                                avatar={null}
                                action={null}
                                title={question.question}
                                titleTypographyProps={{ variant: "subtitle1" }}
                            />
                            <CardActionArea style={{ borderTop: "#E1E1E1 solid 1px", align: "center" }}>
                                <Typography variant="caption" style={{ padding: 6 }}>DELETE ANSWER</Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )}
            </Grid>
        );
    }
}

AnswersList = observer(AnswersList);
export default AnswersList;