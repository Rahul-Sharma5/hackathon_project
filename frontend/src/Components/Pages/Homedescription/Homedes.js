import React from 'react'
import './Homedes.css'
/* import phone from '../../../image/phone.png' */

const Homedes = () => {
    return (
        <>
            <div className='container'>
                <section id="about" class="about">
                    <div class="container">

                        <div class="row content">
                            <div class="col-lg-6">
                                <h2>Welcome to Jeevan Pramaan. Digital Life Certificate for Pensioners</h2>
                                {/*  <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3> */}
                            </div>
                            <div class="col-lg-6 pt-4 pt-lg-0">
                                <p>
                                    Jeevan Pramaan is a biometric enabled digital service for pensioners. Pensioners of Central Government, State Government or any other Government organization can take benefit of this facility.
                                    More than One Crore families in India can be classified as pensioner families, where the pension disbursed by the various government bodies forms the basis for their income and sustainability.
                                </p>

                                <ul>
                                    <li><i class="fa-sharp fa-solid fa-check-double mt-3"></i> One of the major requisite for the pensioners post their retirement from service, is to provide life certificates to the authorized pension disbursing agencies like Banks,Post offices etc.
                                    </li>
                                    <li><i class="fa-sharp fa-solid fa-check-double mt-3"></i> One of the major requisite for the pensioners post their retirement from service, is to provide life certificates to the authorized pension disbursing agencies like Banks,Post offices etc.
                                    </li>
                                </ul>
                                <p class="fst-italic">
                                    There are about Fifty Lakh pensioners of the Central Government and a similar number of the various State and UT Governments and various other government agencies. This includes pensioners from the various public sector enterprises. In addition to this Army and Defence Personnel drawing pension exceeds Twenty-five lakhs.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="aboutmore" class="aboutmore">
                    <div class="section_heading text-center">
                        <h2 className='h2'>Download Application</h2>
                    </div>
                    <div class="container mb-5">
                        <div class="row">

                            <div class="col-lg-4 mt-4 mt-lg-0">
                                <div class="box">
                                    <span>01</span>
                                    <h4>Client Installation Document</h4>
                                    <p>System Requirements for windows8/10/11 (32/64 bit) <br />
                                        1. Microsoft .Net Framework version 4 - Full (or) Higher <br />
                                        2. Microsoft Visual C++ 2010 Re distributable Package for Windows machine.</p>
                                </div>
                            </div>

                            <div class="col-lg-4 mt-4 mt-lg-0">
                                <div class="box">
                                    <span>02</span>
                                    <h4>Service & Drivers</h4>
                                    <p>System Requirements for windows8/10/11 (32/64 bit) <br />
                                        1. Microsoft .Net Framework version 4 - Full (or) Higher <br />
                                        2. Microsoft Visual C++ 2010 Re distributable Package for Windows machine.</p>
                                </div>
                            </div>

                            <div class="col-lg-4 mt-4 mt-lg-0">
                                <div class="box">
                                    <span>03</span>
                                    <h4>User-Manual</h4>
                                    <p>System Requirements for windows8/10/11 (32/64 bit) <br />
                                        1. Microsoft .Net Framework version 4 - Full (or) Higher <br />
                                        2. Microsoft Visual C++ 2010 Re distributable Package for Windows machine.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section class="timeline_area section_padding_130 mb-5">
                    <div class="container mt-5">
                        <div class="row justify-content-center">
                            <div class="h1 col-12 col-sm-8 col-lg-6 mt-7 text-bold">

                                <div class="section_heading text-center">
                                    <h1>How it Works</h1>
                                    <p className="lead mb-2">
                                        A successful authentication generates the Digital Life Certificate which gets stored in the Life Certificate Repository.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">

                                <div class="apland-timeline-area">

                                    <div class="single-timeline-area">
                                        <div class="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: "visible", animationDdelay: "0.1s", animationName: "fadeInLeft" }}>
                                            <p>Login User</p>
                                        </div>
                                        <div class="row">
                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: "visible", animationDdelay: "0.3s", animationName: "fadeInLeft" }}>
                                                    <div class="timeline-icon"><i class="fa fa-address-card" aria-hidden="true"></i></div>
                                                    <div class="timeline-text">
                                                        <h6>User Authentication</h6>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{ visibility: "visible", animationDdelay: "0.5s", animationName: "fadeInLeft" }}>
                                                    <div class="timeline-icon"><i class="fa fa-archive" aria-hidden="true"></i></div>
                                                    <div class="timeline-text">
                                                        <h6>Upload Documents</h6>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.7s" style={{ visibility: "visible", animationDdelay: "0.7s", animationName: "fadeInLeft" }}>
                                                    <div class="timeline-icon"><i class="fa fa-address-book" aria-hidden="true"></i></div>
                                                    <div class="timeline-text">
                                                        <h6>Submit Form</h6>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="single-timeline-area">
                                        <div class="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style={{ visibility: "visible", animationDdelay: "0.1s", animationName: "fadeInLeft" }}>
                                            <p>Data Base</p>
                                        </div>
                                        <div class="row">
                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style={{ visibility: "visible", animationDdelay: "0.3s", animationName: "fadeInLeft" }}>
                                                    <div class="timeline-icon"><i class="fa fa-briefcase" aria-hidden="true"></i></div>
                                                    <div class="timeline-text">
                                                        <h6>Store Your Data</h6>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-4">
                                                <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style={{ visibility: "visible", animationDdelay: "0.5s", animationName: "fadeInLeft" }}>
                                                    <div class="timeline-icon"><i class="fa fa-desktop" aria-hidden="true"></i></div>
                                                    <div class="timeline-text">
                                                        <h6>Account Security</h6>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}

export default Homedes
