import React from 'react'
import './Service.css'

const Service = () => {
 
  return (
    <>

      <div className='container'>
        <div class="text-center mb-12">
          <h1 class="ls-tight font-bolder h2">
            Locate a centre
          </h1>
          <p>Find the nearest location of a Jeevan Pramaan Centre</p>

        </div>
        <div className='mb-5 mt-7'>
          <h3 className='h3 font-weight-bold'>Search By : Location</h3>
        </div>
        <section class="">
          <form class="row">

            <div class="col-lg-12">
              <select class="form-select" aria-label="Default select example">
                <option selected>- Select Location Type</option>
                <option value="1">Citizen Service Center</option>
                <option value="2">Government offices</option>
                <option value="3">Jammu and Kashmir Center</option>
              </select>
            </div>
            <div class=" col-lg-6 mt-3">
              <select class="form-select" aria-label="Default select example">
                <option selected>- Select State</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-lg-6 mt-3">
              <select class="form-select" aria-label="Default select example">
                <option selected>- Select District</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-lg-12 mt-3">
              <div class="mb-5">
                <input type="text" class="form-control" id="name" placeholder="Branch Name" />
              </div>
            </div>
          </form>
        </section>


        <div className='mb-5 mt-7'>
          <h3 className='h3 font-weight-bold'>How to use the Locator?</h3>
          <p class="font-weight-light mt-3">
            The Jeevan Pramaan Locator works by searching a location based
            on the the Location Type, State, District or either by keying in your Pincode.
          </p>
        </div>
      </div>
    </>
  )
}

export default Service
