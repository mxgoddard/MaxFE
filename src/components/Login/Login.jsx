import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import './Login.css';

export default class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    render() {

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

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
                            <Button variant="contained" color="primary" type="submit">
                                <Typography>Login</Typography>
                            </Button>
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

    }

    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
}