import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../Footer/Footer';
import FourthPart from '../HomeContent/FourthPart';

import SecondPart from '../HomeContent/SecondPart';
import ThirdPart from '../HomeContent/ThirdPart';
import DronePictures from '../HomeContent/DronePictures'
import Faq from '../Faq/Faq'
import Team from '../HomeContent/Team'


import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Slider></Slider>
            <SecondPart></SecondPart>
            <FourthPart></FourthPart>
            <ThirdPart></ThirdPart>
            <DronePictures></DronePictures>
            <Team></Team>
            <Faq></Faq>
            <Footer></Footer>

        </div>
    );
};

export default Home;