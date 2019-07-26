import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { observer } from 'mobx-react';
import { Card, CardActionArea, CardHeader } from '@material-ui/core';

class AnswersList extends Component {
    render() {
        const { questionStore } = this.props;
        const { getAnswers, getQuestionId } = questionStore;
        return (
            <Grid container spacing={24} justify="center" style={{ maxWidth: 800, paddingTop: 24 }}>
                {getAnswers.length === 0 && <Typography>No answers found.</Typography>}
                {getAnswers && getAnswers.map((answer, index) =>
                    <Grid item md={12} key={getQuestionId}>
                        <Card fullWidth>
                            <CardHeader
                                avatar={null}
                                action={null}
                                title={"#" + (index + 1)}
                                subheader={answer}
                                titleTypographyProps={{ variant: "subtitle2" }}
                                subheaderTypographyProps={{ variant: "subtitle1" }}
                            />
                            <CardActionArea onClick={() => this.deleteAnswer(index, answer)} style={{ align: "center" }}>
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