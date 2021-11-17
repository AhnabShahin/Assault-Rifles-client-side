import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isloading } = useAuth();
    if (isloading) {
        return (
            <div className="d-flex my-5 justify-content-center">
                <Spinner animation="grow" variant="info" />
            </div>
        );
    }
    return (
        <Route {...rest} render={({ location }) => (
            user.email ? children : <Redirect to={{
                pathname: "/login",
                state: { from: location }
            }}></Redirect>
        )}>
        </Route>
    );
};

export default PrivateRoute;