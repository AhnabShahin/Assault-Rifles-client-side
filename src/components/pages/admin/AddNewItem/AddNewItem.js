import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from './../../../../Hooks/useAuth';


const AddNewItem = () => {
    const {user}=useAuth();
    const [massage, setMassage] = useState('');
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const event = new Date;
        data['addedOn'] = event.toLocaleDateString();
        data['addedBy'] = user.email;
        console.log(data)
        async function postPackageData(data) {
            await axios.post('https://assault-rifles-backend-api.herokuapp.com/add-item', data).then(res => {
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
                        <div className="form-group col-md-6 mx-auto my-3">
                            <label htmlFor="riflesName">Rifles Name   {errors.riflesName && <span className="text-danger">  This field is required</span>}</label>
                            <input type="text" className="form-control" id="riflesName" {...register("riflesName", { required: true })} placeholder="Enter Rifles Name.." />
                        </div>
                        <div className="form-group col-md-6 mx-auto my-3">
                            <label htmlFor="title">Title {errors.title && <span className="text-danger">  This field is required</span>} </label>
                            <input type="text" className="form-control" id="day" {...register("title", { required: true })} placeholder="Give a short title.." />
                        </div>
                        <div className="form-group col-md-6 mx-auto my-3">
                            <label htmlFor="riflesDiscription">Rifles Discription {errors.riflesDiscription && <span className="text-danger">  This field is required</span>} </label>
                            <textarea type="text" rows="5" className="form-control" id="riflesDiscription" {...register("riflesDiscription", { required: true })} placeholder="Write brife rifles discription .." ></textarea>
                        </div>
                        <div className="row mx-auto">
                            <div className="form-group col-6 col-md-3 my-3">
                                <label htmlFor="price">Price {errors.price && <span className="text-danger">Required</span>}</label>
                                <input type="number" className="form-control" id="price" {...register("price", { required: true })} placeholder="0" />
                            </div>
                            <div className="form-group col-6 col-md-3 my-3">
                                <label htmlFor="hitDamage">Hit Damage {errors.hitDamage && <span className="text-danger">Required</span>} </label>
                                <input type="number" className="form-control" id="hitDamage" {...register("hitDamage", { required: true })} placeholder="0" />
                            </div>
                            <div className="form-group col-6 col-md-3  my-3">
                                <label htmlFor="bulletSpeed">Bullet Speed{errors.bulletSpeed && <span className="text-danger">Required</span>} </label>
                                <input type="number" className="form-control" id="bulletSpeed" {...register("bulletSpeed", { required: true })} placeholder="0" />
                            </div>
                            <div className="form-group col-6 col-md-3 my-3">
                                <label htmlFor="hitImpact">Hit Impact{errors.hitImpact && <span className="text-danger">Required</span>} </label>
                                <input type="number" className="form-control" id="hitImpact" {...register("hitImpact", { required: true })} placeholder="0" />
                            </div>
                        </div>
                        <div className="form-group col-md-6 mx-auto my-3">
                            <label htmlFor="image">Image url {errors.image && <span className="text-danger">  This field is required</span>} </label>
                            <input type="text" className="form-control" id="image" {...register("image", { required: true })} placeholder="Example : bb.img/asdkads" />
                        </div>
                    </div>
                    <div className="d-flex">
                        <button type="submit" className="main-button mx-auto my-3" ><span>Add new Item</span></button>
                    </div>
                </form> :

            </Container>
        </div>
    );
};

export default AddNewItem;