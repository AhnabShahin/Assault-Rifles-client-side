import React, { useRef, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import axios from 'axios';
import Toster from '../../../shared/Toster/Toster';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const [show, setShow] = useState(false);
    const [massge, setMassge ]= useState('');
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

            async function getUserDetails(email) {
                await axios.post('https://assault-rifles-backend-api.herokuapp.com/make-admin', email).then(res => {
                    setMassge(res.data)
                });
            }
            getUserDetails(data);
            reset();
            setShow(true);
        }
    if(show === true && massge===''){
        return (
            <div className="d-flex my-5 justify-content-center">
                <Spinner animation="grow" variant="info" />
            </div>
        );
    }
    
    return (
        <Container>
            {show === true ?
                <Toster show={show} bodyMessage={massge} titleMessage={'Dear'} setShow={setShow} />
                : <></>
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* include validation with required or other standard HTML validation rules */}
                <label for="email" class="sr-only">Enter an registred user email..</label>
                <input type="email" class="form-control" id="email" placeholder="Exampla@exm.com" {...register("email", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.email && <span>This field is required</span>}

                <button type='submit' class="btn btn-secondary my-2" >Make</button>
            </form>
        </Container>
    );
}

export default MakeAdmin;