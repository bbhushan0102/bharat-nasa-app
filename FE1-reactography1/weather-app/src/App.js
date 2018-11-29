import React, { Component } from "react";
import WeatherForcast from "./components/WeatherForcast";

import "./App.css";
import axios from "axios";

import Chart from "./components/Chart";
import SearchByCity from "./components/SearchByCity";

class App extends Component {
  state = {
    weather: [],
    city: ""
  };

  render() {
    return (
      <div className="App">
        <header>
          {this.state.weather.data && <SearchByCity getCity={this.getCity} />}
        </header>
        <main>
          {" "}
          {/* {this.state.weather.data && (
            <WeatherForcast weather={this.state.weather} />
          )} */}
        </main>
        <br />
        <br />
        <section>
          {this.state.weather.data && <Chart data={this.state.weather.data} />}
        </section>
      </div>
    );
  }
  getCity = text => {
    this.setState({
      city: text
    });
  };
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.city !== this.state.city) {
      this.fetchData(this.state.city);
    }
  }

  fetchData = (city = "Manchester") => {
    axios
      .get(
        ` https://api.openweathermap.org/data/2.5/forecast?q=${city},uk&units=metric&appid=a4030864b77280a6661c7bb314d73c76`
      )
      .then(data => {
        this.setState({
          weather: data
        });
      });
  };
}

export default App;
