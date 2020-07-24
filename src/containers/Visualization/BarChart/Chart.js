import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class ApexChart extends Component {
  state = {
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [],
      },
    },
    series: [],
  };

  componentDidMount = () => {
    this.setState({
      options: {
        ...this.state.options,
        xaxis: {
          ...this.state.options.xaxis,
          categories: this.props.categories,
        },
      },
      series: {
        ...this.state.series,
        series: this.props.series,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ height: "80vh", background: "white" }}>
          <Chart
            options={this.state.options}
            series={this.props.series}
            type="bar"
            width="100%"
            height="100%"
          />
        </div>
      </React.Fragment>
    );
  }
}
