import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light px-0 py-3">
                <div class="container-xl">

                    <a class="navbar-brand" href="/">
                        <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" class="h-8" alt="logo" />
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarCollapse">

                        <div class="navbar-nav mx-lg-auto">
                            <a class="nav-item nav-link active" href="/" aria-current="page">Home</a>
                            <a class="nav-item nav-link" href="/profile">Profile</a>
                            <a class="nav-item nav-link" href="/contact">Contact</a>
                            <a class="nav-item nav-link" href="/faq">FAQ</a>
                        </div>

                       

                        <div class="d-flex align-items-lg-center mt-1 mt-lg-0 px-1">
                            <a href="/login" class=" button is-danger is-light btn btn-sm btn-danger w-full w-lg-auto">
                                Login
                            </a>
                            {/* <button class="">Danger</button> */}
                        </div>

                        <div class="d-flex align-items-lg-center mt-1 mt-lg-0 px-1">
                            <a href="/signup" class=" button is-primary  w-full w-lg-auto">
                                Register
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
