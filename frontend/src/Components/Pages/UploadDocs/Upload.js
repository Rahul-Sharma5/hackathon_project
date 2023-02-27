import React, { useState } from 'react'
import './Upload.css'
import axios from 'axios';
import jwt_decode from "jwt-decode";

const Upload = () => {

    const [aadhar, setaadhar] = useState('')
    const [pan, setpan] = useState('')
    const [photo, setphoto] = useState('')
    const [signature, setsignature] = useState('')
    const [certificate, setcertificate] = useState('')


    function uploadPhoto(event) {
        event.preventDefault()
        setphoto(event.target.files[0])
    }

    function uploadSignature(event) {
        event.preventDefault()
        setsignature(event.target.files[0])

    }

    function uploadCertificate(event) {
        event.preventDefault()
        setcertificate(event.target.files[0])

    }

    const submitDoc = async (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("aadhar", aadhar);
        formData.append("pan", pan);
        formData.append("photo", photo);
        formData.append("signature", signature);
        formData.append("certificate", certificate);



        const response = await axios({
            method: "post",
            url: "http://localhost:5000/docs/upload",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        });
        if (response['status'] == 200) {

            alert("Uploaded Successfully")

            const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const d = new Date();
            let monthname = month[d.getMonth()];

            var token = localStorage.getItem("auth");
            var decoded = jwt_decode(token);

            const response = await fetch('http://localhost:5000/uservalidate/validate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "email": decoded.email, "month": monthname, "year": new Date().getFullYear(), "certificate": "yes" })

            })

        }


    }


    return (
        <>

            <div className='empbg'>
                <div className='container'>
                    <div class="text-center mb-12">
                        <h1 class="ls-tight font-bolder h2">
                            Upload Certificate
                        </h1>
                        {/* <p>Upload Your digital Life certificate is hassle free and can be obtained through various Jeevan Pramaan Centres which are being operated by CSCs, Banks, Government offices or by using the client application on any PC/mobile/tablet.</p> */}
                    </div>
                    <section class="get-in-touch">
                        {/* <h1 class="title">Employee Form</h1> */}
                        <form onSubmit={submitDoc} class="contact-form row">
                            <div class="form-field col-lg-6">
                                <label class="form-label" for="formInputExample">Aadhar Number</label>
                                <input type="text" class="form-control" id="formInputExample" required placeholder="Your aadhar" value={aadhar} onChange={(e) => setaadhar(e.target.value)} />
                            </div>
                            <div class="form-field col-lg-6 ">
                                <label class="form-label" for="formInputExample">Pan Number</label>
                                <input type="text" class="form-control" id="formInputExample" required placeholder="Your pan" value={pan} onChange={(e) => setpan(e.target.value)} />
                            </div>
                            <div class="form-field col-lg-6 ">
                                <label class="form-label" for="input_file">Your Photo</label>
                                <input type="file" class="form-control" id="input_file" required placeholder="Your Photo" onChange={uploadPhoto} />
                            </div>
                            <div class="form-field col-lg-6 ">
                                <label class="form-label" for="input_file">Your Signature</label>
                                <input type="file" class="form-control" id="input_file" required placeholder="Your Signature" onChange={uploadSignature} />
                            </div>
                            <div class="form-field col-lg-6 ">
                                <label class="form-label" for="input_file">Life Certificate</label>
                                <input type="file" class="form-control" id="input_file" required placeholder="Your Certificate" onChange={uploadCertificate} />
                            </div>
                            {/*    <div class="form-field col-lg-12 mt-4">
                                <input class="submit-btn" type="submit" value="Submit" />
                            </div> */}
                            <div class="d-flex align-items-lg-center mt-3 mt-lg-0 px-3">
                                <button type='submit' value="Submit" class=" button is-primary  w-full w-lg-auto me-2">
                                    Submit
                                </button>
                                <button type='reset' value="reset" class=" button is-danger is-light  w-full w-lg-auto">
                                    Reset
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Upload
