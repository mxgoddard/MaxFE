import { Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import './SteamLibrary.css';

export default class SteamLibrary extends React.Component {

    state = {
        value: '',
        inputState: true,
        loadingState: false,
        username: '',
        steamId64: '',
        games: []
    }

    render() {

        // TODO - Save data to localstorage (cookie?) to not have to re-enter user
        // TODO - Render image at runtime
        // https://media.steampowered.com/steamcommunity/public/images/apps/{appId}/{imgLogoUrl}.jpg
        //
        // var a = `https://media.steampowered.com/steamcommunity/public/images/apps/${appId}/${imgLogoUrl}.jpg`

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        const { inputState, loadingState, games, steamId64, username } = this.state;

        if (inputState) {
            return (
                <>
                    <h2>Steam Library</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Enter Username (e.g. flayzian):
                            <br />
                            <input value={username} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </>
            )
        }
        else if (loadingState) {
            return (
                <>
                    <h2>Steam Library</h2>
                    <p>Username: {username}</p>
                    <p>SteamId64: {steamId64}</p>
                    <p>Loading...</p>
                </>
            )
        }
        else if (!loadingState && !inputState) {
            return (
                <div>
                    <h2>Steam Library</h2>
                    <p>Username: {username}</p>
                    <p>SteamId64: {steamId64}</p>
                    <h3>{games.length} Games listed</h3>
                    <div className='GamesContainer'> 
                    {games.map(function (game) {
                        return (
                            <div className='GameContainer'>
                                <img src={`https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.imgLogoUrl}.jpg`} />
                                <Typography>{game.name} - {Math.floor(game.playtimeForever / 60)} hours</Typography>                       
                            </div>
                        )
                    })}
                    </div>
                </div>
            )
        }
    }
    handleChange(e) {
        this.setState({ username: e.target.value });
    }

    handleSubmit(e) {
        this.setState({ inputState: false, loadingState: true });
        this.GetSteamLibrary();
        e.preventDefault();
    }

    async GetSteamLibrary() {
        // 76561198060059951
        const response = await axios.get(this.CreateUrl());

        console.log(response);

        this.setState({ loadingState: false, steamId64: response.data.steamId64, games: response.data.response.games })
    }

    CreateUrl() {
        // todo - read base url from config
        const baseUrl = 'https://localhost:5001/api/general';
        const route = 'get-steam-library';
        const username = 'flayzian';
        const orderByHours = true;
        const numGames = 20;

        var url = `${baseUrl}/${route}?Username=${username}`;

        if (orderByHours) {
            url = url + `&OrderByHours=true`;
        }

        if (numGames != null) {
            url = url + `&Count=${numGames}`;
        }

        return url;
    }
}