import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Slider from '../Slider/Slider';
import SecondPart from '../HomeContent/SecondPart';
import ThirdPart from '../HomeContent/ThirdPart';
import FourthPart from '../HomeContent/FourthPart';
import Team from '../HomeContent/Team';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Slider></Slider>
            <SecondPart></SecondPart>
            <FourthPart></FourthPart>
            <ThirdPart></ThirdPart>
            <Team></Team>
        </div>
    );
};

export default Home;