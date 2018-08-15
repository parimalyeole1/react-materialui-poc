import React from 'react';
import { Grid, Paper } from '@material-ui/core';

const style = {
    Paper: {
        padding: 20,
        marginBottom: 10,
        marginTop: 10
    },
    GridItem: {
        margin: 10
    }
}

export default props =>
    <Grid container spacing={8}>
        <Grid item xs sm>
            <Paper style={style.Paper}>
                Left Pane
        </Paper>
        </Grid>
        <Grid item xs sm>
            <Paper style={style.Paper}>
                Right Pane
        </Paper>
        </Grid>
    </Grid>