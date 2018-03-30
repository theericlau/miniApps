import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TestCases from './TestCases.jsx';
import { Route, Link } from 'react-router-dom';
import Test from './Test.jsx';
// class Application extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     }
//   }
//   // render() {
//   //   return (
//   //     <div>
//   //       {/* {this.props.name}
//   //       <TestCases/> */}
//   //     </div>
//   //   );
//   // }
// }

const Application = (props) => {
  // console.log(props);
  // const { test_name, s}
  const application = props.data.find(({app_name}) =>
    // console.log('name', app_name, props.match.params.appName);
    app_name === props.match.params.appName
  );
  // console.log('application', application);
  const { app_name, test_cases, time_stamp } = application;
  return (
    <div>
      <h1>
      {app_name}
      </h1>
      {test_cases.map((test, index)=> {
        const { test_name, status } = test
        let div = status ? (<div>true</div>) : (<div>false</div>)
        return (
        <li key={index}>
          <Link to={`/app/${app_name}/${test_name}`}>{test_name}</Link>
          {div}
        </li>)
      })}
      <Route path="/app/:appName/:testName" render={(routeProps) => (<Test data={test_cases} {...routeProps} />)} />
    </div>
  );
};

Application.propTypes = {

};

export default Application;