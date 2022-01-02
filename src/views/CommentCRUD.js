import React, { Component } from "react";
import {
    Container, Col, Row, Badge,
    Card, CardHeader, CardBody, Button, FormInput,
    FormTextarea,ListGroup, ListGroupItem
} from "shards-react";

import { firestore } from "../firebase";

const db = firestore.collection("lunchDB")

class CommentCRUD extends Component {
    state = {
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

    inputClick = () => {
        db.add(this.state)
    }

    render() {
        return (
            <Container fluid className="main-content-container px-4">
                <Row>
                    <ListGroup>
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Morbi leo risus</ListGroupItem>
                        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                </Row>
                <Row>
                    <FormInput type ="text" name="user" placeholder="사용자" value={this.state.user} onChange={this.handleNameChange}></FormInput>
                    <FormTextarea type="text" name="comment" placeholder="리뷰" value={this.state.comment} onChange={this.handleCommentChange}></FormTextarea>
                    <Button onClick={this.inputClick}>입 력</Button>
                </Row>

            </Container>

        );
    }
}

export default CommentCRUD;