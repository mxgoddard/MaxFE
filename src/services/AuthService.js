import axios from 'axios';
import { DetermineUrl } from '../helpers/NetworkHelper';

const Register = (username, password, firstName) => {
    return axios.post(DetermineUrl('user/register'), {
        username,
        password,
        firstName
    })
    .then((response) => {
        if (response.data.user.authToken) {
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }

        return response.data.user;
    });
}

const Login = (username, password) => {
    return axios.post(DetermineUrl('user/login'), {
        username,
        password
    })
    .then((response) => {
        console.log('response');
        console.log(response);
        if (response.data.user.authToken) {
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }

        return response.data.user;
    });
}

const Logout = () => {
    localStorage.removeItem("user");
}

export default { Register, Login, Logout};