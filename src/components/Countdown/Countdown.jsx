import React, { useState, useEffect } from 'react';
import './Countdown.css';

function Countdown() {

    const [hoi4Timer, setHoi4Timer] = useState('');
    const [cities2Timer, setCities2Timer] = useState('');

    const hoi4ReleaseDate = new Date(2023, 9, 10);
    const citiesSkyline2ReleaseDate = new Date(2023, 9, 24);

    function getTimeLeft(ms) {
        const days = Math.floor(ms / (24 * 60 * 60 * 1000));
        const hours = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
        const sec = Math.floor((ms % (60 * 1000)) / 1000);
        return `${days} Days, ${hours} Hours, ${minutes} Minutes, ${sec} Seconds`;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('This will run every second!');

            const currentDateTimeMs = new Date().getTime();

            setHoi4Timer(getTimeLeft(hoi4ReleaseDate.getTime() - currentDateTimeMs));
            setCities2Timer(getTimeLeft(citiesSkyline2ReleaseDate.getTime() - currentDateTimeMs));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='Section-Wrapper'>
            <div id='Countdown-Wrapper'>
                <h1>Games Countdown</h1>
                <h3>Days Until Max Plays HOI4:</h3>
                <h2>{hoi4Timer}</h2>
                <h3>Days Until Cities Skylines 2 Releases:</h3>
                <h2>{cities2Timer}</h2>
            </div>
        </div>
    );
};

export default Countdown;