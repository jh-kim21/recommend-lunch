import React, { Component } from "react";
import Map from "../components/common/Map";
import PlaceAPI from '../utils/place';
import {
  Container, Col, Row, Badge,
  Card, CardHeader, CardBody, Button, CardFooter
} from "shards-react";



class DetailTopView extends Component {

  constructor(props){
    super(props);

  }

  render() {
    const {
      placeDetail
    } = this.props;

    return (
      <Container fluid className="main-content-container">
        <Row >
          <Card className="mb-4 col-lg-12 col-sm-12">
            <CardBody>
              <h3 style={{marginBottom:'1rem', color:'orange'}}>{placeDetail.name}</h3>
              { Object.keys(placeDetail).length !== 0 ? 
                <Map center={{ lat: placeDetail.geometry.location.lat, lng: placeDetail.geometry.location.lng}} />
                : ""
              }
            </CardBody>
            <CardFooter className="border-bottom">
              <Row className="m-0 d-flex flex-row-reverse" >
                {placeDetail.rating ?
                        <>
                          <Row>
                              <h6 style={{margin:'0px', flex:1, textAlign:'right'}}> 별점 {placeDetail.rating} </h6>
                          </Row>
                        </>
                      : ""}
              </Row>
            </CardFooter>
          </Card>
        </Row>
      </Container>
    );
  }
}

export default DetailTopView;