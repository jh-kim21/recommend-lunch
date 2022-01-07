import React, { Component } from "react";
import Map from "../components/common/Map";
import PlaceAPI from '../utils/place';
import {
    Container, Col, Row, Badge,
    Card, CardHeader, CardBody, Button, CardFooter
  } from "shards-react";

  

class DetailTopView extends Component {
    render() {
        return (
            <Container fluid className="main-content-container">
            <Row >
             <Card className="mb-4 col-lg-12 col-sm-12">
               <CardBody>
               <h3>아비꼬</h3>
                 <Map zoom={16}/>           
               </CardBody>     
               <CardFooter className="border-bottom">
                 <Row className="m-0 d-flex flex-row-reverse" >
                     <h6 >별점 3.4</h6>
                 </Row>
               </CardFooter>       
             </Card>
           </Row>
         </Container>
        );
    }
}

export default DetailTopView;