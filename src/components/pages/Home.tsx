import React from 'react';
import Welcome from './welcome/Welcome';
import Skils from './skils/Skils';
import Projects from './projects/Projects';

const Home = () => {
    return (
        <>
            <Welcome/>
            <Skils/>
            <Projects/>
        </>
    );
};

export default Home;