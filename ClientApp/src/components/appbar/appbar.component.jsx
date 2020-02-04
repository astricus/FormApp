// MyAppBar Comonent
import React from 'react';

// Material UI Components
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

// MyAppBar styles
import useStyles from './appbar.styles';


const MyAppBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="relative">
                <Toolbar>
                    {/* Home button */}
                    <Button color="inherit" component={RouterLink} to={"/"}  >Home</Button>
                    {/* All Forms button */}
                    <Button color="inherit" component={RouterLink} to="/all-forms" >All Forms</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MyAppBar;