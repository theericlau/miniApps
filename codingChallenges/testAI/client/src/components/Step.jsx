import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Bar from './Bar.jsx';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  button: {
    margin: 5,
  },
  paper: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 30,
    textAlign: 'center',
  }
};


class Step extends Component {
  constructor(props){
    super(props);
    this.state = {
      pic: "",
      bar: "computer",
      current: ""
    }
  }

  componentDidMount() {
    axios.get(`/pic/${this.props.step.screenshot}`)
      .then(({ data }) => {
        this.setState({
          pic: data,
          current: this.props.match.params.testName
        })
      })
  }

  renderBar(bar){
    const { cpu, launch_times, memory, step_name } = this.props.step;
    if (bar === 'computer'){
    return (<Bar name="computer" data={cpu} />);
    } else if (bar === "launch") {
    return (<Bar name="launch" data={launch_times} />);
    } else if (bar === "memory") {
    return (<Bar name="memory" data={memory} />);
    }
  }

  handleBarChange(category){
    this.setState({
      bar: category
    })
  }

  renderPicture(){
    if (this.props.match.params.testName !== this.state.current) {
      axios.get(`/pic/${this.props.step.screenshot}`)
        .then(({ data }) => {
          this.setState({
            pic: data,
            current: this.props.match.params.testName
          })
        })
    }
  }

  render() {
    const { cpu, launch_times, memory, step_name } = this.props.step;
    return (
      <Paper style={style.paper} className="step" zDepth={3}>
        <div className="title">Step Name: {step_name}</div>
        <div className="split">
          {this.renderPicture()}
          <img className="testPic" src={this.state.pic}/>
          <div className="bar-container">
            {this.renderBar(this.state.bar)}
            <RaisedButton style={style.button} onClick={this.handleBarChange.bind(this, "computer")}>Computer Usage</RaisedButton>
            <RaisedButton style={style.button} onClick={this.handleBarChange.bind(this, "launch")}>Launch Time</RaisedButton>
            <RaisedButton style={style.button} onClick={this.handleBarChange.bind(this, "memory")}>Memory Usage</RaisedButton>
          </div>
        </div>
      </Paper>
    );
  }
}

export default Step;