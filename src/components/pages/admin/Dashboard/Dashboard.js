import React from 'react';
import { Col, Row, Table, Container, Spinner } from 'react-bootstrap';
import './Dashboard.css';
import { RiFolderOpenFill } from 'react-icons/ri';
import { BiAddToQueue } from 'react-icons/bi';
import { ImUserPlus } from 'react-icons/im';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { useRouteMatch } from "react-router-dom";
import AllOrders from './../AllOrders/AllOrders';
import useAuth from './../../../../Hooks/useAuth';
import IndividualOrders from './../../customer/IndividualOrders/IndividualOrders';
import AddReview from './../../customer/AddReview/AddReview';


const AdminDashboard = () => {
    const { path, url } = useRouteMatch();
    const {user}=useAuth();
    if (!user.email) {
        return (
            <div className="d-flex my-5 justify-content-center">
                <Spinner animation="grow" variant="info" />
            </div>
        );
    };
    return (
        // <Router>
        <Container className="my-3">
            <Row>
                <Col md={3} >
                    <div className="slideBar">
                        <Link className="dashboardPage bgColorThird">
                            <span>Icon</span>
                            <span>Pages</span>
                        </Link>
                        <Link to={`${path}/add-new-review`} className="dashboardPage bgColorFourth">
                            <span>Add Review</span>
                            <BiAddToQueue />
                        </Link>
                        <Link to={`${path}/all-orders`} className="dashboardPage bgColorMain">
                            <span>My Orders</span>
                            <RiFolderOpenFill />
                        </Link>
                        <Link to={`${path}/payment-history`} className="dashboardPage bgColorFourth">
                            <span>Payment</span>
                            <BiAddToQueue />
                        </Link>
      
                    </div>
                </Col>
                <Col md={9} >
                    <Switch>
                        <Route exact path={path}>
                            <div className="mt-2">
                                <button className="main-button"><span>User Dashboard</span></button>
                            </div>
                        </Route>
                        <Route path={`${path}/all-orders`}>
                            <IndividualOrders email={user.email} ></IndividualOrders>
                        </Route>
                        <Route path={`${path}/add-new-review`}>
                            <AddReview></AddReview>
                        </Route>
                        <Route path={`${path}/payment-history`}>
                            <h2>Payment systerm is comming soon ...</h2>
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Container>
        // </Router>

    );
};


export default AdminDashboard;