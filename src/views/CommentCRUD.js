import React, { Component } from "react";
import {
    Container, Col, Row, Badge,
    Card, CardHeader, CardBody, Button, FormInput,
    FormTextarea,ListGroup, ListGroupItem
} from "shards-react";

import  { firestore } from "../firebase";

const db = firestore.collection("lunchDB")

class CommentCRUD extends Component {
    state = {
        comments:[],
        user:'',
        comment: ''
    }

    handleNameChange = (e) => {
        this.setState({
            user: e.target.value
        })
    }

    handleCommentChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }
    
    Read() {
        this.setState({ comments: [] });
        let comments = [];
        const snapshot = db.onSnapshot((snapshot) => {
            snapshot.forEach((item) => {
                let id = item.id;
                let data = item.data();
                comments.push({
                    id: id,
                    user: data.user,
                    comment: data.comment,
                });
            });
        });

        this.setState({
            comments: comments,
        });
    }

    Create = () => {
       let item = {
            user: this.state.user,
            comment: this.state.comment,
        }
        db.add(item);
    }

    Delete = (e) =>{
        console.log(e.target.value);
        db.doc(e.target.value).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    Update = (e) => {
        //TODO : 업데이트 개발 예정

    }


    componentDidMount(){
        this.Read();
    }

    render() {
        return (
            <Container fluid className="main-content-container px-4">
                <Row>
                    <ListGroup>
                        {this.state.comments.map(commentItem =>(
                            <Col>
                            <ListGroupItem type="text">{commentItem.comment}</ListGroupItem>
                            <Button>수 정</Button>
                            <Button  value={commentItem.id} onClick={this.Delete}>삭 제</Button>
                            </Col>
                        ))}
                        {/* <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Morbi leo risus</ListGroupItem>
                        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
                    </ListGroup>
                </Row>
                <Row>
                    <FormInput type ="text" name="user" placeholder="사용자" value={this.state.user} onChange={this.handleNameChange}></FormInput>
                    <FormTextarea type="text" name="comment" placeholder="리뷰" value={this.state.comment} onChange={this.handleCommentChange}></FormTextarea>
                    <Button onClick={this.Create}>입 력</Button>
                </Row>

            </Container>

        );
    }
}

export default CommentCRUD;