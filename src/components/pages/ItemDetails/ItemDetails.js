import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useHistory } from 'react-router';
import './ItemDetails.css';

const ItemDetails = () => {
    const { id } = useParams();
    const history =useHistory();
    const [singleItem, setSingleItem] = useState({});

    useEffect(() => {
        const getItem = async () => {
            await axios.get(`https://assault-rifles-backend-api.herokuapp.com/item-details/${id}`)
                .then(res => {
                    setSingleItem(res.data);
                });
        };
        getItem();
    }, [id]);
    return (
        <Container>
            <Card>
                <Card.Img variant="top" className="cardImg" src={singleItem?.image} />
                <Card.Body>
                    <Card.Title className="cardTitle">{singleItem?.riflesName}</Card.Title>
                    <Card.Text className="cardDisciption">
                        {singleItem?.title}
                    </Card.Text>
                    <Card.Text className="cardDisciption">
                        {singleItem?.riflesDiscription}
                    </Card.Text>
                    <div className="row">
                        <Card.Text className="cardPrice col-sm-6 col-md-6 col-lg-3">Price :
                            <span>{` ${singleItem?.price}`}</span>
                        </Card.Text>
                        <Card.Text className="cardPrice col-sm-6 col-md-6 col-lg-3">Hit Damage :
                            <span>{` ${singleItem?.hitDamage}`}</span>
                        </Card.Text>
                        <Card.Text className="cardPrice col-sm-6 col-md-6 col-lg-3">Bullet Speed :
                            <span>{` ${singleItem?.bulletSpeed}`}</span>
                        </Card.Text>
                        <Card.Text className="cardPrice col-sm-6 col-md-6 col-lg-3">Hit Impact :
                            <span>{` ${singleItem?.hitImpact}`}</span>
                        </Card.Text>
                    </div>
                </Card.Body>
                <Card.Footer className="button-holder">
                    <button className="cart-left-button" onClick={() => (history.push(
                                        {
                                            pathname: '/order-form',
                                            state: {  // location state
                                              ele: singleItem, 
                                            }
                                          }
                                    ))}>Buy Now</button>
                    {/* <button className="cart-right-button">View details</button> */}
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default ItemDetails;