import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import FourthPart from '../HomeContent/FourthPart';

import SecondPart from '../HomeContent/SecondPart';
import ThirdPart from '../HomeContent/ThirdPart';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Slider></Slider>
            <SecondPart></SecondPart>
            <FourthPart></FourthPart>
            <ThirdPart></ThirdPart>
        </div>
    );
};

export default Home;