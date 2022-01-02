import React from 'react';
import './Slider.css'
import { Carousel } from 'react-bootstrap';


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
                    <Carousel.Caption>
                        <h6>Look at the sunset, life is amazing, life is beautiful, life is what you make it. The key to success is to keep your head above </h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid"
                        src="https://cdn.shopify.com/s/files/1/0074/2126/3962/files/3_2048x.png?v=1563163285"
                        alt="Second slide"
                    // style={{ width: '300px' }}
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <img
                        className="img-fluid"
                        src="https://cdn.shopify.com/s/files/1/0074/2126/3962/files/1_2048x.png?v=1563163263"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h6>ENJOY DISCOUNT 10%</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;