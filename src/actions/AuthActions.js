import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE } from "./Types";
import AuthService from "../services/AuthService";

export const RegisterAction = (username, password, firstName) => (dispatch) => {
    return AuthService.Register(username, password, firstName).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.message
            });

            return Promise.resolve();
        },
        (error) => {
            const message = 
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: REGISTER_FAIL
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message
            });

            return Promise.reject();
        }
    );
};

export const LoginAction = (username, password) => (dispatch) => {
    return AuthService.Login(username, password).then(
        (data) => {
            console.log('data');
            console.log(data);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data }
            });

            return Promise.resolve();
        },
        (error) => {
            const message = 
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message
            });

            return Promise.reject();
        }
    )
};

export const LogoutAction = () => (dispatch) => {
    AuthService.Logout();

    dispatch({
        type: LOGOUT
    });
};