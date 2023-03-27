import { Typography } from '@mui/material';
import React from 'react';
import Experience from '../Experience/Experience';
import Typewriter from '../Typewriter/Typewriter';
import { GeneralTestApiCall } from '../../helpers/NetworkHelper';
import './Home.css';

export default class Home extends React.Component {
    render() {
        return (
            <div>

                <div className='ContentWrapper'>
                    <div className='HeroSection'>
                        <div className='Introduction'>
                            <Typewriter text={"// Hi, I'm Max and I [d]build stuf[r] write code."} />
                        </div>

                    </div>

                    <Experience />
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.abc();
    }

    async abc() {
        await GeneralTestApiCall();
    }
}