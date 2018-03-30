import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';


import ApplicationScreen from './ApplicationScreen.jsx';
import Application from './Application.jsx';
import Test from './Test.jsx'


class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getApp();
  }

  getApp() {
    axios.get('/app')
      .then(response => {
        console.log('response', response.data);
        this.setState({
          data: [...response.data]
        })
      })
  }

  render() {
    return (
      <div>
        <AppBar iconClassNameRight="muidocs-icon-navigation-expand-more">
          <h1><Link to='/'>test.ai</Link></h1>
        </AppBar>
          <ApplicationScreen {...this.state}/>
          {/* <Application {...this.state}/> */}
        {/* <Route path="/app/:appName" component={Test}></Route> */}
        {/* <Route path="/app/:appName/:testName" render={() => (<Test {...this.state} />)} /> */}

      </div>
    );
  }
}

{/* <Link to={`/app/${app_name}`}>
        {app_name}
      </Link>
</Application>  */}

Main.propTypes = {

};

export default Main;