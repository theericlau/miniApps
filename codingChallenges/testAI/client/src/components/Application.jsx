import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Test from './Test.jsx';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

const styles = {
  paper: {
    display: 'inline-block',
    width: 'auto',
    height: 'auto',
    margin: 10,
    textAlign: 'center',

  },
  subHeader: {
    fontSize: 20,
    fontFamily: 'Josefin Sans',
  }
};

const Application = (props) => {
  // debugger;
  console.log('im the props', props)
  const application = props.data.find(({app_name}) =>{
    console.log(app_name);
      return app_name === props.match.params.appName
  }
  );
  const { app_name, test_cases, time_stamp } = application;
  // if (application) {
  //   const { app_name, test_cases, time_stamp } = application;
  // } else {
  //   console.log('whatup')
  // }
  return (
    <div>
      <h1>
      {app_name}
      </h1>
      <Subheader style={styles.subHeader}>Test Cases</Subheader>
      {test_cases.map((test, index)=> {
        const { test_name, status } = test
        let statusCheck = status ? (<i className="material-icons positive">done</i>) : (<i className="material-icons negative">clear</i>)
        return (
        <Paper key={test_name} style={styles.paper} zDepth={1}>
          <Link to={`/app/${app_name}/${test_name}`} className="parent">
            <div className="test">{index +1}. {test_name}</div>
            {statusCheck}
          </Link>
        </Paper>
      )})}

      <hr />
      <Route path="/app/:appName/:testName" render={(routeProps) => (<Test data={test_cases} {...routeProps} />)} />
    </div>
  );
};

// export default Application;

// import React, { Component } from 'react';

// class Application extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [],
//     };
//   }

//   componentWillMount() {
//     console.log('i get ran');
//     this.getApp();
//   }

//   getApp() {
//     axios.get('/app')
//       .then(response => {
//         console.log('response', response.data);
//         this.setState({
//           data: [...response.data]
//         })
//       })
//   }


//   render() {
//       console.log('im the props app', this.state);
//       const application = props.data.find(({ app_name }) =>
//         app_name === props.match.params.appName
//       );
//       const { app_name, test_cases, time_stamp } = application;
//       return (
//         <div>
//           <h1>
//             {app_name}
//           </h1>
//           <Subheader style={styles.subHeader}>Test Cases</Subheader>
//           {test_cases.map((test, index) => {
//             const { test_name, status } = test
//             let statusCheck = status ? (<i className="material-icons positive">done</i>) : (<i className="material-icons negative">clear</i>)
//             return (
//               <Paper key={test_name} style={styles.paper} zDepth={1}>
//                 <Link to={`/app/${app_name}/${test_name}`} className="parent">
//                   <div className="test">{index + 1}. {test_name}</div>
//                   {statusCheck}
//                 </Link>
//               </Paper>
//             )
//           })}

//           <hr />
//           <Route path="/app/:appName/:testName" render={(routeProps) => (<Test data={test_cases} {...routeProps} />)} />
//         </div>
//       );
//   }
// }

export default Application;