import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Application from './components/Application.jsx';
import ApplicationScreen from './components/ApplicationScreen.jsx';
import Main from './components/Main.jsx';
import Test from './components/Test.jsx';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
            <Switch>
              <Route path="/" component={Main} />

            </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;