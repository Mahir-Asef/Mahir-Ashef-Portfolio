import React from 'react';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import MySkills from '../MySkills/MySkills';
import Projects from '../Projects/Projects';
import About from '../../About/About';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <About></About>
            <MySkills></MySkills>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;