import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ icon }) => <div><img src={icon} style={{width:'30px'}}/></div>;

class Map extends Component {
  static defaultProps = {
    // u-tower
    center: {
      lat: 37.274988, 
      lng: 127.080416
    },
    zoom: 17
  };

  render() {

    let apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    let props = this.props;

    const image =
    "place.png";

    return (
      // Important! Always set the container height explicitly
      <div className="mb-2" style={{ height: '40vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey}}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          <AnyReactComponent
            lat={props.center.lat}
            lng={props.center.lng}
            icon={image}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;