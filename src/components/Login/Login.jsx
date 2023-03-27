import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import './Login.css';
import { LoginA } from '../../helpers/NetworkHelper';
import { UserContext } from '../../UserContext';
import { IsEmptyObject } from '../../helpers/Helper';

export default class Login extends React.Component {
    state = {
        loggedIn: false,
        currentUser: null,
        username: '',
        password: ''
    }

    render() {

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        const { loggedIn, currentUser } = this.state;

        return (
            <div className='LoginWrapper'>
                <div className='LoginContainer'>
                    <form onSubmit={this.handleSubmit}>
                        <Grid container alignItems="center" justify="center" direction="column">
                            <Grid item>
                                <Typography>User Login</Typography>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="nameInput"
                                    name="username"
                                    label="Username"
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleUsernameChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="passwordInput"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange}
                                />
                            </Grid>
                            <UserContext.Consumer>
                                {({ user, loginUser, logoutUser }) => {
                                    if (loggedIn && IsEmptyObject(user)) {
                                        loginUser(currentUser);
                                    } else {
                                        return (
                                            <Button variant="contained" color="primary" type="submit">
                                                <Typography>Login</Typography>
                                            </Button>
                                        )
                                    }
                                }}
                            </UserContext.Consumer>

                            <Grid item>
                                <Link to={'forgot-account'}>
                                    <Button><Typography>Forgot Username / Password?</Typography></Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to={'register'}>
                                    <Button>Create your account</Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>

            </div>
        )
    }

    componentDidMount() {
        this.setState({ username: 'Test1', password: 'Test1' })
    }

    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { username, password } = this.state;

        this.LoginRequest(username, password).then((resultUser) => {
            if (resultUser.user.id.length > 0) {
                this.setState({ loggedIn: true, currentUser: resultUser });
            }
            return resultUser;
        });
    }

    async LoginRequest(username, password) {
        return await LoginA(username, password).then((user) => {
            return user;
        });
    }
}