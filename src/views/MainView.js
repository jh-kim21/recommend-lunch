/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
} from "shards-react";

import Map from "../components/common/Map";
import PageTitle from "../components/common/PageTitle";
import PlaceAPI from '../utils/place';

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // First list of posts.
    };
  }

  render() {

    let placeApi = PlaceAPI.prototype;
    //placeApi.nearbySearch(37.274988, 127.080416, 1500);
    placeApi.getPlaceDetail('ChIJr4nxJDtbezURGtp06t41HX8');

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="점메추" subtitle="점심 메뉴 추천" className="text-sm-left" />
        </Row>

        <Row>
          <Map/>
        </Row>
      </Container>
    );
  }
}

export default MainView;
