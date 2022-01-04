import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faEnvelope, faMapMarkedAlt, faPhoneAlt, } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'
import ScrollToTop from "react-scroll-to-top";
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-bg'>
            <ScrollToTop smooth color="orange" top="200" />
            <Container>
                <Row>
                    <Col sm={12} md={4} data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <h4 className='footer-title'>CONTACT INFO</h4>
                        <div className='d-flex align-items-center mt-3'>
                            <FontAwesomeIcon className='icon' icon={faMapMarkedAlt} />
                            <div className='ms-4'>
                                <h6 className='contact-name'>ADDRESS</h6>
                                <p className='text'>123 Banani Road, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <hr style={{ border: "0.5px solid white", width: '75%' }} />
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon className='icon' icon={faPhoneAlt} />
                            <div className='ms-4'>
                                <h6 className='contact-name mt-2'>PHONE</h6>
                                <p className='text'>+880 1749497676</p>
                            </div>
                        </div>
                        <hr style={{ border: "0.5px solid white", width: '75%' }} />
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon className='icon' icon={faEnvelope} />
                            <div className='ms-4'>
                                <h6 className='contact-name mt-2'>EMAIL</h6>
                                <p className='text'>delwarjnu24@gmail.com</p>

                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4} data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <h4 className='footer-title mb-3'>ACCOUNT</h4>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> About Us</p>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> Contact us</p>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> My Account</p>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> Order History</p>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> Advanced Search</p>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> Terms & Conditions</p>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> Priacy & Policy</p>
                    </Col>
                    <Col sm={12} md={4} data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <h4 className='footer-title mb-3'>NEWSLETTER</h4>
                        <p className='text'>Get all the latest information on Events,
                            Sales and Offers. Sign up for newsletter today.</p>
                        <input type="text" name="email" id="footer-email" />
                        <button className='newsletter-button'>SUBSCRIBE</button>
                    </Col>
                </Row>
                <hr style={{ border: "0.1px solid white" }} />
                <Row className='py-3'>
                    <Col className='d-flex justify-content-between'>
                        <div>
                            <p className='text'>© Squadrone 2021. All Rights Reserved</p>
                        </div>
                        <div>
                            <FaFacebookSquare className='social-icon' />
                            <FaLinkedin className='social-icon' />
                            <FaTwitter className='social-icon' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;