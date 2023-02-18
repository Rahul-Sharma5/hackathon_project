import React from 'react'
import './Upload.css'

const Upload = () => {
    return (
        <>

            <div className='empbg'>
                <div className='container'>
                    <section class="get-in-touch">
                        {/* <h1 class="title">Employee Form</h1> */}
                        <form /* onSubmit={addEmp} */ class="contact-form row">
                            <div class="form-field col-lg-6">
                                <label class="form-label" for="formInputExample">Aadhar Number</label>
                                <input type="text" class="form-control" id="formInputExample" placeholder="Your aadhar" />
                            </div>
                            <div class="form-field col-lg-6 ">
                                <label class="form-label" for="formInputExample">Pan Number</label>
                                <input type="text" class="form-control" id="formInputExample" placeholder="Your pan" />
                            </div>
                            <div class="form-field col-lg-6 ">
                                <label class="form-label" for="input_file">Your Photo</label>
                                <input type="file" class="form-control" id="input_file" placeholder="Your Photo" />
                            </div>
                            <div class="form-field col-lg-6 ">
                                <label class="form-label" for="input_file">Your Signature</label>
                                <input type="file" class="form-control" id="input_file" placeholder="Your Signature" />
                            </div>
                            <div class="form-field col-lg-6 ">
                                <label class="form-label" for="input_file">Life Certificate</label>
                                <input type="file" class="form-control" id="input_file" placeholder="Your Certificate" />
                            </div>
                         {/*    <div class="form-field col-lg-12 mt-4">
                                <input class="submit-btn" type="submit" value="Submit" />
                            </div> */}
                            <div class="d-flex align-items-lg-center mt-3 mt-lg-0 px-3">
                                <a type='submit' value="Submit" class=" button is-primary  w-full w-lg-auto">
                                    Submit
                                </a>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Upload
