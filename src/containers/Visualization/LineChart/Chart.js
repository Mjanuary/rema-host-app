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

  render() {
    return (
      <React.Fragment>
        <div style={{ height: "80vh", background: "white" }}>
          <Chart
            options={{
              chart: {
                id: "apexchart-example",
              },
              xaxis: {
                categories: this.props.categories,
              },
            }}
            series={this.props.series}
            type="line"
            width="100%"
            height="100%"
          />
        </div>
      </React.Fragment>
    );
  }
}
