import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useHistory } from 'react-router';
import './ReviewDetails.css';
import { AiFillStar } from 'react-icons/ai';



const ReviewDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const [singleReview, setSingleReview] = useState({});

    useEffect(() => {
        const getReview = async () => {
            await axios.get(`https://assault-rifles-backend-api.herokuapp.com/review-details/${id}`)
                .then(res => {
                    setSingleReview(res.data);
                });
        };
        getReview();
    }, [id]);
    return (
        <Container className="my-3 p-3">
            <Row className="g-3singleReviewContainer">
                <Col className="col-md-6">
                    <img className="w-100" src={singleReview?.image} />
                </Col>
                <Col className="col-md-6">
                    <div className="reviewText">
                        <h2 className="singleReviewHead">{singleReview?.reviewAbout}</h2>
                        <h5 className="singleReviewTitle">
                            {singleReview?.title}
                        </h5>
                        <p className="singleReviewDisciption">
                            {singleReview?.reviewDiscription}
                        </p>

                        <h4 className="cardPrice">Post On :
                            <span>{` ${singleReview?.addedOn}`}</span>
                        </h4>
                        <h4 className="cardPrice">Post By :
                            <span>{` ${singleReview?.addedBy}`}</span>
                        </h4>
                        <h4 className="cardPrice">
                            {Array.apply(null, { length: parseInt(singleReview?.rating) }).map(() => (
                                <AiFillStar></AiFillStar>
                            ))}
                        </h4>
                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default ReviewDetails;