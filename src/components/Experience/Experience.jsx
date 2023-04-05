import React from 'react';
import Typography from '@mui/material/Typography';
import './Experience.css';

export default class Experience extends React.Component {

    render() {
        return (
            <div className='Experience-Wrapper'>
                <div className='Experience-Half'>
                    <Typography className='Purple-Subtitle'
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>// Measuring Success</Typography>

                    <Typography id='Experience-Title'
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', lineHeight: '1', marginTop: '2rem' } }}>A Sea of Experience</Typography>

                    <Typography id='Home-About-Description'
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', marginTop: '2rem' } }}>
                        As a software developer with 5 years of experience, I am passionate about using my skills to create innovative solutions that solve complex problems.
                    </Typography>
                </div>
                <div className='Experience-Half'>
                    <div className='Experience-Box'>
                        <Typography id='Experience-Box-Figure' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>5+</Typography>
                        <Typography id='Experience-Box-Figure-Desc' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>Years of experience</Typography>
                    </div>
                    <div className='Experience-Box'>
                        <Typography id='Experience-Box-Figure' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>20+</Typography>
                        <Typography id='Experience-Box-Figure-Desc' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>Projects worked on</Typography>
                    </div>
                    <div className='Experience-Box'>
                        <Typography id='Experience-Box-Figure' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>-10</Typography>
                        <Typography id='Experience-Box-Figure-Desc' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>Hand holding partners</Typography>
                    </div>
                    <div className='Experience-Box'>
                        <Typography id='Experience-Box-Figure' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>2,000+</Typography>
                        <Typography id='Experience-Box-Figure-Desc' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>Hours in DDLC</Typography>
                    </div>
                </div>

            </div>
        );
    };
};