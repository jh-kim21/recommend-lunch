/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
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
import DetailTopView from "./DetailTopView";

class DetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // First list of posts.
      placeDetail : {}
    };
  }

  componentDidMount(){
    let placeApi = PlaceAPI.prototype;

    placeApi.getPlaceDetail('ChIJr4nxJDtbezURGtp06t41HX8').then(function (response) {
      this.setState({placeDetail:response.data.result});
    }.bind(this));
  }

  render() {
    // const {
    //   PostsListOne,

    // } = this.state;

    console.log(this.state.placeDetail);

    return (
      <Container fluid className="main-content-container">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="오늘의 메뉴는?" subtitle="점심 메뉴 추천" className="text-sm-left" />
        </Row>
        <Row>
          <DetailTopView>
            
          </DetailTopView>
        </Row>
        <Row>
          <Discussions title="리뷰"/>
        </Row>
      </Container>
    );
  }
}

export default DetailView;
