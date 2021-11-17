import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Container } from 'react-bootstrap';
import useAuth from './../../../Hooks/useAuth';
import Toster from '../../shared/Toster/Toster';



const Registration = () => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit, watch, reset, setError, formState: { errors } } = useForm();
    const { joinWithGoogle, createUserWithEmailAndPassword, auth, updateProfile, setUser } = useAuth();
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
        if (data.password === data.confirmPassword) {
            delete data.confirmPassword;
            async function postPackageData(data) {
                await axios.post('https://assault-rifles-backend-api.herokuapp.com/registration', data).then(res => {
                    createUserWithEmailAndPassword(auth, data.email, data.password)
                        .then((userCredential) => {
                            const newUser = { email: data.email, displayName: data.displayName, photoURL: data.photoURL }
                            setUser(newUser);
                            updateProfile(auth.currentUser, {
                                displayName: data.displayName,
                                photoURL: data.photoURL
                            });
                        })
                }).finally(history.push('/'));

            }
            postPackageData(data);
            reset();


        } else {
            setError("wrongPassword", {
                type: "manual",
                message: "Password didn't match"
            });
        }
    };

    // if(user){
    //     setShow(true);
    //     history.push('/');
    // }

    return (
        <Container>

            {show === true ?
                <Toster show={show} bodyMessage={'You successfully complited your registration'} titleMessage={'Dear'} setShow={setShow} />
                : <>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-row ">
                            <div className="form-group col-md-6 mx-auto my-3">
                                <label htmlFor="displayName">Your Name   {errors.displayName && <span className="text-danger">  This field is required</span>}</label>
                                <input type="displayName" className="form-control" id="displayName" {...register("displayName", { required: true })} placeholder="Enter your name.." />
                            </div>
                            <div className="form-group col-md-6 mx-auto my-3">
                                <label htmlFor="email">Your email   {errors.email && <span className="text-danger">  This field is required</span>}</label>
                                <input type="email" className="form-control" id="email" {...register("email", { required: true })} placeholder="Enter your email.." />
                            </div>
                            <div className="form-group col-md-6 mx-auto my-3">
                                <label htmlFor="password">Password {errors.password && <span className="text-danger">  This field is required</span>}</label>
                                <input type="password" className="form-control" id="password" {...register("password", { required: true })} placeholder="Password" />
                            </div>
                            <div className="form-group col-md-6 mx-auto my-3">
                                <label htmlFor="confirmPassword">Confirm Password
                                    {errors.confirmPassword && <span className="text-danger">  This field is required</span>}
                                    {errors.wrongPassword && <span className="text-danger"> {errors.wrongPassword.message}</span>}
                                </label>
                                <input type="password" className="form-control" id="confirmPassword" {...register("confirmPassword", { required: true })} placeholder="Confirm Password" />
                            </div>
                            <div className="form-group col-md-6 mx-auto my-3">
                                <label htmlFor="photoURL">Your Photo URL {errors.photoURL && <span className="text-danger">  This field is required</span>}</label>
                                <input type="photoURL" className="form-control" id="photoURL" {...register("photoURL", { required: true })} placeholder="http://bb.im/img" />
                            </div>
                        </div>
                        <div className="d-flex">
                            <button type="submit" className="main-button mx-auto my-3" ><span>Registration</span></button>
                        </div>
                    </form>
                    <hr className="bgColorThird" />
                    <h4 className="text-center">OR</h4>
                    <div className="d-flex">
                        <button type="submit" className="main-button mx-auto my-3" onClick={() => (history.push('/login'))} ><span>Login</span></button>
                    </div>
                    <hr className="bgColorThird" />
                    <div className="d-flex justify-content-center m-3">
                        <button className="main-button"><span onClick={loginWithGoogle}>Join With Google</span></button>
                    </div>
                </>
            }
        </Container>
    );
};

export default Registration;