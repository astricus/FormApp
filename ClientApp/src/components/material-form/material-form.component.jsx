import React from 'react';
import { useHistory } from 'react-router-dom'

// Material UI Components
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import { Radio, RadioGroup } from '@material-ui/core';

// useForm hook is used to validate and get form data
import { useForm } from '../../utils/validator';

// Copyright
import Copyright from '../copyright/copyright.component';

// axios is used to post data from submitted form
import axios from 'axios';

// Cities data for dropdown
import CITIES_DATA from './cities.data';

// Form Styles
import useStyles from './material-form.syles';

// Main form function
const MaterialForm = () => {

    // When form is successfully submitted history is used to direct to /all-forms
    const history = useHistory();

    // cities for dropdown field
    const cities = CITIES_DATA;

    // styles
    const classes = useStyles();

    const formData = {
        name: '',
        email: '',
        city: '',
        date: '',
        gender: ''
    };

    const { values, useInput, isValid } = useForm(formData);

    // form submit function. If success - push to /all-forms
    const handleSubmit = e => {
        e.preventDefault();
        axios.post("api/Forms/AddForm", values)
            .then((response) => {
            response.status === 200 ? history.push('/all-forms') : console.log('Form was not submitted!');
         });
    };

    return (
        <form onSubmit={handleSubmit} className={classes.form}>

            {/* Name text field */}
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                {...useInput('name', 'isRequired')}
            />

            {/* E-mail text field */}
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail address"
                name="email"
                autoComplete="email"
                {...useInput('email', 'isRequired, isEmail')}
            />

            {/* City dropdown field */}
            <TextField
                id="city"
                margin="normal"
                required
                select
                label="Select city"
                fullWidth
                name="city"
                variant="outlined"
                {...useInput('city', 'isRequired')}
            >
                {cities.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            {/* Birthday date field */}
            <TextField
                id="date"
                name="date"
                required
                margin="normal"
                label="Birthday"
                type="date"
                fullWidth
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
                {...useInput('date', 'isRequired')}
            />

            {/* Gender radio group field */}
            <FormControl
                component="fieldset" fullWidth
                margin="normal"
                className={classes.formControl}
            >
                <FormLabel component="legend" required >Gender</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="gender"
                    {...useInput('gender', 'isRequired')}
                >
                    <FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" />
                </RadioGroup>
            </FormControl>

            {/* Agreement checkbox field */}
            <FormControlLabel
                margin="normal"
                control={
                    <Checkbox
                        color="primary" 
                        name="formControl" 
                        {...useInput('formControl', 'isRequired')} 
                    />
                }
                label="I agree to submit the form"
            />

            {/* Submit button, fires handleSubmit */}
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={!isValid}
            >
                Submit form
            </Button>
            <Box mt={5}>
                <Copyright />
            </Box>
        </form >
    )
};

export default MaterialForm;