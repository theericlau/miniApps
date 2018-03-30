import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Application from './Application.jsx';
import { Route, Link } from 'react-router-dom';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 300,
    height: 250,
    overflowY: 'auto',
  },
  subHeader: {
    fontSize: 20,
    fontFamily: 'Josefin Sans',
  },
  gridTile: {
    fontFamily: 'Josefin Sans'
  }
};

const ApplicationScreen = (props) => {
    return (
      <div>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
        <Subheader style={styles.subHeader}>Applications</Subheader>
        {props.data.map((data, index) => {
          let { app_name } = data;
        return (
          <Link to={`/app/${app_name}`} key={index}>
            <GridTile
              key={index}
              title={app_name}
              style={styles.gridTile}
            >
              <img src="http://localhost:5000/data/file1.png"/>
            </GridTile>
          </Link>
        )})}
        </GridList>
        <hr />
          <Route path="/app/:appName" render={(routeProps) => (<Application data={props.data} {...routeProps} />)} />
        {/* <Route path="/app/:appName" component={Application} /> */}


      </div>
    );
}

ApplicationScreen.propTypes = {

};

export default ApplicationScreen;

// {
//   props.data.map((data, index) => {
//     let { app_name } = data;
//     return (
//       <li key={index}>
//         <Link to={`/app/${app_name}`}>{app_name}</Link>
//       </li>)
//     {/* console.log('i get in here')
//           return <Application key={index} name={app_name} testCases={test_cases} testId={test_run_id} timeStamp={time_stamp} /> */}
//   })
// }