import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import jeevan from '../../image/jeevan.png'

const Navbar = () => {
    const [checkLoginEvent, setLoginEvent] = useState(true);

    /*  UseNavigate  */
    const navigate = useNavigate();

    const signup = () => {
        navigate("/signup");
    }
    const signin = () => {
        navigate("/login");
    }
    const logout = () => {
        localStorage.clear();
        window.location = '/'
    }


    useEffect(() => {

        var token = localStorage.getItem("auth");
        if (token != null) {
            var decoded = jwt_decode(token);
            setLoginEvent(false);
        } else {
            navigate("/");

        }




    }, [])

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light px-0 py-3">
                <div class="container-xl">

                    <a class="navbar-brand" href="/">
                        <img src={jeevan} class="h-8" alt="logo" />
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarCollapse">

                        <div class="navbar-nav mx-lg-auto">
                            <a class="nav-item nav-link active" href="/" aria-current="page">Home</a>
                            {checkLoginEvent ? <></> : <>
                                <a class="nav-item nav-link" href="/profile">Profile</a>
                            </>}

                            <a class="nav-item nav-link" href="/contact">Contact</a>
                            <a class="nav-item nav-link" href="/faq">FAQ</a>
                        </div>

                        {checkLoginEvent ? <><div class="d-flex align-items-lg-center mt-1 mt-lg-0 px-1">
                            <button onClick={signin} class=" button is-danger is-light btn btn-sm btn-danger w-full w-lg-auto">
                                Login
                            </button>
                            {/* <button class="">Danger</button> */}
                        </div>

                            <div class="d-flex align-items-lg-center mt-1 mt-lg-0 px-1">
                                <button onClick={signup} class=" button is-primary  w-full w-lg-auto">
                                    Register
                                </button>
                            </div>
                        </> : <>



                            <div class="d-flex align-items-lg-center mt-1 mt-lg-0 px-1">
                                <button onClick={logout} class=" button is-danger is-light btn btn-sm btn-danger w-full w-lg-auto">
                                    Logout
                                </button>
                                {/* <button class="">Danger</button> */}
                            </div></>}



                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
