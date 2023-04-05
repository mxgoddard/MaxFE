import React from 'react';
import Typography from '@mui/material/Typography';
import { ReactComponent as GraphIcon } from '../../../media/Graph_Icon.svg';
import './Offer.css';

export default class Offer extends React.Component {
    render() {
        return (
            <div className='Offer-Wrapper'>
                <Typography className='Purple-Subtitle'
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>// What I can offer</Typography>

                <Typography id='Experience-Title'
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', lineHeight: '1', marginTop: '2rem' }, maxWidth: '30vw' }}>Approaching each project intuitively</Typography>

                <div className='Offer-Box-Wrapper'>
                    <div className='Offer-Box'>
                        <GraphIcon />
                        <Typography id='Offer-Box-Figure'>Full-Stack Development</Typography>
                        <Typography id='Offer-Box-Figure-Desc'>With significant experience on multiple teams, I work with a hands-on technocratic approach. This ensures optimal execution and reduces the
                            burden for our client stakeholders</Typography>
                    </div>
                    <div className='Offer-Box'>
                        <GraphIcon />
                        <Typography id='Offer-Box-Figure'>Full-Stack Development</Typography>
                        <Typography id='Offer-Box-Figure-Desc'>With significant experience on multiple teams, I work with a hands-on technocratic approach. This ensures optimal execution and reduces the
                            burden for our client stakeholders</Typography>
                    </div>
                    <div className='Offer-Box'>
                        <GraphIcon />
                        <Typography id='Offer-Box-Figure'>Full-Stack Development</Typography>
                        <Typography id='Offer-Box-Figure-Desc'>With significant experience on multiple teams, I work with a hands-on technocratic approach. This ensures optimal execution and reduces the
                            burden for our client stakeholders</Typography>
                    </div>
                </div>
            </div>
        );
    }
}