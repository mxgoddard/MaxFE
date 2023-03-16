import React from 'react';
import { Typography } from '@mui/material';
import axios from 'axios';
import './ValorantStats.css';

export default class ValorantStats extends React.Component {

    state = {
        loadingState: false,
        data: []
    }

    render() {

        const { loadingState, data } = this.state;

        if (loadingState) {
            return (
                <>
                    <h2>Valorant Stats</h2>
                </>
            )
        }
        else {
            return (
                <div className='StatsWrapper'>
                    <div className='ColumnsWrapper'>
                    {/* <h2>Valorant Stats</h2> */}
                    {data.map(function (player) {
                        return (
                            <div className='Column' key={player.username}>
                                <Typography>{player.username}</Typography>
                                {/* <Typography>{player.username} - {player.rank}</Typography>
                                {player.recentMatches.map(function (match) {
                                    return (
                                        <div>
                                            <Typography>{match.kills} - {match.deaths} - {match.assists}</Typography>
                                        </div>
                                    )
                                })} */}
                            </div>
                        )
                    })}
                    </div>
                </div>
            )
        }
    }

    componentDidMount() {
        this.GetValorantStats();
    }

    async GetValorantStats() {
        const url = 'https://localhost:5001/api/general/get-valorant-stats';
        const response = await axios.get(url);

        console.log(response.data);

        this.setState({ loadingState: false, data: response.data })
    }
}