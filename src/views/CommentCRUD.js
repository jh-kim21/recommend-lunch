import React, { Component } from "react";
import {
    Container, Col, Row, Badge,
    Card, CardHeader, CardBody, Button,
    FormTextarea,
  } from "shards-react";

  import { firestore } from "../firebase";

  

class CommentCRUD extends Component
{
    state = {
        comment: ''
    }

    handleChange = (e) => {
        this.setState({
          comment: e.target.value
        })
      }

    inputClick = () =>{
        
    }

    render()
    {
        return(
            <div>
                <FormTextarea type="text" name="comment" placeholder="리뷰" value={this.state.comment} onChange={this.handleChange}></FormTextarea>
                <Button onClick={this.inputClick}>입 력</Button>
            </div>
        );
    }
}

export default CommentCRUD;