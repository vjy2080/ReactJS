import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import CustomHook from './../hooks/customHook';

const EditUserData = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState(false);
    const [state, setState] = useState({username:"",password:"",email:""});
    const { handleChange, inp, errors,updatedData } = CustomHook(state, { usernameError: "" });
    useEffect(() => {
        getAllUsersDataByID()
    }, [])
    // let allUsersDataList = ""
    let handleUpdateBtnClick = async () => {
        console.log("called update",inp);
        const response = await axios.put(`http://localhost:5000/users/${id}`,inp)
        .then((response) => {
            if (response.status == 200) {
                console.log("server connected", response);
                setErrorMsg(false)
                navigate("/admin/allusers")
            } else {
                console.log("error while connecting to the server");
            }
        }).catch((error) => {
            console.log("inside catch", error);
            setErrorMsg(true)
            if (error.response) {
                console.log(error.response);
                console.log("server responded");
            } else if (error.request) {
                console.log("network error");
            } else {
                console.log(error);
            }
        });
    }
    let getAllUsersDataByID = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/users/${id}`)
                .then((response) => {
                    // console.log(response.data);
                    if (response.status == 200) {
                        console.log("server connected", response.data);
                        // setState(response.data)
                        updatedData(response.data)
                        // inp = response.data
                        setErrorMsg(false)
                    } else {
                        console.log("error while connecting to the server");
                    }
                }).catch((error) => {
                    console.log("inside catch", error);
                    setErrorMsg(true)
                    if (error.response) {
                        console.log(error.response);
                        console.log("server responded");
                    } else if (error.request) {
                        console.log("network error");
                    } else {
                        console.log(error);
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="proj-admin-card">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="row mt-3">
                                    <div className="col">

                                        {/* { errorMsg ? "true":JSON.stringify(inp) } */}
                                        <input type="text" className='form-control' placeholder='Enter User Name' value={inp.username} name="username" onChange={handleChange} id="username" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="password" className='form-control' placeholder='Enter Password' value={inp.password} name="password" onChange={handleChange} id="password" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="email" className='form-control' placeholder='Enter Email' value={inp.email} name="email" onChange={handleChange} id="email" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="button" className='btn btn-primary' value="Update" name="btn-update" onClick={handleUpdateBtnClick} id="btn-update" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditUserData;