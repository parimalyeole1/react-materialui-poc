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

export default ({
    exercises,
    category,
    onSelect,
    exercise: {
        id,
        title = 'Welcome!',
        description = 'Please select an excercise from the list on left.'
    }
}) =>
    <Grid container spacing={8}>
        <Grid item xs sm>
            <Paper style={style.Paper}>
                {exercises.map(([group, exercises]) => (
                    !category || category === group
                        ? < Fragment key={group} >
                            <Typography
                                variant="headline"
                                style={{ textTransform: 'capitalize' }}
                            >
                                {group}
                            </Typography>
                            <List component="ul">
                                {exercises.map(({ id, title }) => (
                                    <ListItem
                                        button
                                        key={id}
                                        onClick={() => onSelect(id)}
                                    >
                                        <ListItemText primary={title} />
                                    </ListItem>
                                ))}

                            </List>
                        </Fragment>
                        : null
                ))}
            </Paper>
        </Grid>
        <Grid item xs sm>
            <Paper style={style.Paper}>
                <Typography
                    variant="display1"
                >
                    {title}
                </Typography>
                <Typography
                    variant="subheading"
                    style={{ marginTop: 20 }}
                >
                    {description}
                </Typography>
            </Paper>
        </Grid>
    </Grid>