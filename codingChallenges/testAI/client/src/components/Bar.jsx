import React, { Component } from 'react';
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
    const { useCanvas } = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <div>
        <XYPlot
          xType="ordinal"
          margin={{ left: 70 }}
          width={300}
          height={300}
          xDistance={100}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          {this.renderBars()}
        </XYPlot>
      </div>
    );
  }

};
