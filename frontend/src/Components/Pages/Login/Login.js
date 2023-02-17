import React from 'react'
import './Login.css'

const Login = () => {
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
                                <form>
                                    <div class="mb-5">
                                        <label class="form-label" for="email">Email address</label>
                                        <input type="email" class="form-control" id="email" placeholder="Your email address" />
                                    </div>
                                    <div class="mb-5">
                                        <label class="form-label" for="password">Password</label>
                                        <input type="password" class="form-control" id="password" placeholder="Password" autocomplete="current-password" />
                                    </div>
                                    <div>
                                        <a href="#" class="btn btn-primary w-full">
                                            Sign in
                                        </a>
                                    </div>
                                </form>
                                <div class="my-3">
                                    <small>Don't have an account?</small>
                                    <a href="/signup" class="text-warning text-sm font-semibold"> Sign up</a>
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
