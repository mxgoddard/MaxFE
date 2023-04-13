import axios from 'axios';
import { AuthHeader } from './AuthHeader';
import { DetermineUrl } from '../helpers/NetworkHelper';

const EditUser = (userId, firstName, password) => {
    return axios.post(DetermineUrl('user/edit-user'), {
        userId,
        firstName,
        password
    }, 
    { 
        headers: AuthHeader() 
    })
    .then((response) => {
        return response.data.User;
    });
};

const GetModeratorBoard = () => {
    return axios.get(DetermineUrl('data/mod', { headers: AuthHeader() }))
};

export default {
    EditUser,
    GetModeratorBoard
}