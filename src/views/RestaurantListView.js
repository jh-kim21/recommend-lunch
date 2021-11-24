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

class RestaurantListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // First list of posts.
    };
  }

  render() {
    // const {
    //   PostsListOne,

    // } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="RestaurantList View" subtitle="점심 메뉴 추천" className="text-sm-left" />
        </Row>
      </Container>
    );
  }
}

export default RestaurantListView;
