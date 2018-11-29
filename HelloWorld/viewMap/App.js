import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, View } from "react-native";

import MapView from "react-native-maps";

class LocationA extends Component {
  state = {
    latitude: 53,
    longitude: -2,
    current_lat: null,
    current_long: null,
    // altitude: null,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          // altitude: position.coords.altitude,
          error: null
        });
      },
      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    this.watchID = navigator.geolocation.watchPosition(position => {
      console.log(position);
      this.setState({
        current_lat: position.coords.latitude,
        current_long: position.coords.longitude
      });
    });
  }
  componentWillUnmount = () => {
    navigator.geolocation.clearWatch(this.watchID);
  };

  render() {
    console.log(this.state);
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 3,
          longitudeDelta: 3
        }}
        title={"Wally"}
      >
        {!!this.state.current_lat &&
          !!this.state.current_long && (
            <MapView.Marker
              styles={styles.radius}
              coordinate={
                {
                  latitude: this.state.current_lat,
                  longitude: this.state.current_long
                }
                // altitude: this.state.altitude
              }
              title={"Your Location"}
            />
          )}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderWidth: 10,
    borderRadius: 20
  },
  map: {
    height: 500
  }
});

export default LocationA;
