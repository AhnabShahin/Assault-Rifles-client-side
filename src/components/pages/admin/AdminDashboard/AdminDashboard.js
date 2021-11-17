import React from 'react';
import { Col, Row, Table, Container } from 'react-bootstrap';
import './AdminDashboard.css';
import { RiFolderOpenFill } from 'react-icons/ri';
import { BiAddToQueue } from 'react-icons/bi';
import { ImUserPlus } from 'react-icons/im';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { useRouteMatch } from "react-router-dom";
import AddNewItem from './../AddNewItem/AddNewItem';
import AllOrders from './../AllOrders/AllOrders';
import MakeAdmin from './../MakeAdmin/MakeAdmin';
import AllAdmins from './../AllAdmins/AllAdmins';
import AllUsers from './../AllUsers/AllUsers';

const AdminDashboard = () => {
    const { path, url } = useRouteMatch();
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
                        <Link to={`${path}/add-new-item`} className="dashboardPage bgColorFourth">
                            <span>Add New Item</span>
                            <BiAddToQueue />
                        </Link>
                        <Link to={`${path}/all-orders`} className="dashboardPage bgColorMain">
                            <span>See All Orders</span>
                            <RiFolderOpenFill />
                        </Link>
                        <Link to={`${path}/make-admin`}  className="dashboardPage bgColorFourth">
                            <span>Make An Admin</span>
                            <ImUserPlus />
                        </Link>
                        <Link to={`${path}/all-admins`}  className="dashboardPage bgColorMain">
                            <span>All Admin</span>
                            <RiFolderOpenFill />
                        </Link>
                        <Link to={`${path}/all-users`}  className="dashboardPage bgColorFourth">
                            <span>All Users</span>
                            <RiFolderOpenFill />
                        </Link>
                    </div>
                </Col>
                <Col md={9} >
                    <Switch>
                        <Route exact path={path}>
                            <div className="mt-2">
                                <button className="main-button"><span>Admin Dashboard</span></button>
                            </div>
                        </Route>
                        <Route path={`${path}/add-new-item`}>
                            <AddNewItem></AddNewItem>
                        </Route>
                        <Route path={`${path}/all-orders`}>
                            <AllOrders></AllOrders>
                        </Route>
                        <Route path={`${path}/make-admin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/all-admins`}>
                            <AllAdmins></AllAdmins>
                        </Route>
                        <Route path={`${path}/all-users`}>
                            <AllUsers></AllUsers>
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Container>
        // </Router>

    );
};


export default AdminDashboard;