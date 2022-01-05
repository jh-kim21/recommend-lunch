/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      isDrive: false,
      PostsListOne: [
        {
          backgroundImage: require("./../images/misoya2.jpg"),
          category: "일식",
          categoryTheme: "dark",
          author: "Anna Kunis",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "닉네임뭐로하지",
          body: "김치 돈까스가 맛있어요",
          date: "2021.12.08"
        }
      ],
      placeList: []
      // First list of posts.
    };

    this.ClickWalk = this.ClickWalk.bind(this);
    this.ClickDrive = this.ClickDrive.bind(this);
    this.SetTodayMenu = this.SetTodayMenu.bind(this);
    this.TransactionDetailView = this.TransactionDetailView.bind(this);
    this.TransactionRestaurantView = this.TransactionRestaurantView.bind(this);
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
    // window.location.href = "/detail"
  }
  TransactionRestaurantView() {
    this.setState(prevState => ({
    }));
    // window.location.href = "/list"
  }

  componentWillMount() {
    let placeApi = PlaceAPI.prototype;

    placeApi.nearbySearch(37.274988, 127.080416, 1500).then(function (response) {
      this.setState({ placeList: JSON.stringify(response.data.results) });
    }.bind(this));
  }

  render() {

    const {
      PostsListOne,
    } = this.state;

    const imageStyle = {
      height: "150px"
    }

    console.log(this.state.placeList)

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        {/* <Row noGutters className="page-header py-2">
          <PageTitle sm="4" title="점메추" subtitle="점심 메뉴 추천" className="text-sm-left" />
        </Row> */}

        <Row className="px-3 py-2">
          <h6 className="m-0">현재 위치 : 흥덕유타워</h6>
        </Row>

        <Row className="py-2">
          <Col lg="6" sm="6">
            <Button outline={this.state.isWalk} theme="info" className="mb-2 mr-1" onClick={this.ClickWalk}>
              도보(1km 이내)
            </Button>
            <Button outline={this.state.isDrive} theme="info" className="mb-2 mr-1" onClick={this.ClickDrive}>
              차량(1km 이상)
            </Button>
          </Col>
          <Col lg="6" sm="6" className="d-flex flex-row-reverse" >
            <Button theme="secondary" className="mb-2 mr-1" onClick={this.SetTodayMenu}>
              오늘의 메뉴는?
            </Button>
          </Col>
        </Row>

        <Row >
          <Card className="mb-4 col-lg-12 col-sm-12">
            <CardHeader className="border-bottom">
              <Row className="">
                <Col className="" >
                  <h3 className="m-0">오늘의 메뉴는 ? 미소야</h3>
                </Col>
              </Row>
              <Row className="m-0 d-flex flex-row-reverse" >
                <h6 >별점 3.4</h6>
              </Row>
            </CardHeader>
            <CardBody>
              <Map center={{lat:37.2764052, lng:127.0713297}}/>

              <Row className="mb-2 col-lg-12 col-sm-12 ">
                <img className="user-avatar" style={imageStyle} src={require("./../images/misoya.png")} />
                <Col className="ml-2 border" >
                  <Row className="m-1 border-bottom">
                    <h3 >미소야</h3>
                    <Col lg="12" sm="12" className="d-flex flex-row-reverse" >
                      <h6>별점 3.4</h6>
                    </Col>
                  </Row>
                  <h6 className="m-1">미소야는 2000년에 론칭한 일식을 판매하는 토종 브랜드로써 올해로 횟수로 21년째를 맞은 전통이 깊은 외식 브랜드 입니다. 돈카츠, 우동, 소바, 초밥 등의 다양한...</h6>
                </Col>
              </Row>


              {/* First Row of Posts */}
              <Row className="mb-2">
                {PostsListOne.map((post, idx) => (
                  <Col lg="4" md="6" sm="4" className="mb-2" key={idx}>
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
                        <p className="card-text d-inline-block mb-2">{post.body}</p>
                        <span className="text-muted px-1">{post.date}</span>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>

              <Row lg="6" sm="6" className="px-3 row-vh d-flex flex-column">
                {/* <Button theme="info" lg="6" sm="6" onClick={this.TransactionDetailView}>
                  더 보기 또는 자세히 보기
                </Button> */}
                <Link to="/detail" className="row-vh d-flex flex-column">
                  <Button theme="info" onClick={this.TransactionDetailView}>
                    더 보기 또는 자세히 보기
                  </Button>
                </Link>
              </Row>
            </CardBody>

          </Card>
        </Row>

        <Row lg="6" sm="6" className="d-flex flex-row-reverse">
          <Link to="/list">
            <Button outline theme="light" onClick={this.TransactionRestaurantView}>
              다른 식당 더보기 &gt;
            </Button>
          </Link>
        </Row>
      </Container>
    );
  }
}

export default MainView;
