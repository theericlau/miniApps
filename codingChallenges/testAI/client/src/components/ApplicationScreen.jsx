import React, { Component } from 'react';
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
  console.log('in the scrren');
    return (
      <div>
        <GridList cellHeight={180} style={styles.gridList}>

          <Subheader style={styles.subHeader}>Applications</Subheader>
            {props.data.map((data, index) => {
              let { app_name } = data;
            return (
              <Link to={`/app/${app_name}`} key={app_name}>
                <GridTile title={app_name} style={styles.gridTile}>
                  <img src="http://localhost:5000/data/file1.png"/>
                </GridTile>
              </Link>
            )})}
        </GridList>

        <hr />
          <Route path="/app/:appName" render={(routeProps) => (<Application data={props.data} {...routeProps} />)} />
      </div>
    );
}

export default ApplicationScreen;