import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from './../../../../Hooks/useAuth';


const AddReview = () => {
    const {user}=useAuth();
    const [massage, setMassage] = useState('');
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const event = new Date;
        data['addedOn'] = event.toLocaleDateString();
        data['addedBy'] = user.email;
        console.log(data)
        async function postPackageData(data) {
            await axios.post('https://assault-rifles-backend-api.herokuapp.com/add-review', data).then(res => {
                setMassage(res.data);
            });
        }
        postPackageData(data);
        reset();
    };
    return (
        <div>
            <Container>
            {massage ?
                <div className="packages-section-head">
                    <h5 className="my-3">{massage}</h5>
                </div>:''}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row ">
                        <div className="form-group col-md-12 mx-auto mb-3">
                            <label htmlFor="reviewAbout">Rifles Name   {errors.reviewAbout && <span className="text-danger">  This field is required</span>}</label>
                            <input type="text" className="form-control" id="reviewAbout" {...register("reviewAbout", { required: true })} placeholder="Enter Rifles Name.." />
                        </div>
                        <div className="form-group col-md-12 mx-auto mb-3">
                            <label htmlFor="title">Title {errors.title && <span className="text-danger">  This field is required</span>} </label>
                            <input type="text" className="form-control" id="title" {...register("title", { required: true })} placeholder="Give a short title.." />
                        </div>
                        <div className="form-group col-md-12 mx-auto mb-3">
                            <label htmlFor="rating">Give rating {errors.rating && <span className="text-danger">Number should be 0-5</span>} </label>
                            <input type="number" className="form-control" id="rating" {...register("rating",{ min: 0, max: 5 }, { required: true })} placeholder="Give a rating 0-5" />
                        </div>
                        <div className="form-group col-md-12 mx-auto mb-3">
                            <label htmlFor="reviewDiscription">Review Discription {errors.reviewDiscription && <span className="text-danger">  This field is required</span>} </label>
                            <textarea type="text" rows="5" className="form-control" id="reviewDiscription" {...register("reviewDiscription", { required: true })} placeholder="Write brife discription .." ></textarea>
                        </div>
                        <div className="form-group col-md-12 mx-auto mb-3">
                            <label htmlFor="image">Image url {errors.image && <span className="text-danger">  This field is required</span>} </label>
                            <input type="text" className="form-control" id="image" {...register("image", { required: true })} placeholder="Example : bb.img/asdkads" />
                        </div>
                    </div>
                    <div className="d-flex">
                        <button type="submit" className="main-button mx-auto my-3" ><span>Post Review</span></button>
                    </div>
                </form> :

            </Container>
        </div>
    );
};

export default AddReview;