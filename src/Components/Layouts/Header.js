import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from './../Dialogs/create'


export default props =>
    <AppBar position="static">
        <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton> */}
            <Typography variant="title" color="inherit" style={{ flex: 1 }}>
                Excercises download
            </Typography>
            <CreateDialog />
        </Toolbar>
    </AppBar>   