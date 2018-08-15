import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


export default props =>
    <AppBar position="static">
        <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton> */}
            <Typography variant="title" color="inherit" >
                Excercises download
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
    </AppBar>   