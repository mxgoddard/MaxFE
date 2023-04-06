import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { LoginAction } from "../../actions/AuthActions";
import './Login.css';
import { Button } from "@mui/material";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const Login = (props) => {
    let navigate = useNavigate();

    const form = useRef();
    const checkBtn = useRef();

    // TODO - Change back to blank
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // const { isLoggedIn } = useSelector(state => state.auth);
    let isLoggedIn;
    let authSelector = useSelector(state => state.auth);
    if (authSelector !== undefined) {
        isLoggedIn = authSelector.isLoggedIn;
    }

    // const { message } = useSelector(state => state.message);
    let message;
    let messageSelector = useSelector(state => state.message);
    if (messageSelector !== undefined) {
        message = messageSelector.message;
    }

    const dispatch = useDispatch();

    const onChangeUsername = (event) => {
        const username = event.target.value;
        setUsername(username);
    };

    const onChangePassword = (event) => {
        const password = event.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(LoginAction(username, password))
                .then(() => {
                    navigate("/profile");
                    window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };

    if (isLoggedIn) {
        return <Navigate to="/profile" />
    }

    return (
        <div className='Login-Wrapper'>
            <h1>Login</h1>
            <Form onSubmit={handleLogin} ref={form}>
                <div>
                    <label htmlFor="username">Username</label>
                    <Input
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChangeUsername}
                        validations={[required]}
                    />
                </div>

                <div>
                    <label>Password</label>
                    <Input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                        validations={[required]}
                    />
                </div>

                <div>
                    <button disabled={loading}>
                        {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Login</span>
                    </button>
                </div>

                {message && (
                    <div>
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />

                <Link to={`/register`}>
                    <Button key={'Register'} id='Nav-Bar-Link-Login' sx={{ backgroundColor: '#141414', borderRadius: '100px', padding: '1rem 2rem' }}>
                        Register
                    </Button>
                </Link>
            </Form>
        </div>
    );
};

export default Login;
// import { Button, Grid, Link, TextField, Typography } from '@mui/material';
// import React from 'react';
// import './Login.css';
// import { LoginA } from '../../helpers/NetworkHelper';
// import { UserContext } from '../../UserContext';
// import { IsEmptyObject } from '../../helpers/Helper';

// export default class Login extends React.Component {
//     state = {
//         loggedIn: false,
//         currentUser: null,
//         username: '',
//         password: ''
//     }

//     render() {

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleUsernameChange = this.handleUsernameChange.bind(this);
//         this.handlePasswordChange = this.handlePasswordChange.bind(this);

//         const { loggedIn, currentUser } = this.state;

//         return (
//             <div className='LoginWrapper'>
//                 <div className='LoginContainer'>
//                     <form onSubmit={this.handleSubmit}>
//                         <Grid container alignItems="center" justify="center" direction="column">
//                             <Grid item>
//                                 <Typography>User Login</Typography>
//                             </Grid>
//                             <Grid item>
//                                 <TextField
//                                     id="nameInput"
//                                     name="username"
//                                     label="Username"
//                                     type="text"
//                                     value={this.state.username}
//                                     onChange={this.handleUsernameChange}
//                                 />
//                             </Grid>
//                             <Grid item>
//                                 <TextField
//                                     id="passwordInput"
//                                     name="password"
//                                     label="Password"
//                                     type="password"
//                                     value={this.state.password}
//                                     onChange={this.handlePasswordChange}
//                                 />
//                             </Grid>
//                             <UserContext.Consumer>
//                                 {({ user, loginUser, logoutUser }) => {
//                                     if (loggedIn && IsEmptyObject(user)) {
//                                         loginUser(currentUser);
//                                     } else {
//                                         return (
//                                             <Button variant="contained" color="primary" type="submit">
//                                                 <Typography>Login</Typography>
//                                             </Button>
//                                         )
//                                     }
//                                 }}
//                             </UserContext.Consumer>

//                             <Grid item>
//                                 <Link to={'forgot-account'}>
//                                     <Button><Typography>Forgot Username / Password?</Typography></Button>
//                                 </Link>
//                             </Grid>
//                             <Grid item>
//                                 <Link to={'register'}>
//                                     <Button>Create your account</Button>
//                                 </Link>
//                             </Grid>
//                         </Grid>
//                     </form>
//                 </div>

//             </div>
//         )
//     }

//     componentDidMount() {
//         this.setState({ username: 'Test1', password: 'Test1' })
//     }

//     handleUsernameChange(event) {
//         this.setState({ username: event.target.value });
//     }

//     handlePasswordChange(event) {
//         this.setState({ password: event.target.value });
//     }

//     handleSubmit(event) {
//         event.preventDefault();

//         const { username, password } = this.state;

//         this.LoginRequest(username, password).then((resultUser) => {
//             if (resultUser.user.id.length > 0) {
//                 this.setState({ loggedIn: true, currentUser: resultUser });
//             }
//             return resultUser;
//         });
//     }

//     async LoginRequest(username, password) {
//         return await LoginA(username, password).then((user) => {
//             return user;
//         });
//     }
// }