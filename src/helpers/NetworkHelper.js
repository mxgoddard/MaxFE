// Add error handling and inject constant base url
const LOCAL_BASE_URL = 'https://localhost:5001/api';
const HOSTED_BASE_URL = 'https://maxapp.azurewebsites.net/api';

// Temporary basic switch
const HOSTED = false;

const postRequestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: ''
};

export const GeneralTestApiCall = () => 
{
    fetch(DetermineUrl('general/test'), {
        method: "GET"
    })
    .then(res => res.json())
    .then((result) => {
        console.log(result);
        return result;
    })
    .catch((ex) => console.log(ex));
}

export const ListUsers = () => 
{
    fetch(DetermineUrl('user/list-users'), {
        method: "GET"
    })
    .then(res => res.json())
    .then((result) => {
        console.log(result);
        return result;
    })
    .catch((ex) => console.log(ex));
}

export const LoginA = (username, password) => 
{
    postRequestOptions.body = JSON.stringify({
        'Username': `${username}`,
        'Password': `${password}`
    });

    return fetch(DetermineUrl('user/login'), postRequestOptions)
        .then(res => res.json())
        .then((data) => {
            return data;
        })
        .catch((ex) => console.log(ex));
}


function DetermineUrl(relativePath) {
    let baseUrl = HOSTED ? HOSTED_BASE_URL : LOCAL_BASE_URL;
    return `${baseUrl}/${relativePath}`;
}