import React from 'react';
import Welcome from './welcome/Welcome';
import Projects from './projects/Projects';
import About from './about/About';
import Contact from './contact/Contact';

const Home = () => {
    return (
        <>
            <Welcome/>
            <About/>
            <Projects/>
            <Contact/>
        </>
    );
};

export default Home;