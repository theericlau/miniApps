import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import AppBar from 'material-ui/AppBar';

import ApplicationScreen from './ApplicationScreen.jsx';


class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: [{
        app_name: "Chewy.com",
        test_cases: [],
        time_stamp: new Date()
      }],
    };
  }

  componentDidMount() {
    console.log('i get ran');
    this.getApp();
  }

  getApp() {
    console.log('get in here)')
    axios.get('/app')
      .then(response => {
        console.log('response', response.data);
        this.setState({
          data: [...response.data]
        })
      })
  }

  render() {
    console.log('i get in herefirst', this.state.data);
    this.getApp();
    return (
      <div>
        <AppBar iconClassNameRight="muidocs-icon-navigation-expand-more">
          <h1><Link to='/'>test.ai</Link></h1>
        </AppBar>
          <ApplicationScreen {...this.state}/>
      </div>
    );
  }
}

export default Main;