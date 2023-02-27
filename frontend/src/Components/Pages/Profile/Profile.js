import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Profile.css'
import jwt_decode from "jwt-decode";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Navbar/Navbar';

const Profile = () => {
    const navigate = useNavigate();


    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [pensionType, setpensionType] = useState('');
    const [address, setaddress] = useState('');
    const [contact, setcontact] = useState('');
    const [gender, setgender] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [pincode, setpincode] = useState('');


    const getprofileDetails = async (id) => {

        const requestOptions = {
            method: 'GET',
            statusCode: 200,
            headers: {
                "origin": "*",
                "optionsSuccessStatus": 200,
            },
        };

        fetch(`http://localhost:5000/viewuser/${id}`, requestOptions)
            .then((res) => {

                if (res.ok) {
                    return res.json()
                }
                if (!res.ok) {
                    toast.error('Something went Wrong')
                }

            })
            .then((res) => {
                setname(res['result'].name)
                setemail(res['result'].email)
                setpensionType(res['result'].pensionType)
                setaddress(res['result'].address)
                setcontact(res['result'].contact)
                setaddress(res['result'].address)
                setgender(res['result'].gender)
                setcity(res['result'].city)
                setstate(res['result'].state)
                setpincode(res['result'].pincode)
                /* console.log(res) */
            }).catch((err) => {
                return Promise.reject({ Error: 'Something Went Wrong', err });
            })

    }

    useEffect(() => {

        var token = localStorage.getItem("auth");
        if (token != null) {

            var decode = jwt_decode(token);
            console.log(decode.id)
            getprofileDetails(decode.id);

        } else {
            toast.error('Not Authorised',
                { position: "top-center" })
            navigate('/')

        }

    }, [])


    const update = async (e) => {
        const token = localStorage.getItem('auth')
        var decoded = jwt_decode(token);
        var id = decoded.id;

        e.preventDefault()
        const requestOptions = {
            method: 'PATCH',
            statusCode: 200,
            headers: {
                "optionsSuccessStatus": 200,
                "Content-Type": "application/json"

            },
            body: JSON.stringify({ name, gender, address, contact, state, city, pincode })
        };

        /* console.log() */

        fetch(`http://localhost:5000/updateuser/${id}`, requestOptions)
            .then((res) => {

                if (res.ok) {
                    toast.success("Update Successful")
                }
                if (!res.ok) {
                    toast.error('Something went Wrong')
                }

            })
            .then((res) => {

            }).catch((err) => {
                return Promise.reject({ Error: 'Something Went Wrong', err });
            })
    }


    return (
        <>
            <Navbar />
            <div className='container'>

                <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">

                    <div class="h-screen flex-grow-1">
                        <main class="py-2 bg-surface-secondary">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-xl-7 mx-auto">
                                        {/* <!-- Profile picture --> */}
                                        <div class="card shadow-2 border-0 mt-4 mb-10">
                                            <div class="card-body">
                                                <div class="d-flex align-items-center">
                                                    <div>
                                                        <div class="d-flex align-items-center">
                                                            <a href="#" class="avatar avatar-lg bg-warning rounded-circle text-white">
                                                                <img alt="..." src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" />
                                                            </a>
                                                            <div class="ms-4">
                                                                <span class="h4 d-block mb-0">{name}</span>
                                                                {/* <a href="#" class="text-sm font-semibold text-muted">View Profile</a> */}
                                                                <p class="text-sm font-semibold text-muted">Pension Type : {pensionType}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ms-auto">
                                                        <button type="button" class="btn btn-sm btn-neutral">Upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*   <!-- Form --> */}
                                        <form onSubmit={update} class="mb-3">
                                            <div class="row mb-5">
                                                <div class="col-md-6">
                                                    <div class="">
                                                        <label class="form-label" for="first_name">Full name</label>
                                                        <input type="text" class="form-control" id="full name"
                                                            value={name} onChange={(e) => setname(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="">
                                                        <label class="form-label" for="email">Email</label>
                                                        <input type="email" class="form-control" id="email" disabled
                                                            value={email} onChange={(e) => setemail(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row g-5">
                                                <div class="col-md-6">
                                                    <div class="">
                                                        <label class="form-label" for="last_name">Gender</label>
                                                        <input type="text" class="form-control" id="gender"
                                                            value={gender} onChange={(e) => setgender(e.target.value)}
                                                        />
                                                    </div>

                                                </div>
                                                <div class="col-md-6">
                                                    <div class="">
                                                        <label class="form-label" for="phone_number">Phone number</label>
                                                        <input type="text" class="form-control" id="phone_number"
                                                            value={contact} onChange={(e) => setcontact(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="">
                                                        <label class="form-label" for="address">Address</label>
                                                        <input type="text" class="form-control" id="address"
                                                            value={address} onChange={(e) => setaddress(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="">
                                                        <label class="form-label" for="city">City</label>
                                                        <input type="text" class="form-control" id="city"
                                                            value={city} onChange={(e) => setcity(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="">
                                                        <label class="form-label" for="state">State</label>
                                                        <input type="text" class="form-control" id="state"
                                                            value={state} onChange={(e) => setstate(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="">
                                                        <label class="form-label" for="pincode">Pin code</label>
                                                        <input type="text" class="form-control" id="pincode"
                                                            value={pincode} onChange={(e) => setpincode(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="text-end mt-5">
                                                <button type="button" class="btn btn-sm btn-neutral me-2">Cancel</button>
                                                <button type="submit" class="btn btn-sm btn-primary">Save</button>
                                            </div>
                                        </form>

                                        {/*   <!-- Individual switch cards --> */}
                                        <div class="row g-6">
                                            <div class="col-md-12">
                                                <div class="card shadow-2 border-0">
                                                    <div class="card-body d-flex align-items-center">
                                                        <div class="h3">
                                                            <h3 class="text-danger mb-2">Deactivate account</h3>
                                                            <p class="text-sm text-muted">
                                                                Once you delete your account, there is no going back. Please be certain.
                                                            </p>
                                                        </div>
                                                        <div class="ms-auto">
                                                            <button type="button" class="btn btn-sm btn-danger">Deactivate</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

            </div >

        </>
    )
}

export default Profile
