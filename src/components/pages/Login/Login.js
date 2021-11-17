import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../../Hooks/useFirebase';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Container, Toast, ToastContainer } from 'react-bootstrap';
import useAuth from './../../../Hooks/useAuth';
import Toster from '../../shared/Toster/Toster';



const Login = () => {
    const [show, setShow] = useState(false);
    const { joinWithGoogle, setUser, user, signInWithEmailAndPassword, auth } = useAuth();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const history = useHistory();
    const location = useLocation();
    const redirect_URL = location.state?.from || '/'

    const loginWithGoogle = () => {
        joinWithGoogle()
            .then((res) => {
                history.push(redirect_URL);
            })
    }

    const onSubmit = data => {
        async function postPackageData(data) {
            await axios.post('https://assault-rifles-backend-api.herokuapp.com/login', data).then(res => {
                if (res.data.displayName) {
                    signInWithEmailAndPassword(auth, data.email, data.password)
                        .then((userCredential) => {
                            // Signed in 
                            setUser(userCredential.user);
                            history.push(redirect_URL);

                        })
                } else {
                    setShow(true)
                }
            });
        }
        postPackageData(data);
        reset();
    };

    return (
        <Container>
            {show === true ?
                <Toster show={show} bodyMessage={'You entered wrong credentials'} titleMessage={'Dear'} setShow={setShow} />
                : <></>
            }

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row ">
                    <div className="form-group col-md-6 mx-auto my-3">
                        <label htmlFor="email">Your email   {errors.email && <span className="text-danger">  This field is required</span>}</label>
                        <input type="email" className="form-control" id="email" {...register("email", { required: true })} placeholder="Enter your email.." />
                    </div>
                    <div className="form-group col-md-6 mx-auto my-3">
                        <label htmlFor="password">Password {errors.password && <span className="text-danger">  This field is required</span>}</label>
                        <input type="password" className="form-control" id="password" {...register("password", { required: true })} placeholder="password" />
                    </div>
                </div>
                <div className="d-flex">
                    <button type="submit" className="main-button mx-auto my-3" ><span>Login</span></button>
                </div>
            </form>
            <hr className="bgColorThird" />
             <h4 className="text-center">OR</h4>
            <div className="d-flex">
                <button type="submit" className="main-button mx-auto my-3" onClick={() => (history.push('/registration'))} ><span>Registration</span></button>
            </div>
            <hr className="bgColorThird" />
            <div className="d-flex justify-content-center m-3">
                <button className="main-button"><span onClick={loginWithGoogle}>Join With Google</span></button>
            </div>
        </Container>
    );
};

export default Login;