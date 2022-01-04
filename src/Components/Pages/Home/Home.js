import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Slider from '../Slider/Slider';
import Team from '../HomeContent/Team';
import Footer from '../Footer/Footer';
// import DronePictures from '../HomeContent/DronePictures'
import Faq from './Faq/Faq'
import About from '../HomeContent/About';
import Services from '../HomeContent/Services';
import TechnologyDetails from '../HomeContent/TechnologyDetails';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Slider></Slider>
            <About></About>
            <TechnologyDetails></TechnologyDetails>
            <Services></Services>
            {/* <DronePictures></DronePictures> */}
            <Team></Team>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;