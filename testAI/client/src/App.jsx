import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      appList = []
    };
  }

  componentDidMount(){
    getApp();
  }

  getApp(){
    axios.get('/app')
    .then(response => {
      console.log('response', response);
    })
  }

  render() {
    return (
      <div>
        TestAI
      </div>
    );
  }
}

App.propTypes = {

};

export default App;