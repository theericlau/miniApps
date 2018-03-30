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
  // constructor(){
  //   super();
  //   this.state = {
  //     data: [],
  //   };
  // }

  // componentDidMount(){
  //   this.getApp();
  // }

  // getApp(){
  //   axios.get('/app')
  //   .then(response => {
  //     console.log('response', response.data);
  //     this.setState({
  //       data: [...response.data]
  //     })
  //   })
  // }

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Switch>
              {/* <Route path="/app/:appName/:testName" render={() => (<Test data={application} />)} /> */}
              <Route path="/" component={Main} />
              {/* <Route path="/app/:appName" component={Application}></Route> */}
              {/* <Route path="/app/:appName/:testName" render={() => (<Test {...this.state} />)} /> */}

            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

// {this.state.data.map((data, index) => {
//   let { app_name, test_cases, test_run_id, time_stamp} = data;
//   console.log('i get in here')
//   return <Application key={index} name={app_name} testCases={test_cases} testId={test_run_id} timeStamp={time_stamp}/>
//       {/* <Link to={`/app/${app_name}`}>
//         {app_name}
//       </Link> */}
//     {/* </Application> */}
// })}
App.propTypes = {

};

export default App;