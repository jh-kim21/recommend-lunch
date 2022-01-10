import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col
} from "shards-react";

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          // First list of posts.
            placeDetail : {},
            title: "Google Reviews",
        };
    }

    render() {
        const { placeId } = this.props;
        var reviews = this.props.reviews;
        // console.log(placeId);
        // console.log(reviews);

        // reviews && reviews.map((review)=>(
        //     console.log(review.text)
        // ));

        return (
            <Card small className="blog-comments col-sm-12">
                <CardHeader className="border-bottom">
                <h6 className="m-0">{this.state.title}</h6>
                </CardHeader>

                <CardBody className="p-0">

                    {reviews && reviews.map((review, idx) => (
                        <div key={idx++} className="blog-comments__item d-flex p-3">
                        {/* Avatar */}
                        <div className="blog-comments__avatar mr-3">
                            <img src={review.profile_photo_url}  />
                        </div>

                        {/* Content */}
                        <div className="blog-comments__content">
                            {/* Content :: Title */}
                            <div className="blog-comments__meta text-mutes">
                            <a className="text-secondary" href="#">
                                {review.author_name} 
                            </a>{" "}

                            <span className="text-mutes">- {review.relative_time_description}</span> 

                            </div>

                            {/* Content :: Body */}
                            <p className="m-0 my-1 mb-2 text-muted">{review.text}</p>

                            {/* Content :: Actions */}
                            <div className="blog-comments__actions">
                            <ButtonGroup size="sm">
                                <Button theme="white">
                                <span className="text-success">
                                    <i className="material-icons">check</i>
                                </span>{" "}
                                Approve
                                </Button>
                                <Button theme="white">
                                <span className="text-danger">
                                    <i className="material-icons">clear</i>
                                </span>{" "}
                                Reject
                                </Button>
                                <Button theme="white">
                                <span className="text-light">
                                    <i className="material-icons">more_vert</i>
                                </span>{" "}
                                Edit
                                </Button>
                            </ButtonGroup>
                            </div>
                        </div>
                        </div>
                    ))}
                </CardBody>

                <CardFooter className="border-top">
                <Row>
                    <Col className="text-center view-report">
                    <Button className="btn btn-info" type="submit">
                        View All Comments
                    </Button>
                    </Col>
                </Row>
                </CardFooter>
            </Card>
        );
    }
}

export default Reviews;