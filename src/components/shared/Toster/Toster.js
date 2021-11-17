import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const Toster = (props) => {
    const {setShow,show,bodyMessage,titleMessage}=props;
    return (
             <ToastContainer style={{ zIndex: 99, }} position={'top-end'}>
                    <Toast style={{ backgroundColor: '#878244' }} onClose={() => setShow(false)} show={show} >
                        <Toast.Header closeButton={true}>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">{titleMessage}</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body><b>{bodyMessage}</b></Toast.Body>
                    </Toast>
                </ToastContainer>
    );
};

export default Toster;