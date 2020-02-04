import React, { Component } from 'react';

// Material UI Components
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// Axios is used to get data from storage
import axios from 'axios';


class AllForms extends Component {
    constructor(props) {
        super(props);

        // state is used to store forms data, loading flag and searchfield string
        this.state = {
            forms: [],
            loading: true,
            searchfield: ''
        }
    }

    // Populating data from storage when component mounted
    componentDidMount() {
        this.populateFormsData();
    }

    // Populate method
    populateFormsData() {
        axios.get("api/Forms/GetForms").then(result => {
            const response = result.data;
            this.setState({ forms: response, loading: false });
        })
    }

    // Render Forms Table method. Forms data is displayed in a Material UI Table Component
    renderFormsTable(forms) {
        return (

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">E-mail</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Gender</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {forms.map(form => (
                            <TableRow key={form.name}>
                                <TableCell component="th" scope="row">
                                    {form.name}
                                </TableCell>
                                <TableCell align="right">{form.email}</TableCell>
                                <TableCell align="right">{form.city}</TableCell>
                                <TableCell align="right">{new Date(form.date).toLocaleDateString('ru-RU')}</TableCell>
                                <TableCell align="right">{form.gender}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        )
    }
    // Watch on searchfield change and modify state 
    handleInputChange = e => {
        this.setState({ searchfield: e.target.value });
    }

    render() {
        const { forms, searchfield } = this.state;

        // filteredForms is an array with forms which filtered by name when we type in SearchField.
        // this array is used to display forms
        const filteredForms = forms.filter(form => form.name.toLowerCase().includes(searchfield.toLowerCase()))
        let content = this.state.loading ? (
            <Typography variant="overline" align="center" color="textSecondary" paragraph>
                Loading...
            </Typography>
        ) : (
                this.renderFormsTable(filteredForms)
            )

        return (
            <React.Fragment>
                <CssBaseline />
                <div>
                    <Container maxWidth="lg">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            All Forms
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Here you can see and filter all submitted forms
                        </Typography>
                        <div>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    id="search"
                                    label="search"
                                    name="search"
                                    onChange={this.handleInputChange}
                                    autoFocus
                                />
                                </Grid>
                            </Grid>
                        </div>
                        <div>
                            {content}
                        </div>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default AllForms;