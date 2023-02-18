import React from 'react'
import './Profile.css'

const Profile = () => {
    return (
        <>
            <div className='container'>

                <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">

                    <div class="h-screen flex-grow-1">
                        <main class="py-6 bg-surface-secondary">
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
                                                                <span class="h4 d-block mb-0">Rahul Sharma</span>
                                                                <a href="#" class="text-sm font-semibold text-muted">View Profile</a>
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
                                        <form class="mb-3">
                                            <div class="row mb-5">
                                                <div class="col-md-6">
                                                    <div class="">
                                                        <label class="form-label" for="first_name">First name</label>
                                                        <input type="text" class="form-control" id="first_name" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="">
                                                        <label class="form-label" for="last_name">Last name</label>
                                                        <input type="text" class="form-control" id="last_name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row g-5">
                                                <div class="col-md-6">
                                                    <div class="">
                                                        <label class="form-label" for="email">Email</label>
                                                        <input type="email" class="form-control" id="email" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="">
                                                        <label class="form-label" for="phone_number">Phone number</label>
                                                        <input type="tel" class="form-control" id="phone_number" />
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="">
                                                        <label class="form-label" for="address">Address</label>
                                                        <input type="text" class="form-control" id="address" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="">
                                                        <label class="form-label" for="city">City</label>
                                                        <input type="text" class="form-control" id="city" />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="">
                                                        <label class="form-label" for="country">Country</label>
                                                        <select class="form-select" id="country" placeholder="Your email" aria-label="Default select example">
                                                            <option selected>Country</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="">
                                                        <label class="form-label" for="zip">ZIP</label>
                                                        <input type="tel" class="form-control" id="zip" />
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
