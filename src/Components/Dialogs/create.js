import React, { Component, Fragment } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    withStyles

} from '@material-ui/core';

import { Add } from '@material-ui/icons';
import shortid from 'shortid';

const styles = theme => ({
    formControl: {
        width: 500
    }
});

class CreateDialog extends Component {
    state = {
        open: false,
        exercise: {
            id: "",
            title: "",
            description: "",
            muscles: ""
        }
    }
    handleToggle = () => {
        this.setState(({ open }) => ({
            open: !open
        }))
    }
    handleChange = key => ({ target: { value } }) => {
        this.setState(({ exercise }) => ({
            exercise: {
                ...exercise,
                [key]: value
            }
        }))
    }
    handleSubmit = () => {
        // TODO: validatoin
        const { exercise } = this.state;
        const newExercise = { ...exercise, id: shortid.generate() }
        this.props.onCreate(newExercise)
        this.setState({
            open: false,
            exercise: {
                id: "",
                title: "",
                description: "",
                muscles: ""
            }
        })
    }
    render() {
        const { open, exercise: { title, description, muscles } } = this.state
        const { classes, muscles: categoroies } = this.props
        return (
            <Fragment>
                <Button
                    variant="fab"
                    mini
                    aria-label="Add"
                    onClick={this.handleToggle}>
                    <Add />
                </Button>
                <Dialog
                    open={open}
                    onClose={this.handleToggle}
                >
                    <DialogTitle id="form-dialog-title">
                        Create New Exercise
                </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out form below.
                    </DialogContentText>
                        <form>
                            <TextField
                                autoFocus
                                label="Title"
                                value={title}
                                margin="normal"
                                onChange={this.handleChange('title')}
                                className={classes.formControl}
                            />
                            <br />
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="muscles">
                                    Muscles
                                </InputLabel>
                                <Select
                                    value={muscles}
                                    onChange={this.handleChange('muscles')}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {categoroies.map(catogory =>
                                        <MenuItem
                                            key={catogory}
                                            value={catogory}>
                                            {catogory}
                                        </MenuItem>
                                    )}

                                </Select>
                            </FormControl>
                            <br />
                            <TextField
                                label="Description"
                                multiline
                                rows={4}
                                value={description}
                                margin="normal"
                                onChange={this.handleChange('description')}
                                className={classes.formControl}
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            color="primary"
                            variant="raised"
                            onClick={this.handleSubmit}
                        >
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}

export default withStyles(styles)(CreateDialog);
