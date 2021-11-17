import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from './../../../Hooks/useAuth';
import { useLocation } from 'react-router-dom';


const OrderForm = () => {
    const location = useLocation();
    const oderItem = location.state.ele

    const [massage, setMassage] = useState(null);
    const { user } = useAuth();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const event = new Date;
        data['orderOn'] = event.toLocaleDateString();
        data['status'] = 'pending';

        async function postOrder(data) {
            await axios.post('https://assault-rifles-backend-api.herokuapp.com/add-order', data).then(res => {
                setMassage(res.data);
            });
        }
        postOrder(data);
        reset();
    };
    return (
        <Container>
            {massage ?
                <h2 className="text-center my-5">{massage}</h2> :



                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row ">
                        <div className="form-group col-md-6 mx-auto my-3">
                            <label htmlFor="displayName">Your Name
                                {errors.displayName && <span className="text-danger">  This field is required</span>}
                            </label>
                            <input type="text" disabled className="form-control" id="displayName" value={user.displayName} {...register("displayName", { value: user.displayName }, { required: true, disabled: true })} placeholder="Enter your  name.." />
                        </div>
                        <div className="form-group col-md-6 mx-auto my-3">
                            <label htmlFor="email">Your email..
                                {errors.email && <span className="text-danger">  This field is required</span>}
                            </label>
                            <input type="email" disabled className="form-control" id="email" value={user.email} {...register("email", { value: user.email }, { required: true, disabled: true })} placeholder="Example : " />
                        </div>
                        <div className="form-group col-md-6 mx-auto my-3">
                            <label htmlFor="riflesName">Rifles Name
                                {errors.riflesName && <span className="text-danger">  This field is required</span>}
                            </label>
                            <input type="text" className="form-control" id="riflesName" disabled value={oderItem.riflesName} {...register("riflesName", { value: oderItem.riflesName }, { disabled: true })} placeholder="Example : " />
                        </div>
                        <div className="form-group col-md-6 mx-auto my-3">
                            <label htmlFor="price"> Price
                                {errors.price && <span className="text-danger">  This field is required</span>}
                            </label>
                            <input type="number" className="form-control" id="price" disabled value={oderItem.price} {...register("price", { value: oderItem.price }, { required: true })} />
                        </div>
                        <div className="form-group col-md-6 mx-auto my-3">
                            <label htmlFor="phoneNo">Phone Number ...
                                {errors.phoneNo && <span className="text-danger">  This field is required</span>}
                            </label>
                            <input type="number" className="form-control" id="phoneNo" {...register("phoneNo", { required: true })} placeholder="019...." />
                        </div>
                        <div className="form-group col-md-6 mx-auto my-3">
                            <label htmlFor="address">Address ...
                                {errors.address && <span className="text-danger">  This field is required</span>}
                            </label>
                            <textarea type="text" className="form-control" id="address" {...register("address", { required: true })} placeholder="Write your address.." ></textarea>
                        </div>
                    </div>
                    <div className="d-flex">
                        <button type="submit" className="main-button mx-auto my-3" >Confirm Order</button>
                    </div>
                </form>
            }
        </Container>
    );
};

export default OrderForm;