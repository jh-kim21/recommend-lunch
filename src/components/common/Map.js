import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    // u-tower
    center: {
      lat: 37.274988,
      lng: 127.080416
    },
    zoom: 16
  };

  render() {

    let apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.274988}
            lng={127.080416}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;