/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container, Col, Row, Badge,
  Card, CardHeader, CardBody, Button
} from "shards-react";

import Map from "../components/common/Map";
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
      resultPlace: {},
      center: {
        lat: 37.274988,
        lng: 127.080416
      },
      radius: 1000
      // First list of posts.
    };

    //this.GetRandomInt = this.GetRandomInt.bind(this);
    this.ClickWalk = this.ClickWalk.bind(this);
    this.ClickDrive = this.ClickDrive.bind(this);
    this.SetTodayMenu = this.SetTodayMenu.bind(this);
    this.TransactionDetailView = this.TransactionDetailView.bind(this);
    this.TransactionRestaurantView = this.TransactionRestaurantView.bind(this);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
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
    const {
      center,
      radius
    } = this.state

    let placeApi = PlaceAPI.prototype;

    placeApi.nearbySearch(center.lat, center.lng, radius).then(function (response) {

      let results = response.data.results;
      let randomValue = this.getRandomInt(0, results.length);

      this.setState({ resultPlace: results[randomValue] });
    }.bind(this));
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

  }

  render() {

    const {
      resultPlace,
      center
    } = this.state;

    const imageStyle = {
      height: "150px"
    }

    console.log(resultPlace)

    return (
      <Container fluid className="main-content-container">
        {/* Page Header */}
        {/* <Row noGutters className="page-header py-2">
          <PageTitle sm="4" title="점메추" subtitle="점심 메뉴 추천" className="text-sm-left" />
        </Row> */}

        <Row className="py-3 mb-3">
          <h5 style={{ fontWeight: 'bold' }} className="m-0">현재 위치 : 흥덕유타워</h5>
        </Row>

        <Row className="mb-3">
          <Col lg="6" sm="6">
            <Button outline={this.state.isWalk} theme="info" className="mr-3 mb-1" onClick={this.ClickWalk}>
              도보(1km 이내)
            </Button>
            <Button outline={this.state.isDrive} theme="info" className="mb-1" onClick={this.ClickDrive}>
              차량(1km 이상)
            </Button>
          </Col>
          <Col lg="6" sm="6" className="d-flex flex-row-reverse mb-1" >
            <Button theme="secondary" onClick={this.SetTodayMenu}>
              오늘의 메뉴는?
            </Button>
          </Col>
        </Row>

        <Row >
          <Card className="mb-4 col-lg-12 col-sm-12">
            {
              Object.keys(resultPlace).length !== 0 ?
                (
                  <>
                    <CardHeader className="border-bottom">

                      <Row className="">
                          <h5 className="m-0">오늘의 메뉴는 ? </h5>
                      </Row>
                      <Row className="mt-2">
                          <h3 style={{margin:'0px', color:'orange'}}>{resultPlace.name}</h3>
                      </Row>
                      {resultPlace.rating ?
                        <>
                          <Row>
                              <h6 style={{margin:'0px', flex:1, textAlign:'right'}}> 별점 {resultPlace.rating} </h6>
                          </Row>
                        </>
                      : ""}
                    </CardHeader>

                    <CardBody>
                      <Map center={{ lat: resultPlace.geometry.location.lat, lng: resultPlace.geometry.location.lng }} />

                      <Row className="mb-2 col-lg-12 col-sm-12" style={{padding:'0px', marginLeft:'0px'}}>
                        <img className="user-avatar" style={imageStyle} src={require("./../images/misoya.png")} />
                        <Col className="ml-2 border" >
                          {/* <Row className="m-1 border-bottom">
                            <h3 >{resultPlace.name}</h3>
                            <Col lg="12" sm="12" className="d-flex flex-row-reverse" >
                              <h6>별점 3.4</h6>
                            </Col>
                          </Row> */}
                          <h6 className="m-1">미소야는 2000년에 론칭한 일식을 판매하는 토종 브랜드로써 올해로 횟수로 21년째를 맞은 전통이 깊은 외식 브랜드 입니다. 돈카츠, 우동, 소바, 초밥 등의 다양한...</h6>
                        </Col>
                      </Row>


                      {/* First Row of Posts
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
              </Row> */}

                      <Row lg="6" sm="6" className="px-3 row-vh d-flex flex-column">
                        {/* <Button theme="info" lg="6" sm="6" onClick={this.TransactionDetailView}>
                  더 보기 또는 자세히 보기
                </Button> */}
                        <Link to={{pathname:"/detail", state:{placeId:resultPlace.place_id}}} className="row-vh d-flex flex-column">
                          <Button theme="info" onClick={this.TransactionDetailView}>
                            더 보기 또는 자세히 보기
                          </Button>
                        </Link>
                      </Row>
                    </CardBody>
                  </>
                )
                : 
                <>
                  <CardBody style={{minHeight:'60vh', textAlign:'center'}}>
                    <img style={{maxHeight:'40vh'}} src={require("./../images/eat.png")}/>
                    <h1 style={{fontSize:'4rem', color:'orange'}}>점심 메뉴 추천 !</h1>
                  </CardBody>
                </>
              }
          </Card>
        </Row>

        {/* <Row lg="6" sm="6" className="d-flex flex-row-reverse">
          <Link to="/list">
            <Button outline theme="light" onClick={this.TransactionRestaurantView}>
              다른 식당 더보기 &gt;
            </Button>
          </Link>
        </Row> */}
      </Container>
    );
  }
}

export default MainView;
