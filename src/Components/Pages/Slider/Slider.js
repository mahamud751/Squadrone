import React from 'react';
import './Slider.css'
import { Carousel } from 'react-bootstrap';
import { Typography } from '@mui/material';


const Slider = () => {
    return (
        <div className='home_slider'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="img-fluid"
                        src="https://cdn.shopify.com/s/files/1/0074/2126/3962/files/2_2048x.png?v=1563163275"
                        alt="Third slide"
                    />
                    <Carousel.Caption className='text-start' style={{
                        position: "absolute",
                        right: "24%",
                        bottom: "22%",
                        left: "48%",
                        paddingTop: "1.25rem",
                        paddingBottom: "1.25rem",
                        color: "#fff",
                        textAlign: "center"
                    }}>
                        <Typography variant='h6' className='text-dark'>
                            Look at the sunset, life is amazing, life is beautiful, life is what you make it. <span className='text-danger'>The key to success is to keep your head above</span>
                        </Typography>
                        {/* <div className='wave-effects '>
                            <img className='img-fluid' src="https://i.ibb.co/931vyXn/11-850x.png" alt="" style={{ width: "600px", height: "300px", }} />
                        </div> */}

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid"
                        src="https://cdn.shopify.com/s/files/1/0074/2126/3962/files/3_2048x.png?v=1563163285"
                        alt="Second slide"
                    // style={{ width: '300px' }}
                    />

                    <Carousel.Caption style={{
                        position: "absolute",
                        right: " 24%",
                        bottom: "22%",
                        left: "28%",
                        paddingTop: "1.25rem",
                        paddingBottom: "1.25rem",
                        color: "#fff",
                        textAlign: "center"
                    }}>
                        <Typography variant='v6' className='text-start'>
                            Look at the sunset, life is amazing, life is beautiful, life is what you make it.
                            <span className='text-danger'>The key to success is to keep your head above</span>
                        </Typography>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <img
                        className="img-fluid"
                        src="https://cdn.shopify.com/s/files/1/0074/2126/3962/files/1_2048x.png?v=1563163263"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='' style={{
                        position: "absolute",
                        right: " 24%",
                        bottom: "10%",
                        left: "28%",
                        paddingTop: "1.25rem",
                        paddingBottom: "1.25rem",
                        color: "#fff",
                        textAlign: "center"
                    }}>
                        <Typography variant='h4' className='text-dark'>ENJOY DISCOUNT 10%</Typography>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    );
};

export default Slider;