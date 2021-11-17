import React, { useState,useEffect } from 'react';
import './Items.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import bannerImg3 from '../../../../assets/images/banner3.png'
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';

const Items = () => {
    const [items, setItems] = useState([]);
    const history = useHistory();
    useEffect(() => {
        const getItems = async () => {
            await axios.get("https://assault-rifles-backend-api.herokuapp.com/items")
                .then(res => {
                    setItems(res.data);
                });
        };
        getItems();
    }, []);
    return (
        <div className="featureProductsSection">
            <Container>
                <div className="title-contain">
                    <h2>Our Products</h2>
                    <p>All modern weaponts can appreciate our broad services akshay handge pharetra, eratd fermentum feugiat, gun are best velit mauris aks egestasut aliquam.</p>
                </div>
                <Row className="mt-5 g-4">
                    {items.map(e => (
                        <Col key={e._id} md={4}>
                            <Card>
                                <Card.Img variant="top" src={e.image} />
                                <Card.Body>
                                    <Card.Title className="cardTitle">{e.riflesName}</Card.Title>
                                    <Card.Text className="cardDisciption">
                                        {e.title}
                                    </Card.Text>
                                    <Card.Text className="cardPrice">$
                                        <span>{e.price}</span>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="button-holder">
                                    <button className="cart-left-button" onClick={() => (history.push(
                                        {
                                            pathname: '/order-form',
                                            state: {  // location state
                                              ele: e, 
                                            }
                                          }
                                    ))}>Buy Now</button>
                                    <button className="cart-right-button" onClick={() => (history.push(`/item-details/${e._id}`))} > View details</button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div className="d-flex justify-content-center mt-5">
                    <button onClick={() => (history.push('/items'))} className="main-button"><span>Explore More</span></button>
                </div>
            </Container>
        </div>
    );
};

export default Items;