import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
  state = {
    label: [],
    data: []
  };
  render() {
    const weatherData = this.props;
    const chartData = weatherData.data.list.reduce((acc, tempData) => {
      const [, time] = tempData.dt_txt.split(" ");
      acc[time] = tempData.main.temp;
      return acc;
    }, {});

    const data = {
      labels: Object.keys(chartData),
      datasets: [
        {
          label: "My First weather-app",
          backgroundColor: "rgba(255,0,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: Object.values(chartData)
        }
      ]
    };
    return (
      <div>
        <Bar
          data={data}
          width={100}
          height={300}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}
export default Chart;
