import React, { useState } from 'react'
import './Signup.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pensionType, setPensionType] = useState("");

    const signupUser = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, pensionType })

        })

        if (response.ok) {
            /* alert("success"); */
            toast.success('User Registered Successfully', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }

        if (!response.ok) {
            toast.warn('failed', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }


    return (
        <>
            <div class="px-5 py-3 p-lg-0">
                <div class="d-flex justify-content-center">
                    <div class="col-12 col-md-9 col-lg-7 min-h-lg-screen d-flex flex-column justify-content-center py-lg-16 px-lg-20 position-relative">
                        <div class="row">
                            <div class="col-lg-10 col-md-9 col-xl-7 mx-auto">
                                <div class="text-center mb-12">
                                    <span class="d-inline-block d-lg-block h1 mb-lg-6 me-3">👋</span>
                                    <h1 class="ls-tight font-bolder h2">
                                        Create Your Account
                                    </h1>

                                </div>
                                <form onSubmit={signupUser}>
                                    <div>

                                        <label class="form-label" for="country">Pension Type</label><br />
                                        <div class="form-check form-check-inline ">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" required id="inlineRadio1" value="Family pension" onChange={(e) => setPensionType(e.target.value)} />
                                            <label class="form-check-label" for="inlineRadio1">Family pension</label>
                                        </div>

                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Pension for self" onChange={(e) => setPensionType(e.target.value)} />
                                            <label class="form-check-label" for="inlineRadio2">Pension for self</label>
                                        </div>

                                    </div>
                                    <div class="mb-5">
                                        <label class="form-label" for="name">Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="Enter Full Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div class="mb-5">
                                        <label class="form-label" for="email">Email address</label>
                                        <input type="email" class="form-control" id="email" placeholder="Your email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div class="mb-5">
                                        <label class="form-label" for="password">Password</label>
                                        <input type="password" class="form-control" id="password" placeholder="Password" autocomplete="current-password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}

                                        />
                                    </div>
                                    <div>
                                        <button class="btn btn-primary w-full">
                                            Sign up
                                        </button>
                                    </div>
                                </form>
                                <div class="my-3">
                                    <small>have an account?</small>
                                    <a href='/login'/* onClick={() => showLogin()} */ class="text-warning text-sm font-semibold"> Signin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
