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

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector((state) => state.AuthReducer);
    const { message } = useSelector((state) => state.MessageReducer);

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