import React, { Component } from 'react';
// import ShowcaseButton from '../showcase-components/showcase-button';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas
} from 'react-vis';

export default class Bar extends Component {
  constructor(props){
    super(props);
    this.state = {
      useCanvas: false
    }
  }



  renderBars() {
    const { useCanvas } = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;

    if (this.props.name === "computer") {
      return this.props.data.map((data, index) => {
        return (
          <BarSeries
            key={index}
            className="vertical-bar-series-example"
            data={[
              { x: 'Computer (# cpu usage)', y: data },
            ]} />
        )
      })
    } if (this.props.name === "memory") {
      return this.props.data.map((data, index) => {
        return (
          <BarSeries
            key={index}
            className="vertical-bar-series-example"
            data={[
              { x: 'Memory (# RAM usage)', y: data },
            ]} />
        )
      })
    } if (this.props.name === "launch") {
      return this.props.data.map((data, index) => {
        return (
          <BarSeries
            key={index}
            className="vertical-bar-series-example"
            data={[
              { x: 'Launch Times (ms)', y: data },
            ]} />
        )
      })
    }

  }
  render() {
    console.log(this.props, 'barssss');
    const { useCanvas } = this.state;
    const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <div>

        {/* <ShowcaseButton
          onClick={() => this.setState({ useCanvas: !useCanvas })}
          buttonContent={content} /> */}
        <XYPlot
          xType="ordinal"
          width={300}
          height={300}
          xDistance={100}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          {this.renderBars()}
          {/* <BarSeries
            className="vertical-bar-series-example"
            data={[
              { x: 'A', y: 10 },
              { x: 'B', y: 5 },
              { x: 'C', y: 15 }
            ]} />
          <BarSeries
            data={[
              { x: 'A', y: 12 },
              { x: 'B', y: 2 },
              { x: 'C', y: 11 }
            ]} />
          <BarSeries
            data={[
              { x: 'A', y: 40 },
              { x: 'B', y: 20 },
              { x: 'C', y: 3 }
            ]} /> */}
        </XYPlot>
      </div>
    );
  }

};
