import React, { useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const Messagesend = (e) => {
        e.preventDefault();
        const templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        emailjs.send('service_eb2yz48', 'template_ntq5pyj', templateParams, 'zhvzg-pslTtep9ybR')
            .then((response) => {
                toast.success('Successfully Send', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }, (err) => {
                toast.warn('failed', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });

    }


    return (
        <>
            <Navbar />
            <div className='container py-2'>
                <section id="contact" class="contact section-bg">
                    <div class="container">

                        <div class="section-title">
                            <h2>Contact</h2>
                        </div>

                        <div class="row">

                            <div class="col-lg-6">

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="info-box mt-4">
                                            <i class="fa-solid fa-location-dot"></i>
                                            <h3>Our Address</h3>
                                            <p>A108 Adam Street, Delhi Sector B , India 535022</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="info-box mt-4">
                                            <i class="fa-solid fa-envelope"></i>
                                            <h3>Email Us</h3>
                                            <p>info@example.com</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="info-box mt-4">
                                            <i class="fa-solid fa-phone"></i>
                                            <h3>Call Us</h3>
                                            <p>+1 5589 55488 55</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-6 mt-4 mt-lg-0">
                                <form onSubmit={Messagesend} method="post" role="form" class="php-email-form">
                                    <div class="row">
                                        <div class="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div class="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-group mt-3">
                                        <textarea class="form-control" name="message" rows="5" placeholder="Message" required
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <div class="my-3">
                                        <div class="loading">Loading</div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div class="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default Contact
