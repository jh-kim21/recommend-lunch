/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import PlaceAPI from "../utils/place";
import Discussions from "./../components/blog/Discussions";
import Reviews from "./../components/blog/Reviews";
import DetailTopView from "./DetailTopView";

class DetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // First list of posts.
      placeDetail : {}
    };
  }

  componentDidMount(){

    const { location,history } = this.props;
    if(location.state === undefined){
      return;
    }

    const placeId = location.state.placeId;
    console.log(placeId);

    let placeApi = PlaceAPI.prototype;

    placeApi.getPlaceDetail(placeId).then(function (response) {
      this.setState({placeDetail:response.data.result});
    }.bind(this));
  }

  render() {
    // const {
    //   PostsListOne,

    // } = this.state;

    console.log(this.state.placeDetail);

    var placeId = this.state.placeDetail.place_id;
    return (
      <Container fluid className="main-content-container">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
        </Row>
        <Row>
          <DetailTopView placeDetail={this.state.placeDetail}>
            
          </DetailTopView>
        </Row>
        <Row>
          {/* <Discussions title="리뷰"/> */}
          <Reviews title="리뷰" placeId={placeId} reviews={this.state.placeDetail.reviews}/>
        </Row>
      </Container>
    );
  }
}

export default DetailView;
