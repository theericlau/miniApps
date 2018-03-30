import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Bar from './Bar.jsx';

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
    // console.log(this.props, 'willmount')
    axios.get(`/pic/${this.props.step.screenshot}`)
      .then(({ data }) => {
        // console.log('i get data back', data);
        this.setState({
          pic: data,
          current: this.props.match.params.testName
        })
      })
  }

  // componentWillUpdate(){
  //   // console.log('willupdate', this.state);
  //   // axios.get(`/pic/${this.props.step.screenshot}`)
  //   // .then(({data}) => {
  //   //   console.log('i get data back', data);
  //   //   this.setState({
  //   //     pic: data
  //   //   })
  //   // })
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log('didupdate', this.state);
  //   // console.log('prev', prevProps, 'prevState', prevState);
  //   // if (this.state.pic)

  //   // axios.get(`/pic/${this.props.step.screenshot}`)
  //   //   .then(({ data }) => {
  //   //     console.log('i get data back', data);
  //   //     this.setState({
  //   //       pic: data
  //   //     })
  //   //   })
  // }

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

  handleBarChange(e){
    this.setState({
      bar: e.target.value
    })
  }

  renderPicture(){
    if (this.props.match.params.testName !== this.state.current) {
      axios.get(`/pic/${this.props.step.screenshot}`)
        .then(({ data }) => {
          // console.log('i get data back', data);
          this.setState({
            pic: data,
            current: this.props.match.params.testName
          })
        })
    }
  }


  render() {
    console.log(this.props);
    const { cpu, launch_times, memory, step_name } = this.props.step;
    return (
      <div>
        {step_name}
        {this.renderPicture()}
        <img src={this.state.pic}/>
        {this.renderBar(this.state.bar)}
        <button value="computer" onClick={this.handleBarChange.bind(this)}>Computer Usage</button>
        <button value="launch" onClick={this.handleBarChange.bind(this)}>Launch Time</button>
        <button value="memory" onClick={this.handleBarChange.bind(this)}>Memory Usage</button>


        {/* <button onClick> */}
        {/* <div className="computerTable">{cpu}</div>
        <div className="computerTable">{launch_times}</div>
        <div className="computerTable">{memory}</div> */}
      </div>
    );
  }
}

Step.propTypes = {

};

export default Step;