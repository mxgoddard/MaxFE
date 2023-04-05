import { Typography, Button } from '@mui/material';
import React from 'react';
import Experience from '../Experience/Experience';
import Hero from './Hero/Hero';
import './Home.css';
import Skills from './Skills/Skills';
import Offer from './Offer/Offer';

function Home() {


    return (
        <div className='Home'>
            <Hero />
            <Experience />
            <Skills />
            <Offer />
        </div>
    );
};

export default Home;