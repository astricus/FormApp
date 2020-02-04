// Home Page Component. Modified version of https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in-side
import React from 'react';

// Material UI Components
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import MaterialForm from '../material-form/material-form.component';

// Styles
import useStyles from './home.styles';

// Main function
const Home = () => {

    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />

            {/* Image from unsplash.com */}
            <Grid item xs={false} sm={4} md={7} className={classes.image} />

            {/* Form */}
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Submit the form
                    </Typography>
                    {/* Form Component */}
                    <MaterialForm />
                </div>
            </Grid>
        </Grid>
    );
}

export default Home;