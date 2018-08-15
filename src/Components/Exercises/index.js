import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';


const style = {
    Paper: {
        padding: 20,
        marginBottom: 10,
        marginTop: 10,
        height: 500,
        overflowY: 'auto'
    },
    GridItem: {
        margin: 10
    }
}

export default ({ exercises }) =>
    <Grid container spacing={8}>
        <Grid item xs sm>
            <Paper style={style.Paper}>
                {exercises.map(([group, exercises]) => (
                    <Fragment key={group}>
                        <Typography
                            variant="headline"
                            style={{ textTransform: 'capitalize' }}
                        >
                            {group}
                        </Typography>
                        <List component="ul">
                            {exercises.map(({ title }) => (
                                <ListItem button key={title}>
                                    <ListItemText primary={title} />
                                </ListItem>
                            ))}

                        </List>
                    </Fragment>
                ))}
            </Paper>
        </Grid>
        <Grid item xs sm>
            <Paper style={style.Paper}>
                <Typography
                    variant="display1"
                >
                    Welcome!
                </Typography>
                <Typography
                    variant="subheading"
                    style={{ marginTop: 20 }}
                >
                    Please select an excercise from the list on left.
                </Typography>
            </Paper>
        </Grid>
    </Grid>