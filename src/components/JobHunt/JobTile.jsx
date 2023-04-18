import { Button, Typography } from '@mui/material';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function JobTile(props) {

    const { job, childToParent, index } = props;
    const { id, companyName, rating, payRangeLB, payRangeUB, industry, jobPostingLink } = job;

    const handleDragEnd = (event) => childToParent(event, job, index);

    return (
        <div
            className='Draggable'
            draggable
            onDragEnd={handleDragEnd}
        >
            <Typography id='Job-Hunt-Company-Name'
                sx={{ flexGrow: 1, display: { marginTop: '1rem' } }}>
                {companyName}
            </Typography>
            <Typography id='Home-About-Description'
                sx={{ flexGrow: 1 }}>
                {rating}/5
            </Typography>
            <Typography id='Home-About-Description'
                sx={{ flexGrow: 1 }}>
                £{payRangeLB}-£{payRangeUB}
            </Typography>
            <Typography id='Home-About-Description'
                sx={{ flexGrow: 1 }}>
                {industry}
            </Typography>

            {jobPostingLink.length > 0 &&
                <Link to={`/${jobPostingLink}`}>
                    <Button key={id} id='Job-Hunt-Link-Login' sx={{ backgroundColor: '#141414', borderRadius: '100px', padding: '1rem 2rem' }}>
                        {jobPostingLink} →
                    </Button>
                </Link>

            }
        </div>
    );
}

export default JobTile;