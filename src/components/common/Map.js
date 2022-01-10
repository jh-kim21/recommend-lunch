import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ icon }) => <div><img src={icon} style={{width:'30px'}}/></div>;

class Map extends Component {

  constructor(props){
    super(props);
    this.state = {
      // u-tower
      center: {
        lat: 37.274988, 
        lng: 127.080416
      },
      zoom: 17,
    };
  }

  componentWillReceiveProps(props){
    this.setState({center : props.center});
  }

  componentDidMount(){
    this.setState({center : this.props.center});
  }

  render() {

    let apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    
    const {
      center,
      zoom
    } = this.state;

    const image =
    "place.png";
    
    return (
      <div className="mb-2" style={{ height: '40vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey}}
          center={center}
          zoom={zoom}
        >
          <AnyReactComponent
            lat={center.lat}
            lng={center.lng}
            icon={image}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;