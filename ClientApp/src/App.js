import React, { Component } from 'react';
import { Route } from 'react-router';

// MyAppBar - navigation menu for our App
import MyAppBar from './components/appbar/appbar.component';

// Home - home page component. Here we will submit the form and send data to server
import Home from './components/home/home.component';

// AllForms - All Forms page component. Here we can will display all form's data from server and filter
import AllForms from './components/allforms/allforms.component';

// Main App class
class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div>
                {/* Navigation menu for our app */}
                <MyAppBar />
                {/* Routes to Home and AllForms components */}
                <Route path="/" exact component={Home} />
                <Route path="/all-forms" component={AllForms} />
            </div>
        );
    }
}

export default App;