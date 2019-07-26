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
                {getAnswers && getAnswers.map(answer =>
                    <Grid item md={12} key={getQuestionId}>
                        <Card fullWidth>
                            <CardHeader
                                avatar={null}
                                action={null}
                                title={answer}
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