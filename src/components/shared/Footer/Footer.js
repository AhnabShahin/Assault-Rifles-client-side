import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GiArrowScope } from 'react-icons/gi';
import { AiFillClockCircle } from 'react-icons/ai';
import { IconContext } from "react-icons";

const Footer = () => {
    return (
        <div className="footerSection">
            <Container>
                <hr/>
                <Row className="g-4">
                    <Col md={6} lg={3} className="footerCenter">
                        <h2>Assault Rifles</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae</p>
                        <div className="d-flex align-items-center point text-center">
                            <HiLocationMarker style={{ color: "white", marginRight: "1rem" }} />
                            <span>Jl. Sunset Road No.815, Kuta</span>
                        </div>
                        <div className="d-flex align-items-center point">
                            <MdEmail style={{ color: "white", marginRight: "1rem" }} />
                            <span>support@domain.com</span>
                        </div>
                        <div className="d-flex align-items-center point">
                            <BsFillTelephoneFill style={{ color: "white", marginRight: "1rem" }} />
                            <span>(+62)81 5874 6545</span>
                        </div>
                    </Col>
                    <Col md={6} lg={3} className="footerCenter" >
                        <h4>Quick Links</h4>
                        <div className="d-flex align-items-center point">
                            <GiArrowScope style={{ color: "white", marginRight: "1rem" }} />
                            <a href>About Us</a>
                        </div>
                        <div className="d-flex align-items-center point">
                            <GiArrowScope style={{ color: "white", marginRight: "1rem" }} />
                            <a>Services</a>
                        </div>
                        <div className="d-flex align-items-center point">
                            <GiArrowScope style={{ color: "white", marginRight: "1rem" }} />
                            <a>Blogs</a>
                        </div>
                        <div className="d-flex align-items-center point">
                            <GiArrowScope style={{ color: "white", marginRight: "1rem" }} />
                            <a>Contact US</a>
                        </div>
                        <div className="d-flex align-items-center point">
                            <GiArrowScope style={{ color: "white", marginRight: "1rem" }} />
                            <a>Membership</a>
                        </div>
                    </Col>
                    <Col md={6} lg={3} className="footerCenter" >
                        <h4>Useful Links</h4>
                        <div className="d-flex align-items-center point">
                            <GiArrowScope style={{ color: "white", marginRight: "1rem" }} />
                            <a>Privaxy Policy</a>
                        </div>
                        <div className="d-flex align-items-center point">
                            <GiArrowScope style={{ color: "white", marginRight: "1rem" }} />
                            <a>Terms and Conditions</a>
                        </div>
                        <div className="d-flex align-items-center point">
                            <GiArrowScope style={{ color: "white", marginRight: "1rem" }} />
                            <a>Disclaimer</a>
                        </div>
                        <div className="d-flex align-items-center point">
                            <GiArrowScope style={{ color: "white", marginRight: "1rem" }} />
                            <a href>Support</a>
                        </div>
                        <div className="d-flex align-items-center point">
                            <GiArrowScope style={{ color: "white", marginRight: "1rem" }} />
                            <a href>FAQ</a>
                        </div>
                    </Col>
                    <Col md={6} lg={3} className="footerCenter" >
                        <h2>Working Hours</h2>
                        <div className="d-flex align-items-center point">
                            <AiFillClockCircle style={{ color: "white", marginRight: "1rem" }} />
                            <span>9AM - 5PM, Monday - Saturday</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae</p>
                        <button className="main-button">Join With Us</button>
                    </Col>
                </Row>
                <hr/>
                <div className="d-flex justify-content-between">
                    <p>Shooting Range & Gun Club Template Kit</p>
                    <p>Copyright © 2021. All rights reserved.</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;