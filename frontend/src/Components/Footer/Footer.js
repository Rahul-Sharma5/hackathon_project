import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>

            <footer id="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-3 col-md-6 footer-contact">
                                <h3>Demo</h3>
                                <p>
                                    Sitla Colony, Bihar <br />
                                    India 800007 <br /><br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </p>
                            </div>

                            <div class="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Our Team</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <div class="social-links text-center text-md-right pt-3 pt-md-0">
                                    <a href="#" class="github me-2"><i class="fa-brands fa-github"></i></a>
                                    <a href="#" class="email me-2"><i class="fa-solid fa-envelope"></i></a>
                                    <a href="#" class="facebook me-2"><i class="fa-brands fa-facebook"></i></a>
                                    <a href="#" class="linkedin me-2"><i class="fa-brands fa-linkedin"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
