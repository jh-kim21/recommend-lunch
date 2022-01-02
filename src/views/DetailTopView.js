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
            <Container fluid className="main-content-container px-4">
            <Row >
             <Card className="mb-4 col-lg-12 col-sm-12">
               <CardBody>
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