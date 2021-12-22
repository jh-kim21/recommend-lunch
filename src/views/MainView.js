/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from "react";
import {
  Container, Col, Row, Badge,
  Card, CardHeader, CardBody, Button
} from "shards-react";

import Map from "../components/common/Map";
import PageTitle from "../components/common/PageTitle";
import PlaceAPI from '../utils/place';


class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWalk: true,
      isDrive : false,
      PostsListOne : [
        {
          backgroundImage: require("../images/content-management/1.jpeg"),
          category: "일식",
          categoryTheme: "dark",
          author: "Anna Kunis",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "미소야",
          body: "돈까스가 맛있어요",
          date: "2019.12.08"
        }
      ],
      placeList : []
      // First list of posts.
    };

    this.ClickWalk = this.ClickWalk.bind(this);
    this.ClickDrive = this.ClickDrive.bind(this);
    this.SetTodayMenu = this.SetTodayMenu.bind(this);
    this.TransactionDetailView = this.TransactionDetailView.bind(this);
  }

  ClickWalk() {
    this.setState(prevState => ({
      isWalk: !prevState.isWalk
    }));
  }
  ClickDrive() {
    this.setState(prevState => ({
      isDrive: !prevState.isDrive
    }));
  }
  SetTodayMenu() {
    this.setState(prevState => ({
    }));
  }
  TransactionDetailView() {
    this.setState(prevState => ({
    }));
    window.location.href = "/detail"
  }

  componentWillMount(){
    let placeApi = PlaceAPI.prototype;

    placeApi.nearbySearch(37.274988, 127.080416, 1500).then(function (response) {
      this.setState({placeList:JSON.stringify(response.data.results)});
    }.bind(this));
  }

  render() {

    const {
      PostsListOne,
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-2">
          <PageTitle sm="4" title="점메추" subtitle="점심 메뉴 추천" className="text-sm-left" />
        </Row>

        <Row className="px-3">
            <h6 className="m-0">현재 위치 : 흥덕유타워</h6>
        </Row>

        <Row className="py-3">
          <Col lg="0" className="col-sm-6">
            <Button outline={this.state.isWalk} theme="info" className="mb-2 mr-1" onClick={this.ClickWalk}>
              도보(1km 이내)
            </Button>
            <Button outline={this.state.isDrive} theme="info" className="mb-2 mr-1" onClick={this.ClickDrive}>
              차량(1km 이상)
            </Button>
          </Col>
          <Col lg="4" className="col-sm-6" >
            <Button theme="secondary" className="mb-2 mr-1" onClick={this.SetTodayMenu}>
              오늘의 메뉴는?
            </Button>
          </Col>
        </Row>

        <Row >
          <Card className="mb-0 col-sm-12">
            <CardHeader className="border-bottom">
              <h3 className="m-0
              ">오늘의 메뉴는 ? 미소야</h3>
              <h6 className="m-0">별점 3.4</h6>
            </CardHeader>
            <Map/>
          </Card>
        </Row>

        {/* First Row of Posts */}
        <Row>
          {PostsListOne.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by {post.author}
                    </a>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted px-1">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
            <Button outline theme="light" className="mb-2 mr-1" onClick={this.TransactionDetailView}>
              다른 식당 더보기 &gt;
            </Button>
        </Row>
      </Container>
    );
  }
}

export default MainView;
