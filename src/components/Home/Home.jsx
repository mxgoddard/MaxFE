import { Typography, Button } from '@mui/material';
import React from 'react';
import './Home.css';

function Home() {


    return (
        <div className='Home'>
            <video width="750" height="500" autoPlay muted loop>
                <source src={require('../../videos/HeroVideo.mp4')} type="video/mp4" />
                Your browser does not support the video tag. I suggest you upgrade your browser.
            </video>
            <div className='Home-Container'>
                <Typography variant="h6"
                    component="div"
                    id='Home-Whoami'
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>// Who Am I</Typography>

                <Typography variant="h6"
                    component="div"
                    id='Home-Job-Title'
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', maxWidth: '50vw', lineHeight: '1', marginTop: '2rem' } }}>Full-Stack Software Developer</Typography>

                <Typography variant="h6"
                    component="div"
                    id='Home-About-Description'
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', maxWidth: '50vw', marginTop: '2rem' } }}>
                    As a software developer with 5 years of experience, I am passionate about using my skills to create innovative solutions that solve complex problems.
                </Typography>

                <Button key={'Hero-Get-In-Touch'} id='Nav-Bar-Link-Login' sx={{ backgroundColor: '#141414', borderRadius: '100px', padding: '1rem 2rem', marginTop: '2rem' }}>
                    {'Get in touch →'}
                </Button>
            </div>
        </div>
    );
};

export default Home;