import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.scss";
import { connect } from "react-redux";
import InfoBox from "./InfoBox";
import { paymentGetCardRequest } from "./redux/actions/actions";

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

  drawRoute = (map, coordinates) => {
    map.flyTo({
      center: coordinates[0],
      zoom: 15,
    });

    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates,
          },
        },
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#ffc617",
        "line-width": 8,
      },
    });
  };

  componentDidMount() {
    const { getPaymentInfo } = this.props;
    getPaymentInfo();
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
  }

  componentDidUpdate(prevProp) {
    if (!prevProp.routeList && this.props.routeList.length > 0) {
      if (this.map.getLayer("route")) {
        this.map.removeLayer("route");
        this.map.removeSource("route");
      }
      const map = this.map;
      this.drawRoute(map, this.props.routeList);
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div className="map__page">
        <InfoBox />
        <div
          ref={this.mapContainer}
          data-testid="Map"
          className="mapContainer"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    routeList: state.route,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPaymentInfo: (token) =>
      dispatch(
        paymentGetCardRequest({
          token,
        })
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
