import axios from 'axios';
import { DetermineUrl } from '../helpers/NetworkHelper';

const Register = (username, password, firstName) => {
    return axios.post(DetermineUrl('user/register'), {
        username,
        password,
        firstName
    })
    .then((response) => {
        if (response.data.User.AuthToken) {
            localStorage.setItem('user', JSON.stringify(response.data.User));
        }

        return response.data.User;
    });
}

const Login = (username, password) => {
    return axios.post(DetermineUrl('user/login'), {
        username,
        password
    })
    .then((response) => {
        if (response.data.User.AuthToken) {
            localStorage.setItem('user', JSON.stringify(response.data.User));
        }

        return response.data.User;
    });
}

const Logout = () => {
    localStorage.removeItem("user");
}

export default { Register, Login, Logout};