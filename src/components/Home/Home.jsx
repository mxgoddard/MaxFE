import { Typography, Button } from '@mui/material';
import React from 'react';
import Experience from '../Experience/Experience';
import Hero from './Hero/Hero';
import './Home.css';

function Home() {


    return (
        <div className='Home'>
            <Hero />
            {/* <Experience /> */}
        </div>
    );
};

export default Home;