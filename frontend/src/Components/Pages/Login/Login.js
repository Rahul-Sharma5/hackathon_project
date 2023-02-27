import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

const Login = (/* { signUpMethod, forgetMethod } */) => {

    const navigate = useNavigate()
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signinUser = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })

        })
        const data = await response.json();
        const token = JSON.stringify(data.token)

        if (response.ok) {
            localStorage.setItem("auth", token.substring(1, token.length - 1))
            navigate('/')
            /* alert("success"); */
            /* toast.success('success', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }); */

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
                                        Welcome back!
                                    </h1>

                                </div>
                                <form onSubmit={signinUser} >
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
                                    <div className="mb-3">
                                        <a>
                                        <label style={{ cursor: "pointer" }} /* onClick={forgetMethod} */ className="form-label" for="password">Forgot password?</label>
                                        </a>
                                    </div>
                                    <div>
                                        <button class="btn btn-primary w-full">
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                                <div class="my-3">
                                    <small>Don't have an account?</small>
                                    <a href='/signup'/* onClick={() => signUpMethod()} */ class="text-warning text-sm font-semibold"> Sign up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
