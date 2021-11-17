import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import React, { useState } from 'react';
import NavSection from './components/shared/NavSection/NavSection';
import Banner from './components/pages/Home/Banner/Banner';
import FeatureProducts from './components/pages/Home/FeatureProducts/FeatureProducts';
import Reviews from './components/pages/Home/Reviews/Reviews';
import Footer from './components/shared/Footer/Footer';
import Dashboard from './components/pages/admin/Dashboard/Dashboard';
import Login from './components/pages/Login/Login';
import ItemDetails from './components/pages/ItemDetails/ItemDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Registration from './components/pages/Registration/Registration';
import useAuth from './Hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import AdminDashboard from './components/pages/admin/AdminDashboard/AdminDashboard';
import axios from "axios";
import Items from './components/pages/Home/Items/Items';
import OrderForm from './components/pages/OrderForm/OrderForm';
import ReviewDetails from './components/pages/Home/ReviewDetails/ReviewDetails';
import AllReviews from './components/pages/AllReviews/AllReviews';
import OurTrustedPartner from './components/pages/Home/OurTrustedPartner/OurTrustedPartner';
import NotFound from "./components/pages/NotFound/NotFound";


const Main = () => {
    const { user, isloading, setIsloading } = useAuth();
    const [isAdmin, setIsAdmin] = useState(null);
    if (user.email) {
        setIsloading(true)
        async function getUserDetails(email) {
            await axios.post('https://assault-rifles-backend-api.herokuapp.com/user-details', email).then(res => {
                if (res.data.role === 'admin') {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
        }
        getUserDetails({ email: user.email });
        if (isAdmin !== null && user.email) {
            setIsloading(false);
        }
    }
    if (isloading) {
        return (
            <div className="d-flex my-5 justify-content-center">
                <Spinner animation="grow" variant="info" />
            </div>
        );
    };
    return (
        <Router>
            <NavSection />
            <Switch>
                <Route exact path="/">
                    <Banner></Banner>
                    <FeatureProducts></FeatureProducts>
                    <Reviews></Reviews>
                    <OurTrustedPartner></OurTrustedPartner>
                </Route>
                <Route exact path="/home">
                    <Banner></Banner>
                    <FeatureProducts></FeatureProducts>
                    <Reviews></Reviews>
                    <OurTrustedPartner></OurTrustedPartner>
                </Route>
                <PrivateRoute exact path="/items">
                    <Items></Items>
                </PrivateRoute>
                <PrivateRoute exact path="/reviews">
                    <AllReviews></AllReviews>
                </PrivateRoute>
                <PrivateRoute path="/item-details/:id">
                    <ItemDetails></ItemDetails>
                </PrivateRoute>
                <PrivateRoute path="/review-details/:id">
                    <ReviewDetails></ReviewDetails>
                </PrivateRoute>
                <PrivateRoute path="/order-form">
                    <OrderForm></OrderForm>
                </PrivateRoute>

                {user.email ?
                    <>
                        <PrivateRoute path="/dashboard">
                            {isAdmin ?
                                <AdminDashboard></AdminDashboard>
                                :
                                <Dashboard></Dashboard>
                            }
                        </PrivateRoute>
                        <Route exact={true} path='*'>
                            <NotFound></NotFound>
                        </Route>
                    </>
                    :
                    <>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/registration">
                            <Registration />
                        </Route>
                        <Route exact={true} path='*'>
                            <NotFound></NotFound>
                        </Route>
                    </>
                }

            </Switch>
            <Footer></Footer>
        </Router>
    );
};

export default Main;