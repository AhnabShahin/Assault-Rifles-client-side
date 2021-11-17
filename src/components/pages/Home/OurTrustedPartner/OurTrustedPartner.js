import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './OurTrustedPartner.css';

const OurTrustedPartner = () => {
    return (
        <div className="ourTrustedPartnerContainer">
            <Container>
                <div className="title-contain">
                    <h2>Our Trusted Partner</h2>
                    <p>All modern weaponts can appreciate our broad services akshay handge pharetra, eratd fermentum feugiat, gun are best velit mauris aks egestasut aliquam.</p>
                </div>
                <div className="trustedPartnerContainer mt-5">
                    <Row className="g-0">
                        <Col md={3}>
                            <div className="trustedPartnerCard">
                                <img src="https://i.ibb.co/JjptFhN/3.png" className="w-100 h-100" alt="" />
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="trustedPartnerCard">
                                <img src="https://i.ibb.co/mSXHJ4S/2.png" className="w-100 h-100" alt="" />
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="trustedPartnerCard">
                                <img src="https://i.ibb.co/JjptFhN/3.png" className="w-100 h-100" alt="" />
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="trustedPartnerCard">
                                <img src="https://i.ibb.co/CPnRZmd/7.png" className="w-100 h-100" alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default OurTrustedPartner;