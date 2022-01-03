import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../Footer/Footer';
import FourthPart from '../HomeContent/FourthPart';

import SecondPart from '../HomeContent/SecondPart';
import ThirdPart from '../HomeContent/ThirdPart';

import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h1 className="animate__animated animate__bounce">An animated element</h1>
            <Slider></Slider>
            <h1 className="animate__animated animate__slideInDown animate__slideInLeft animate__slideInRight animate__slideInUp">An animated element</h1>
            <SecondPart></SecondPart>
            <FourthPart></FourthPart>
            <ThirdPart></ThirdPart>
            <Footer></Footer>

        </div>
    );
};

export default Home;