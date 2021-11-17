import React, { useState,useEffect } from 'react';
import axios from 'axios';

const AllUsers = () => {
    const [users, setAusers] = useState();
    useEffect(()=>{
        const getUsers = async () => {
            const role ={'role':'user'}
            await axios.post("https://assault-rifles-backend-api.herokuapp.com/users",role)
                .then(res => {
                    setAusers(res.data);
                    console.log(res.data)
                });
        };
        getUsers();
    },[])
    const handleWantToStatusChange = () => {

    }
    const handleWantToDelete = () => {

    }
    return (
        <div>
            <table id="customers">
                <tbody>
                    <tr>
                        <th>No</th>
                        <th>name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Delete</th>
                    </tr>
                    {users?.map((ele, index) => (
                        <tr key={ele?._id}>
                            <td>{index + 1}</td>
                            <td>{ele?.displayName}</td>
                            <td>{ele?.email}</td>
                            <td className="cursor-pointer" data-toggle="modal" data-target="#statusModal" onClick={() => (handleWantToStatusChange(ele))} >{ele?.role} <i className="fas fa-edit text-color-second"></i></td>

                            <td className="cursor-pointer" data-toggle="modal" data-target="#deleteModel" onClick={() => (handleWantToDelete(ele))}>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;