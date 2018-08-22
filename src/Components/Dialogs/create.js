import React, { Component, Fragment } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    Button
} from '@material-ui/core';

import { Add } from '@material-ui/icons';

export default class CreateDialog extends Component {
    state = {
        open: false
    }
    handleToggle = () => {
        this.setState(({ open }) => ({
            open: !open
        }))
    }
    render() {
        const { open } = this.state
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

                        </form>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" variant="raised">
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}
