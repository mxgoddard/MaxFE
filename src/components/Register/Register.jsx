import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { RegisterAction } from "../../actions/AuthActions";
import { Navigate, useNavigate } from "react-router-dom";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const validFirstName = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                Your first name must be between 3 and 20 characters.
            </div>
        );
    }
};

const validUserName = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                Your username must be between 3 and 20 characters.
            </div>
        );
    }
};

// TODO - This should be more robust
const validPassword = (value) => {
    if (value.length < 4 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                Your password must be between 4 and 40 characters.
            </div>
        );
    }
};

const Register = () => {
    let navigate = useNavigate();
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector(state => state.MessageReducer);

    const dispatch = useDispatch();

    const onChangeUsername = (event) => {
        const username = event.target.value;
        setUsername(username);
    };

    const onChangeFirstName = (event) => {
        const firstName = event.target.value;
        setFirstName(firstName);
    };

    const onChangePassword = (event) => {
        const password = event.target.value;
        setPassword(password);
    };

    const handleRegister = (event) => {
        event.preventDefault();

        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(RegisterAction(username, password, firstName))
                .then(() => {
                    setSuccessful(true);
                    navigate("/profile");
                    window.location.reload();
                })
                .catch(() => {
                    setSuccessful(false);
                });
        }
    };

    return (
        <div className='Section-Wrapper'>
            <h1>Register</h1>
            <Form onSubmit={handleRegister} ref={form}>
                {!successful && (
                    <div>
                        <div>
                            <label htmlFor="username">Username</label>
                            <Input
                                type="text"
                                name="username"
                                value={username}
                                onChange={onChangeUsername}
                                validations={[required, validUserName]}
                            />
                        </div>

                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <Input
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={onChangeFirstName}
                                validations={[required, validFirstName]}
                            />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                validations={[required, validPassword]}
                            />
                        </div>

                        <div>
                            <button>Sign Up</button>
                        </div>
                    </div>
                )}

                {message && (
                    <div className="form-group">
                        <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                            {message}
                        </div>
                    </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>

        </div>
    );
};

export default Register;