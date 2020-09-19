import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoibmF2cmFzODgiLCJhIjoiY2tmNXU1emE3MHFzbDJ5bm82ZDJjZnQ4cSJ9.Y3wSyP78GmPNBV00ZKwktg";

class Map extends Component {
  state = {
    lng: 37.1903229,
    lat: 55.9889082,
    zoom: 13,
  };

  static map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div className="map__page">
        <div ref={this.mapContainer} className="mapContainer" />
      </div>
    );
  }
}

export default Map;
