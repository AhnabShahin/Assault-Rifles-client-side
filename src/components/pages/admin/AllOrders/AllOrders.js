import React, { useState, useEffect } from 'react';
import './AllOrders.css';
import axios from 'axios';
import { Container, Spinner } from 'react-bootstrap';

const AllOrders = (props) => {
    const [orders, setOrders] = useState();
    // const [selectedItem, setSelectedItem] = useState({});
    // useEffect(() => {
    //     const getOrders = async () => {
    //         await axios.get("https://assault-rifles-backend-api.herokuapp.com/orders")
    //             .then(res => {
    //                 setOrders(res.data);
    //             });
    //     };
    //     getOrders();
    // }, [])
    var value = '';
    const [massage, setMassage] = useState({});
    const [selectedItem, setSelectedItem] = useState({});

    useEffect(() => {
        const getOrders = async () => {
            await axios.get("https://assault-rifles-backend-api.herokuapp.com/orders")
                .then(res => {
                    setOrders(res.data);
                });
        };
        getOrders();
    }, [massage])
    const handleWantToDelete = (deleteItem) => {
        setSelectedItem(deleteItem);
    }
    const handleDeleteOrder = (orderId) => {
        async function deleteOrder() {
            await axios.delete(`https://assault-rifles-backend-api.herokuapp.com/delete-order/${orderId}`).then(res => {
                setMassage(res.data);
            });
        }
        deleteOrder();
    }
    const handleWantToStatusChange = (statusChangingItem) => {
        setSelectedItem(statusChangingItem);
    }
    const handleOnChangeStatus = (e) => {
        value = e.target.value;
    }
    const handleStatusChange = (orderId) => {
        async function updateStatus() {
            await axios.put(`https://assault-rifles-backend-api.herokuapp.com/update-order-status/${orderId}/${value}`).then(res => {
                setMassage(res.data);
            });
        }
        updateStatus();

    }
    // if (!orders) {
    //     return (
    //         <div className="d-flex my-5 justify-content-center">
    //             <Spinner animation="grow" variant="info" />
    //         </div>
    //     );
    // };

    return (
        <Container>
            <div className="packages-section-head">
                <h5 className="my-3">{massage?.massage}</h5>
            </div>
            {/* status modal */}
            <div className="modal statusModal fade " id="statusModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog  " role="document">
                    <div className="modal-content bg-color-main">
                        <div className="modal-header bgColorMain">
                            <h5 className="modal-title text-color-second" id="exampleModalLongTitle ">Are You sure Want To change statye!!</h5>
                            <div type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="cancel-x" aria-hidden="true">&times;</span>
                            </div>
                        </div>
                        <div className="modal-body bgColorMain">
                            <p className="text-white">Booking Name : {selectedItem?.displayName}</p>
                            <p className="text-white">Booking Email : {selectedItem?.email}</p>
                            <p className="text-white">Item Name : {selectedItem?.riflesName}</p>
                            <label htmlFor="status" className="text-color-second">Status : </label>

                            <select id="status" onChange={handleOnChangeStatus} className="mx-2">
                                <option value={selectedItem?.status}>{selectedItem?.status}</option>
                                <option value="pending">pending</option>
                                <option value="verifying">verifying</option>
                                <option value="Confirmed">Confirmed</option>
                            </select>
                        </div>
                        {selectedItem ?
                            <div className="modal-footer bgColorFourth">
                                <button type="button" className=" main-button" data-dismiss="modal">No</button>
                                <button type="button" className="main-button" data-dismiss="modal" onClick={() => { handleStatusChange(selectedItem._id) }}>Sure</button>
                            </div> : <></>}
                    </div>
                </div>
            </div>
            {/* status modal end */}

            {/* Delete confirmation Modal start */}
            <div className="modal fade " id="deleteModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog  " role="document">
                    <div className="modal-content bg-color-main">
                        <div className="modal-header bgColorMain">
                            <h5 className="modal-title text-color-second" id="exampleModalLongTitle ">Are You sure Want To Delete !!</h5>
                            <div type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="cancel-x" aria-hidden="true">&times;</span>
                            </div>
                        </div>
                        <div className="modal-body bgColorMain">
                            <p className="text-white">Name : {selectedItem?.displayName}</p>
                            <p className="text-white">Order On : {selectedItem?.orderOn}</p>
                            <p className="text-white">Email: {selectedItem?.email}</p>
                            <p className="text-color-second">Status : {selectedItem?.status}</p>
                        </div>
                        {selectedItem ?
                            <div className="modal-footer bgColorFourth">
                                <button type="button" className=" main-button" data-dismiss="modal">No</button>
                                <button type="button" className="main-button" data-dismiss="modal" onClick={() => { handleDeleteOrder(selectedItem._id) }}>Sure</button>
                            </div> : <></>}
                    </div>
                </div>
            </div>
            {/* Delete confirmation Modal end */}

            <table id="customers">
                <tbody>
                    <tr>
                        <th>No</th>
                        <th>Item name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                    {orders?.map((ele, index) => (
                        <tr key={ele?._id}>
                            <td>{index + 1}</td>
                            <td>{ele?.riflesName}</td>
                            <td>{ele?.email}</td>
                            <td>{ele?.price}</td>
                            <td>{ele?.orderOn}</td>
                            <td class="bg-secondary cursorPointer" data-toggle="modal" data-target="#statusModal" onClick={() => (handleWantToStatusChange(ele))} >{ele?.status} <i className="fas fa-edit text-color-second"></i></td>

                            <td class="bg-secondary cursorPointer" data-toggle="modal" data-target="#deleteModalCenter" onClick={() => (handleWantToDelete(ele))}>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
};

export default AllOrders;